import { Column, Text, Button } from "@/once-ui/components";
import styles from "./CallToAction.module.scss";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CallToAction({
  title,
  description,
  buttonText,
  buttonLink,
}: CallToActionProps) {
  return (
    <section className={styles.callToAction}>
      <div className={styles.background}>
        <div className={styles.overlay} />
      </div>

      <Column gap="xl" align="center" paddingY="xxl" className={styles.content}>
        <Column gap="m" align="center" maxWidth="800px">
          <Text variant="h2" align="center" color="on-primary">
            {title}
          </Text>
          <Text variant="body1" align="center" color="on-primary-secondary">
            {description}
          </Text>
        </Column>

        <Button
          variant="secondary"
          href={buttonLink}
          size="lg"
          className={styles.button}
        >
          {buttonText}
        </Button>
      </Column>
    </section>
  );
}
