'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/data'

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Information
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before your visit to ZUMBIDO TATTOO in Nakameguro, Tokyo. 
            Especially helpful for international visitors.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline group">
                <span className="flex items-start gap-4">
                  <span className="text-primary/50 font-serif text-lg shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {faq.question}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Questions */}
        <div className="mt-12 text-center p-8 bg-secondary/50 border border-border">
          <p className="text-muted-foreground mb-2">
            Have more questions?
          </p>
          <p className="text-foreground">
            Contact us via{' '}
            <a 
              href="https://www.instagram.com/zumbidotattoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram DM
            </a>
            {' '}or email us at{' '}
            <a 
              href="mailto:info@zumbidotattoo.com"
              className="text-primary hover:underline"
            >
              info@zumbidotattoo.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
