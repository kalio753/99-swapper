import { LoadingSpinner } from "@/components/common/loading-spinner"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import TokenBox from "@/components/common/token-box"
import { Button } from "@/components/ui/button"

import { MoveDown } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"
import type { Token } from "@/models/token"

interface SwapperProps {
    swapping: boolean
    tokenFrom?: Token
    tokenTo?: Token
    setTokenFrom: (token: Token | undefined) => void
    setTokenTo: (token: Token | undefined) => void
}

export default function Swapper({
    swapping,
    tokenFrom,
    tokenTo,
    setTokenFrom,
    setTokenTo,
}: SwapperProps) {
    const [openConfirm, setOpenConfirm] = useState(false)

    const handleSwapClick = () => {
        setOpenConfirm(true)
    }

    const handleConfirmSwap = () => {
        const amountOut =
            tokenTo?.balance !== undefined && tokenFrom?.price !== undefined
                ? (tokenTo.balance - tokenFrom.price * 0.05).toFixed(6)
                : 0
        toast.success(
            `Successfully swapped ${tokenFrom?.balance ?? 0} ${
                tokenFrom?.currency
            } for ${amountOut} ${tokenTo?.currency}`,
        )
        setOpenConfirm(false)
        setTokenFrom(
            tokenFrom ? { ...tokenFrom, balance: undefined } : undefined,
        )
        setTokenTo(tokenTo ? { ...tokenTo, balance: undefined } : undefined)
    }
    return (
        <>
            <TokenBox title="From" token={tokenFrom} setToken={setTokenFrom} />
            <div
                className="p-2 w-fit mx-auto rounded-full bg-99/80 cursor-pointer my-4 group shadow-lg"
                onClick={() => {
                    setTokenFrom(
                        tokenTo
                            ? {
                                  ...tokenTo,
                                  balance: tokenFrom?.balance,
                              }
                            : undefined,
                    )
                    setTokenTo(
                        tokenFrom
                            ? {
                                  ...tokenFrom,
                                  balance: undefined,
                              }
                            : undefined,
                    )
                }}
            >
                <MoveDown className="transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <TokenBox
                title="To"
                inputDisabled
                token={tokenTo}
                setToken={setTokenTo}
            />
            <Button
                size="lg"
                className="w-[calc(100%-2rem)] py-2 mx-auto mt-2 rounded-2xl bg-99 text-foreground font-medium cursor-pointer hover:bg-99/90"
                disabled={
                    !tokenFrom || !tokenTo || !tokenFrom?.balance || swapping
                }
                onClick={handleSwapClick}
            >
                {swapping ? <LoadingSpinner size={20} /> : "Swap"}
            </Button>
            <Dialog open={openConfirm} onOpenChange={setOpenConfirm}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Swap</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to swap{" "}
                            {tokenFrom?.balance ?? 0} {tokenFrom?.currency} for{" "}
                            {tokenTo?.balance !== undefined &&
                            tokenFrom?.price !== undefined
                                ? (
                                      tokenTo.balance -
                                      tokenFrom.price * 0.05
                                  ).toFixed(6)
                                : 0}{" "}
                            {tokenTo?.currency}?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2 mt-4">
                        <Button
                            variant="outline"
                            onClick={() => setOpenConfirm(false)}
                            className="cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleConfirmSwap}
                            className="bg-99 text-foreground hover:bg-99/90 font-medium cursor-pointer"
                        >
                            Confirm
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
