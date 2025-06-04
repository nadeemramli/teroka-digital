import { Column, Row, Text, Card, Image } from "@/once-ui/components";
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
      <Column gap="xl" align="center" paddingY="xxl">
        <Column gap="m" align="center" maxWidth="800px">
          <Text variant="h2" align="center">
            Real Results, Real Growth
          </Text>
          <Text variant="body1" align="center" color="secondary">
            See how we've helped businesses achieve their digital marketing
            goals
          </Text>
        </Column>

        <Column gap="xxl" className={styles.results}>
          {results.map((result, index) => (
            <Card
              key={result.id}
              className={`${styles.resultCard} ${
                index % 2 === 1 ? styles.reversed : ""
              }`}
              padding="none"
            >
              <Row gap="none" className={styles.resultContent} wrap>
                <Column
                  gap="l"
                  padding="xl"
                  className={styles.textContent}
                  flex={1}
                >
                  <Column gap="m">
                    <Text variant="h3">{result.title}</Text>
                    <Text variant="body1" color="secondary">
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
                        <Text variant="h2" color="primary">
                          {metric.value}
                        </Text>
                        <Text variant="body2" color="secondary">
                          {metric.label}
                        </Text>
                      </Column>
                    ))}
                  </Row>
                </Column>

                {result.image && (
                  <div className={styles.imageContainer}>
                    <Image
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
