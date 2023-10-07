import styles from './Card.module.css';

export interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps) => (
  <div className={styles.cardWrapper}>
    <div className={styles.card}>{text}</div>
  </div>
);
