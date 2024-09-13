import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is the Turkey-Mentioned meme?",
    answer:
      "Turkey-Mentioned is a popular meme where Turkish users flood the comment sections of foreign posts with messages filled with Turkish flags, wolf howls, and patriotic statements. It has become a fun symbol of Turkish internet culture.",
  },
  {
    question: "How can I copy Turkey-Mentioned memes from the site?",
    answer:
      "Simply browse the collection of Turkey-Mentioned texts and click the “Copy” button next to each meme. You can then paste it into any comment section or social media platform.",
  },
  {
    question: "Where did the Turkey-Mentioned meme originate?",
    answer:
      "The meme began on social media platforms when Turkish users started commenting on international posts with patriotic and humorous messages. It quickly became a viral trend, symbolizing Turkish pride in online communities.",
  },
  {
    question: "an I contribute my own Turkey-Mentioned meme to the site?",
    answer:
      "Yes! We encourage community submissions. If you have a unique Turkey-Mentioned comment or meme, feel free to share it with us, and we might feature it on the site.",
  },
  {
    question: "Is this site just for Turkish users?",
    answer:
      "Not at all! While the meme is rooted in Turkish culture, anyone can enjoy, share, and explore the memes. It’s a fun way to learn about Turkish internet humor and engage with the community.",
  },
];

export default function FAQComponent() {
  return (
    <section className="w-full max-w-3xl mx-auto p-6 py-56">
      <h2 className="text-3xl font-bold mb-24 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
