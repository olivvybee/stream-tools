'use client';

import { useSearchParams } from 'next/navigation';

import { Card } from './Card';

import styles from './page.module.css';
import { BeeScroller } from './BeeScroller';
import { Suspense } from 'react';

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

const MessagePageWithSuspense = () => (
  <Suspense>
    <MessagePage />
  </Suspense>
);

export default MessagePageWithSuspense;
