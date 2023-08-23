import styles from "./layout.module.css";

type ProductsLayoutProps = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return <div className={styles.root}>{children}</div>;
}
