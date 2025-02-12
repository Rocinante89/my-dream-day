import Link from 'astro-typesafe-routes/link'
import { Button } from './ui/button'
import { CardContent } from './ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"
//import { Image } from 'astro:assets';
import { MagicCard } from './ui/magic-card'

const testimonials = [
    {
        id: 1,
        name: "Sarah & John",
        content: "My Dream Day made our wedding absolutely perfect! The attention to detail was incredible.",
    },
    {
        id: 2,
        name: "Emma & David",
        content: "We couldn't be happier with the service provided. Stuart's expertise made our day truly special.",
    },
    {
        id: 3,
        name: "Laura & Michael",
        content: "The church décor was breathtaking. Everyone was commenting on how beautiful it looked.",
    },
    {
        id: 4,
        name: "Claire & Peter",
        content: "Stuart's creativity and professionalism exceeded our expectations. Our venue looked magical!",
    },
    {
        id: 5,
        name: "Amy & Robert",
        content: "The attention to detail was amazing. My Dream Day truly made our wedding unforgettable.",
    },
]

export const Home = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Dream Day.ie</h1>
                <p className="text-xl mb-8">Wedding & Event Hire Décor</p>
                <p className="max-w-2xl mx-auto text-muted-foreground">
                    We are passionate about planning and decorating your dream day. We specialise in Church Décor, Civil Ceremony
                    Décor and Venue décor.
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                    <p className="mb-4 text-muted-foreground">
                        We have an eye for detail. Our background is in Fresh Flowers. Over the last 20 years we have worked with so
                        many couples over the years making their dream day a reality.
                    </p>
                    <p className="text-muted-foreground">We are a Limerick based company but we travel Nationwide.</p>
                </div>
                <div className="relative aspect-[5/3] overflow-hidden rounded-lg shadow-md">
                    <img
                        src="/placeholder.svg"
                        alt="Wedding Décor"
                        className="object-cover w-full h-full"
                        width={500}
                        height={300}
                    />
                </div>
            </section>

            <section className="mb-12 w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">What Our Clients Say</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id}>
                                <MagicCard>
                                    <CardContent className="p-6">
                                        <p className="mb-4 italic text-muted-foreground">"{testimonial.content}"</p>
                                        <p className="text-right font-semibold">- {testimonial.name}</p>
                                    </CardContent>
                                </MagicCard>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <section className="text-center mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="mb-4 text-muted-foreground">
                    All of our Packages are reasonably priced to suit any budget. We use the highest quality flowers and décor to
                    make your dream day a real life Pinterest Moment.
                </p>
                <a href="/contact-us">
                    <Button>Contact Us Today</Button>
                </a>
            </section>
        </div>
    )
}