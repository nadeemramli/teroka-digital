import { useState } from "react";
import { Column, Text, Card } from "@/once-ui/components";
import styles from "./FAQSection.module.scss";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <Column gap="xl" align="center" paddingY="xxl">
        <Column gap="m" align="center" maxWidth="800px">
          <Text variant="h2" align="center">
            Frequently Asked Questions
          </Text>
          <Text variant="body1" align="center" color="secondary">
            Find answers to common questions about our services
          </Text>
        </Column>

        <Column gap="m" className={styles.faqs}>
          {faqs.map((faq) => (
            <Card
              key={faq.id}
              className={`${styles.faqCard} ${
                openFaqId === faq.id ? styles.open : ""
              }`}
              padding="l"
            >
              <button
                className={styles.faqButton}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaqId === faq.id}
              >
                <Text variant="h4" className={styles.question}>
                  {faq.question}
                </Text>
                <div className={styles.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              <div className={styles.answer}>
                <Text variant="body1" color="secondary">
                  {faq.answer}
                </Text>
              </div>
            </Card>
          ))}
        </Column>
      </Column>
    </section>
  );
}
