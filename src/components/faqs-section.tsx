'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/primitives/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsSection() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'compass',
            question: 'What architectural services do you offer in your portfolio?',
            answer: 'Our portfolio spans residential, commercial, and landscape architectural projects. We offer master planning, interior design, renovation, and custom architecture for both private and public spaces, blending aesthetic design with functional requirements.',
        },
        {
            id: 'item-2',
            icon: 'layers',
            question: 'Can I see examples of completed residential projects?',
            answer: 'Absolutely. Our portfolio showcases a range of completed residential projects including luxury villas, modern apartments, and sustainable family homes. Please visit the "Projects" or "Gallery" section to explore detailed case studies and imagery.',
        },
        {
            id: 'item-3',
            icon: 'briefcase',
            question: 'How does your architectural design process work?',
            answer: 'Our process begins with an initial consultation to understand your requirements and vision. We move through conceptual sketches, 3D modeling, material selection, and detailed planning, ensuring transparency and collaboration at every stage. Construction supervision ensures quality delivery.',
        },
        {
            id: 'item-4',
            icon: 'award',
            question: 'Have your architectural projects received any awards?',
            answer: 'Yes, several of our portfolio projects have been recognized for innovation, sustainability, and design excellence by industry bodies. Details of our award-winning work can be found in the Awards section or upon request.',
        },
        {
            id: 'item-5',
            icon: 'users',
            question: 'Do you collaborate with clients and consultants?',
            answer: 'Collaboration is central to our practice. We work closely with clients, engineers, consultants, and contractors throughout the project lifecycle to ensure that design intent and quality are achieved without compromise.',
        },
        {
            id: 'item-6',
            icon: 'building-2',
            question: 'What is your approach to sustainable design?',
            answer: 'Sustainability is integral to our architecture. We prioritize energy efficiency, material longevity, passive design principles, and site-sensitive solutions to minimize environmental impact while maximizing user comfort.',
        },
        {
            id: 'item-7',
            icon: 'calendar',
            question: 'How can I initiate a new project with you?',
            answer: 'Simply reach out using the contact form or by emailing us directly. We’ll schedule a free consultation to discuss your vision, requirements, timeline, and scope, with no obligation.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20" id="faqs">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold font-serif text-primary">FAQs: Architectural Portfolio</h2>
                            <p className="text-muted-foreground mt-4">
                                Have more questions about our work or process?{' '}
                                <Link
                                    href="/contact"
                                    className="text-accent font-medium hover:underline">
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                                >
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6 text-accent">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base font-medium">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
