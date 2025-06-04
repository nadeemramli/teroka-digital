"use client";

import { Grid, SmartImage } from "@/once-ui/components";
import { gallery } from "@/app/resources/content";
import styles from "./MasonryGrid.module.scss";

export default function MasonryGrid() {
  const horizontalImages = gallery.images.filter(
    (img) => img.orientation === "horizontal"
  );
  const verticalImages = gallery.images.filter(
    (img) => img.orientation === "vertical"
  );

  return (
    <Grid
      columns="3"
      mobileColumns="1"
      tabletColumns="2"
      gap="16"
      fillWidth
      className={styles.masonry}
    >
      {gallery.images.map((image, index) => (
        <SmartImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          aspectRatio={image.orientation === "horizontal" ? "16/9" : "3/4"}
          radius="l"
          className={styles.image}
          priority={index < 4}
        />
      ))}
    </Grid>
  );
}
