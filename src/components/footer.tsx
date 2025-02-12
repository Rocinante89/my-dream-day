export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-sm text-muted-foreground">&copy; 2025 My Dream Day.ie. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-6 md:order-2">
                    <a
                        href="tel:+353876069169"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Call us at 087 606 9169"
                    >
                        087 606 9169
                    </a>
                    <a
                        href="mailto:Mydreamdayireland@gmail.com?subject=Enquiry from Website"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email us at Mydreamdayireland@gmail.com"
                    >
                        Mydreamdayireland@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}

