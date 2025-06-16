import { NavBar } from "@/components/common/navigation-bar"
import { ThemeProvider } from "@/components/common/theme-provider"
import "./App.css"
import { ThemeToggle } from "./components/common/theme-toggle"
import { Button } from "./components/ui/button"
import TradeDetail from "./components/common/trade-detail"
import { useState, useEffect } from "react"
import type { Token } from "./models/token"
import { motion } from "framer-motion"
import Swapper from "./components/common/swapper"

function App() {
    const [tokenFrom, setTokenFrom] = useState<Token | undefined>()
    const [tokenTo, setTokenTo] = useState<Token | undefined>()
    const [swapping, setSwapping] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (!tokenFrom || !tokenTo) return
        if (!tokenFrom.balance) {
            if (tokenTo.balance !== undefined)
                setTokenTo({ ...tokenTo, balance: undefined })
            return
        }
        const amountTo = (tokenFrom.balance * tokenFrom.price) / tokenTo.price
        if (tokenTo.balance !== amountTo) {
            setSwapping(true)
            timer = setTimeout(() => {
                setTokenTo({ ...tokenTo, balance: amountTo })
                setSwapping(false)
            }, 2500)
        }
        return () => clearTimeout(timer)
    }, [tokenFrom, tokenTo])

    return (
        <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="bg-background text-foreground py-1">
                    <div className="flex justify-between items-center">
                        <NavBar />
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Button className="cursor-pointer">
                                Connect Wallet
                            </Button>
                        </div>
                    </div>

                    <motion.div
                        className="box-border flex flex-col items-center justify-center my-10 mx-auto w-4/5 p-8 mb-8 "
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0 }}
                    >
                        <h1 className="mb-2">
                            <span className="linear-wipe font-bold m-0 mt-2 text-[64px]  leading-[72px]">
                                99
                            </span>{" "}
                            Swapper
                        </h1>
                        <div className="max-w-200 text-lg font-medium text-muted-foreground">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quis, expedita praesentium excepturi esse est
                            repellendus numquam quibusdam dolorem accusamus qui
                            quasi consectetur.
                        </div>
                    </motion.div>

                    <div className="w-4/5 flex justify-around items-start gap-20 mb-10 mx-auto">
                        <motion.div
                            className="box-border flex-1/2 pb-4"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            <h2 className="text-left mx-5 my-4">Swap Tokens</h2>

                            <Swapper
                                swapping={swapping}
                                setTokenFrom={setTokenFrom}
                                setTokenTo={setTokenTo}
                                tokenFrom={tokenFrom}
                                tokenTo={tokenTo}
                            />
                        </motion.div>
                        <motion.div
                            className="box-border flex-1/2"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 1.1 }}
                        >
                            <h2 className="text-left mx-5 my-4">
                                Trade Details
                            </h2>
                            <TradeDetail
                                tokenFrom={tokenFrom}
                                tokenTo={tokenTo}
                            />
                        </motion.div>
                    </div>
                </div>
            </ThemeProvider>
        </motion.div>
    )
}

export default App
