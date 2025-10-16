// Stats section with architectural project details using modern horizontal layout
// Uses the primary color for main text as accent as per the new style directive

export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-12">
                {/* Section header */}
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl text-primary">Presidential Park Highlights</h2>
                    <p className="text-base text-primary">
                        Discover why discerning investors and families trust <span className="font-semibold text-accent">Presidential Park</span> for their dream plots and premium living. Join our growing community and become a part of a landmark address in Bangalore.
                    </p>
                </div>
                {/* Stats + Testimonial Grid */}
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    {/* Stats Block */}
                    <div>
                        <p className="text-primary">
                            Presidential Park delivers premium living across <span className="font-semibold text-accent">13 acres</span> of curated plots, trusted by <span className="font-semibold text-accent">250+ families</span> and fully approved for peace of mind.
                        </p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-4 md:mb-0">
                            <div className="space-y-4 text-center">
                                <div className=" text-primary text-5xl font-extrabold ">13</div>
                                <p className="font-medium text-primary">Acres Spread</p>
                            </div>
                            <div className="space-y-4 text-center">
                                <div className=" text-primary text-5xl font-extrabold">230+</div>
                                <p className="font-medium text-primary">Premium Plots</p>
                            </div>
                            <div className="space-y-4 text-center">
                                <div className=" text-primary text-5xl font-extrabold">250+</div>
                                <p className="font-medium text-primary">Happy Customers</p>
                            </div>
                            <div className="space-y-4 text-center">
                                <div className="text-primary text-5xl font-extrabold">100%</div>
                                <p className="font-medium text-primary">Legal Approval</p>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial / CTA Block */}
                    <div className="relative flex flex-col justify-between h-full">
                        <blockquote className="border-l-4 border-primary pl-4 bg-background/60 rounded-lg shadow-sm py-6">
                            <p className="text-primary">
                                “Secure your future with a premium plot at Presidential Park. The team helped us through every step, making our site visit as seamless and informative as possible.”
                            </p>
                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium text-accent">Satisfied Customer</cite>
                                <img
                                    className="h-5 w-auto dark:invert"
                                    src="https://www.presidentialpark.in/assets/imgs/footerlo.png"
                                    alt="Presidential Park Logo"
                                    height={20}
                                    width="auto"
                                />
                            </div>
                        </blockquote>
                        <div className="mt-8 flex flex-col items-start gap-3">
                            <h3 className="text-xl font-semibold text-primary">Ready to Enquire?</h3>
                            <p className="text-primary text-sm">
                                Fill in your details and our team will get back to you for a free site visit and consultation.
                            </p>
                            <a
                                href="https://www.presidentialpark.in/contact"
                                className="mt-2 inline-block rounded bg-accent px-8 py-3 font-semibold text-white hover:bg-accent/90 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Enquire Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
