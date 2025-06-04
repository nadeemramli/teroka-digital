import { Column, Row, Text, Card, Avatar } from "@/once-ui/components";
import styles from "./SocialProof.module.scss";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

interface SocialProofProps {
  testimonials: Testimonial[];
}

export function SocialProof({ testimonials }: SocialProofProps) {
  return (
    <section className={styles.socialProof}>
      <Column gap="xl" align="center" paddingY="xl">
        <Column gap="m" align="center" maxWidth={800}>
          <Text variant="heading-strong-l" align="center">
            What Our Clients Say
          </Text>
          <Text variant="body-default-l" align="center" color="secondary">
            Hear from businesses that have transformed their digital presence
            with us
          </Text>
        </Column>

        <Row gap="l" wrap className={styles.testimonials}>
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={styles.testimonialCard}
              padding="xl"
            >
              <Column gap="l" className={styles.testimonialContent}>
                <Text variant="body-default-l" className={styles.quote}>
                  &ldquo;{testimonial.content}&rdquo;
                </Text>

                <Row gap="m" align="center" className={styles.author}>
                  {testimonial.image ? (
                    <Avatar src={testimonial.image} size="m" />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <Column gap="xs">
                    <Text variant="label-default-m" weight="strong">
                      {testimonial.name}
                    </Text>
                    <Text variant="label-default-s" color="secondary">
                      {testimonial.role}, {testimonial.company}
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Card>
          ))}
        </Row>
      </Column>
    </section>
  );
}
