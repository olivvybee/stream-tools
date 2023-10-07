import styles from './BeeScroller.module.css';

export interface BeeScrollerProps {
  direction: 'left' | 'right';
}

export const BeeScroller = ({ direction }: BeeScrollerProps) => (
  <div className={`${styles.scroller} ${styles[direction]}`}>
    {direction === 'left' && (
      <>
        {/* There are two copies of each image so that the animation can
        loop by jumping back from the second set to the first set */}
        <BeesLeft />
        <BeesLeft />
      </>
    )}

    {direction === 'right' && (
      <>
        <BeesRight />
        <BeesRight />
      </>
    )}
  </div>
);

const BeesLeft = () => (
  <>
    <img src="/bees/blobbee.png" />
    <img src="/bees/blobbee_pride.png" />
    <img src="/bees/blobbee_mug.png" />
    <img src="/bees/blobbee_trans.png" />
    {/* <img src="/bees/blobbee_laptop.png" /> */}
    <img src="/bees/blobbee_lego.png" />
    <img src="/bees/blobbee_nb.png" />
  </>
);

const BeesRight = () => (
  <>
    <img src="/bees/blobbee_meeple.png" />
    <img src="/bees/blobbee_lesbeean.png" />
    <img src="/bees/blobbee_fox_ears.png" />
    <img src="/bees/blobbee_ace.png" />
    <img src="/bees/blobbee_neurodiverse.png" />
    <img src="/bees/blobbee_agender.png" />
    {/* <img src="/bees/blobbee_heart.png" /> */}
  </>
);
