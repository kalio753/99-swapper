import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import TokenSelectDialog from "./token-select-dialog"
import { useState } from "react"
import type { Token } from "@/models/token"

interface TokenBoxProps {
    title: string
    inputDisabled?: boolean
    token?: Token
    setToken: (token: Token) => void
}

export default function TokenBox({
    title,
    inputDisabled = false,
    token,
    setToken,
}: TokenBoxProps) {
    const [isOpenDialog, setIsOpenDialog] = useState(false)

    return (
        <div className="box-border-no-shadow my-2 mx-3">
            <div className="flex items-center justify-between rounded-lg m-4">
                <div className="font-medium">{title}</div>
                {token ? (
                    <div className="text-muted-foreground">Balance: 0</div>
                ) : null}
            </div>

            <div className="flex items-center gap-2 m-4">
                <Button
                    variant="outline"
                    className="cursor-pointer flex-1/3"
                    onClick={() => setIsOpenDialog(true)}
                >
                    {token ? (
                        <>
                            <img
                                src={`/src/assets/tokens/${token.currency}.svg`}
                                alt=""
                                className="w-5 h-5"
                            />
                            {token.currency}
                        </>
                    ) : (
                        "Select Token"
                    )}
                </Button>

                <Input
                    type="number"
                    placeholder="0.0"
                    className="flex-2/3 disabled:opacity-75 hide-arrows"
                    disabled={inputDisabled}
                    value={
                        token?.balance === undefined || token?.balance === null
                            ? ""
                            : token.balance
                    }
                    onChange={(e) => {
                        if (!token) return
                        const val = e.target.value
                        setToken({
                            ...token,
                            balance: val === "" ? undefined : Number(val),
                        })
                    }}
                />
            </div>

            {token ? (
                <div className="text-left ml-4 mb-4 text-sm text-muted-foreground">
                    ~ $
                    {token?.balance
                        ? (token.balance * token.price).toFixed(2)
                        : "0"}
                </div>
            ) : null}

            <TokenSelectDialog
                isOpenDialog={isOpenDialog}
                setIsOpenDialog={setIsOpenDialog}
                setToken={setToken}
            />
        </div>
    )
}
