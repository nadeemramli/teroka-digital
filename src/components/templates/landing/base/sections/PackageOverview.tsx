import { Column, Row, Text, Button, Card } from "@/once-ui/components";
import styles from "./PackageOverview.module.scss";

interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

interface PackageOverviewProps {
  packages: Package[];
}

export function PackageOverview({ packages }: PackageOverviewProps) {
  // Highlight the Growth package by default
  const highlightedPackageId = "growth";

  return (
    <section className={styles.packageOverview}>
      <Column gap="xl" align="center" paddingY="xxl">
        <Column gap="m" align="center" maxWidth="800px">
          <Text variant="h2" align="center">
            Choose Your Growth Path
          </Text>
          <Text variant="body1" align="center" color="secondary">
            Select the package that best fits your business needs and goals
          </Text>
        </Column>

        <Row gap="l" wrap className={styles.packages}>
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`${styles.packageCard} ${
                pkg.id === highlightedPackageId ? styles.highlighted : ""
              }`}
              padding="xl"
            >
              <Column gap="l" height="100%">
                <Column gap="m">
                  <Text variant="h3">{pkg.name}</Text>
                  <Text variant="h2" color="primary">
                    {pkg.price === 0
                      ? "Custom"
                      : `RM${pkg.price.toLocaleString()}`}
                  </Text>
                  <Text variant="body2" color="secondary">
                    {pkg.description}
                  </Text>
                </Column>

                <Column gap="m" className={styles.features}>
                  {pkg.features.map((feature) => (
                    <Row key={feature} gap="m" align="center">
                      <div className={styles.checkmark}>✓</div>
                      <Text variant="body2">{feature}</Text>
                    </Row>
                  ))}
                </Column>

                <Button
                  variant={
                    pkg.id === highlightedPackageId ? "primary" : "secondary"
                  }
                  href={pkg.ctaLink}
                  className={styles.ctaButton}
                >
                  {pkg.ctaText}
                </Button>
              </Column>
            </Card>
          ))}
        </Row>
      </Column>
    </section>
  );
}
