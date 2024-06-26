import * as styles from "./GlyphPreview.module.scss";

type FontGlyphProps = {
  name: string;
  binary: string;
  unicode: string;
  hex: string;
};

export function GlyphPreview({ name, binary, unicode, hex }: FontGlyphProps) {
  return (
    <div className={styles["glyph"]}>
      <div className={styles["name"]}>{name}</div>
      <div className={styles["unicode"]}>{unicode}</div>
      <div className={styles["codes"]}>
        <span className={styles["code"]}>{binary}</span>
        <span className={styles["code"]}>{hex}</span>
      </div>
    </div>
  );
}
