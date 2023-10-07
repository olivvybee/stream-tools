'use client';

import { useSearchParams } from 'next/navigation';

import { Card } from './Card';

import styles from './page.module.css';
import { BeeScroller } from './BeeScroller';

const MessagePage = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get('text');

  return (
    <div className={styles.background}>
      <BeeScroller direction="left" />
      {!!text && <Card text={text} />}
      <BeeScroller direction="right" />
    </div>
  );
};

export default MessagePage;
