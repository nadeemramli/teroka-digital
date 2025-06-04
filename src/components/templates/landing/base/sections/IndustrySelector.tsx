import { Column, Row, Text, Card, Image } from "@/once-ui/components";
import Link from "next/link";
import styles from "./IndustrySelector.module.scss";

interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface IndustrySelectorProps {
  industries: Industry[];
}

export function IndustrySelector({ industries }: IndustrySelectorProps) {
  return (
    <section className={styles.industrySelector}>
      <Column gap="xl" align="center" paddingY="xxl">
        <Column gap="m" align="center" maxWidth="800px">
          <Text variant="h2" align="center">
            Solutions for Your Industry
          </Text>
          <Text variant="body1" align="center" color="secondary">
            Discover how we help businesses in your industry grow their digital
            presence
          </Text>
        </Column>

        <Row gap="l" wrap className={styles.industries}>
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.link}
              className={styles.industryLink}
            >
              <Card className={styles.industryCard} padding="none">
                <div className={styles.imageContainer}>
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={400}
                    height={300}
                    className={styles.industryImage}
                  />
                  <div className={styles.overlay} />
                </div>
                <Column gap="m" padding="l" className={styles.content}>
                  <Text variant="h3">{industry.name}</Text>
                  <Text variant="body2" color="secondary">
                    {industry.description}
                  </Text>
                </Column>
              </Card>
            </Link>
          ))}
        </Row>
      </Column>
    </section>
  );
}
