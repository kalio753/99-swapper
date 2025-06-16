import * as React from "react"
import { NavLink } from "react-router"
import { Mail, ScrollText, User } from "lucide-react"
import logo from "/99Tech.png"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavBar() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="https://www.99tech.co/"
                                        target="_blank"
                                    >
                                        <img
                                            src={logo}
                                            alt="99Tech Logo"
                                            className="mb-2 w-full h-auto object-contain"
                                        />
                                        <div className="text-base font-medium">
                                            Marketing Technology
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Maximize conversions and reach
                                            untapped audiences with our modern
                                            Mar-Tech solutions.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem
                                href="https://www.99tech.co/#team"
                                title="Introduction"
                                isTargetBlank={true}
                                className="mt-3"
                            >
                                Driven individuals dedicated to embracing
                                emerging technologies and trends.
                            </ListItem>
                            <ListItem href="#" title="Products">
                                Luxe Club, Brand Flood
                            </ListItem>
                            <ListItem href="#" title="Web3">
                                Decentralized web ecosystem for secure, P2P
                                applications and digital ownership.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                    >
                        <NavLink to="#">Swapper</NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                    >
                        <NavLink to="#">Docs</NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <NavLink to="#">
                                        <div className="font-medium">
                                            Brand Flood
                                        </div>
                                        <div className="text-muted-foreground">
                                            Flood the market with your brand.
                                        </div>
                                    </NavLink>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <NavLink to="#">
                                        <div className="font-medium">
                                            Luxe Club
                                        </div>
                                        <div className="text-muted-foreground">
                                            Reward your most valuable customers
                                            with enticing offers and keep them
                                        </div>
                                    </NavLink>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="#"
                                        className="flex-row items-center gap-2"
                                    >
                                        <Mail />
                                        Email
                                    </NavLink>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="#"
                                        className="flex-row items-center gap-2"
                                    >
                                        <User />
                                        The team
                                    </NavLink>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <NavLink
                                        to="#"
                                        className="flex-row items-center gap-2"
                                    >
                                        <ScrollText />
                                        About us
                                    </NavLink>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    isTargetBlank = false,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & {
    href: string
    isTargetBlank?: boolean
}) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <NavLink to={href} target={isTargetBlank ? "_blank" : "_self"}>
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </NavLink>
            </NavigationMenuLink>
        </li>
    )
}
