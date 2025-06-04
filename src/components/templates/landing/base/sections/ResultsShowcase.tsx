import { Column, Row, Text, Card, SmartImage } from "@/once-ui/components";
import styles from "./ResultsShowcase.module.scss";

interface Metric {
  label: string;
  value: string;
}

interface Result {
  id: string;
  title: string;
  description: string;
  metrics: Metric[];
  image?: string;
}

interface ResultsShowcaseProps {
  results: Result[];
}

export function ResultsShowcase({ results }: ResultsShowcaseProps) {
  return (
    <section className={styles.resultsShowcase}>
      <Column gap="xl" align="center" paddingY="xl">
        <Column gap="m" align="center" maxWidth={800}>
          <Text variant="heading-strong-l" align="center">
            Real Results, Real Growth
          </Text>
          <Text variant="body-default-l" align="center" color="secondary">
            See how we&apos;ve helped businesses achieve their digital marketing
            goals
          </Text>
        </Column>

        <Column gap="xl" className={styles.results}>
          {results.map((result, index) => (
            <Card
              key={result.id}
              className={`${styles.resultCard} ${
                index % 2 === 1 ? styles.reversed : ""
              }`}
            >
              <Row className={styles.resultContent} wrap>
                <Column
                  gap="l"
                  padding="xl"
                  className={styles.textContent}
                  flex={1}
                >
                  <Column gap="m">
                    <Text variant="heading-strong-m">{result.title}</Text>
                    <Text variant="body-default-l" color="secondary">
                      {result.description}
                    </Text>
                  </Column>

                  <Row gap="l" wrap className={styles.metrics}>
                    {result.metrics.map((metric) => (
                      <Column
                        key={metric.label}
                        gap="xs"
                        className={styles.metric}
                      >
                        <Text variant="heading-strong-l" color="accent">
                          {metric.value}
                        </Text>
                        <Text variant="body-default-m" color="secondary">
                          {metric.label}
                        </Text>
                      </Column>
                    ))}
                  </Row>
                </Column>

                {result.image && (
                  <div className={styles.imageContainer}>
                    <SmartImage
                      src={result.image}
                      alt={result.title}
                      width={600}
                      height={400}
                      className={styles.resultImage}
                    />
                  </div>
                )}
              </Row>
            </Card>
          ))}
        </Column>
      </Column>
    </section>
  );
}
