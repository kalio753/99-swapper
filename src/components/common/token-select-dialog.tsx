import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import mockPrice from "@/data/mock_price.json"
import type { Token } from "@/models/token"
import { useState } from "react"

interface TokenSelectDialogProps {
    isOpenDialog: boolean
    setIsOpenDialog: (isOpen: boolean) => void
    setToken: (token: Token) => void
}

export default function TokenSelectDialog({
    isOpenDialog,
    setIsOpenDialog,
    setToken,
}: TokenSelectDialogProps) {
    const [search, setSearch] = useState("")
    const filteredTokens = mockPrice.filter((token) =>
        token.currency.toLowerCase().includes(search.toLowerCase()),
    )
    return (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select A Token</DialogTitle>
                    <DialogDescription></DialogDescription>
                    <div>
                        <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1 my-4">
                            <SearchIcon className="h-4 w-4 mr-2.5" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full border-0 focus-visible:ring-0 focus-visible:border-0"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="h-64 max-h-[50vh] overflow-y-auto">
                            {filteredTokens.map((token: Token) => (
                                <div
                                    key={token.currency}
                                    className="flex items-center justify-between p-2 hover:bg-primary-foreground cursor-pointer mr-2"
                                    onClick={() => {
                                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                        const { balance, ...rest } = token
                                        setToken(rest)
                                        setIsOpenDialog(false)
                                    }}
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`/src/assets/tokens/${token.currency}.svg`}
                                            alt={token.currency}
                                            className="w-6 h-6"
                                        />
                                        <span>{token.currency}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        Balance: 0
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
