import type { Token } from "@/models/token"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface TradeDetailProps {
    tokenFrom?: Token
    tokenTo?: Token
}

export default function TradeDetail({ tokenFrom, tokenTo }: TradeDetailProps) {
    const hasTokens =
        !!tokenFrom &&
        !!tokenTo &&
        !!tokenFrom.price &&
        !!tokenTo.price &&
        !!tokenFrom.balance
    const fromBalance = tokenFrom?.balance ?? 0
    const rate = hasTokens ? tokenFrom.price / tokenTo.price : 0
    const protocolFee = hasTokens ? tokenFrom.price * 0.05 : 0
    const amountOut = hasTokens
        ? (fromBalance * tokenFrom.price) / tokenTo.price
        : 0
    const minReceived = hasTokens ? amountOut - protocolFee : 0

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (hasTokens) {
            setLoading(true)
            const timer = setTimeout(() => setLoading(false), 2000)
            return () => clearTimeout(timer)
        } else {
            setLoading(false)
        }
    }, [hasTokens])

    return (
        <>
            <div className="flex items-center justify-between mx-5 my-4">
                <div>Rate</div>
                <div className="text-muted-foreground">
                    {hasTokens
                        ? `1 ${tokenFrom.currency} = ${rate.toLocaleString(
                              undefined,
                              {
                                  maximumFractionDigits: 6,
                              },
                          )} ${tokenTo.currency}`
                        : "Enter an amount"}
                </div>
            </div>

            <div className="flex items-center justify-between mx-5 my-4">
                <div>Price Impact</div>
                <div className="text-muted-foreground">
                    {hasTokens ? (
                        loading ? (
                            <LoadingSpinner size={18} />
                        ) : (
                            "0.00%"
                        )
                    ) : (
                        "—"
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between mx-5 my-4">
                <div>Protocol Fee</div>
                <div className="text-muted-foreground">
                    {hasTokens
                        ? `${protocolFee.toLocaleString(undefined, {
                              maximumFractionDigits: 6,
                          })} ${tokenFrom.currency}`
                        : "—"}
                </div>
            </div>

            <div className="flex items-center justify-between mx-5 my-4">
                <div>Minimum Received</div>
                <div className="text-muted-foreground">
                    {hasTokens
                        ? `${minReceived.toLocaleString(undefined, {
                              maximumFractionDigits: 6,
                          })} ${tokenTo.currency}`
                        : "—"}
                </div>
            </div>
        </>
    )
}
