import { Button } from "@/components/ui/button"
//import Link from 'astro-typesafe-routes/link';

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">
                        My Dream Day.ie
                    </a>
                    <nav className="hidden md:flex space-x-4">
                        <Button variant="ghost" asChild>
                            <a href="/">Home</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/about-us">About Us</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/portfolio">Portfolio</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/products-and-services">Services</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="/contact-us">Contact</a>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

