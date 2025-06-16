import mockPrice from "@/data/mock_price.json"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"

const MarqueeLoop = () => {
    // Extract currency codes from mockPrice
    const texts = Array.isArray(mockPrice)
        ? mockPrice.map((item) => item.currency)
        : []
    // Generate random chevron directions for each currency
    const chevrons = texts.map(() => (Math.random() > 0.5 ? "up" : "down"))
    return (
        <div className="relative w-full h-8 mt-4 z-0">
            <div
                className="absolute whitespace-nowrap animate-marquee text-base font-semibold text-primary"
                style={{ willChange: "transform" }}
            >
                {Array.isArray(mockPrice) &&
                    mockPrice.map((item, idx) => (
                        <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                                <span
                                    className={`mx-8 inline-flex items-center gap-1 cursor-pointer font-semibold ${
                                        chevrons[idx] === "up"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {item.currency}
                                    {chevrons[idx] === "up" ? (
                                        <ChevronUp className="inline w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="inline w-4 h-4" />
                                    )}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent
                                sideOffset={8}
                            >{`Price: $${item.price.toFixed(
                                6,
                            )}`}</TooltipContent>
                        </Tooltip>
                    ))}
                {/* Duplicate for seamless loop */}
                {Array.isArray(mockPrice) &&
                    mockPrice.map((item, idx) => (
                        <Tooltip key={"dup-" + idx}>
                            <TooltipTrigger asChild>
                                <span
                                    className={`mx-8 inline-flex items-center gap-1 cursor-pointer font-semibold ${
                                        chevrons[idx] === "up"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {item.currency}
                                    {chevrons[idx] === "up" ? (
                                        <ChevronUp className="inline w-4 h-4" />
                                    ) : (
                                        <ChevronDown className="inline w-4 h-4" />
                                    )}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent
                                sideOffset={8}
                            >{`Price: $${item.price.toFixed(
                                6,
                            )}`}</TooltipContent>
                        </Tooltip>
                    ))}
            </div>
        </div>
    )
}

export default MarqueeLoop
