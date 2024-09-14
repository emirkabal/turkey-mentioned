"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FAQComponent() {
  const t = useTranslations("faq");
  const list = t.raw("items") as { question: string; answer: string }[];
  return (
    <motion.section
      initial={{ y: "2vh", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      viewport={{ amount: 0.5, once: true }}
      className="mx-auto my-96 w-full max-w-3xl px-6"
    >
      <h2 className="mb-24 text-center text-3xl font-bold">{t("title")}</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="w-full"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {list.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="py-6">
            <AccordionTrigger
              className="text-left"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <span itemProp="name">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent
              className="dark:text-zinc-300"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <span itemProp="text">{faq.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
