import { Button } from "@/components/ui/button"
import * as React from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const NAVIGATION_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/products-and-services", label: "Services" },
    { href: "/contact-us", label: "Contact" },
]

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">
                        My Dream Day.ie
                    </a>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {NAVIGATION_ITEMS.map((item) => (
                                <NavigationMenuItem key={item.href}>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Navigation */}
                    <Drawer>
                        <DrawerTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Navigation</DrawerTitle>
                            </DrawerHeader>
                            <div className="px-4">
                                <nav className="flex flex-col space-y-4">
                                    {NAVIGATION_ITEMS.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg font-medium hover:text-primary"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}

