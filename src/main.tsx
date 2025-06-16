import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router"
import { Toaster } from "@/components/ui/sonner"
import { AnimatePresence } from "framer-motion"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AnimatePresence>
                <App />
            </AnimatePresence>
            <Toaster position="top-center" />
        </BrowserRouter>
    </StrictMode>,
)
