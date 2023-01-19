import { FC, useEffect, useRef } from 'react';
import Ztext from 'react-ztext';
import Zdog from 'zdog';
import styles from './PartyStage.module.css';

export type PropType = {
  displayText: string;
};

const PartyStageCapsule: FC<PropType> = ({ displayText }) => {
  const spanDom = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (spanDom.current) {
      const nodeList = spanDom.current.querySelectorAll('div > span > span');
      Object.keys(nodeList).forEach((key) => {
        nodeList[Number(key)].innerHTML = displayText;
      });

      const nodeList2 = spanDom.current.querySelectorAll('div > span');
      Object.keys(nodeList2).forEach((key) => {
        nodeList2[Number(key)].classList.remove('displaytext-animation');
        nodeList2[Number(key)].classList.add('displaytext-animation');
      });
    }
  }, [displayText]);

  useEffect(() => {
    const illo = new Zdog.Illustration({
      // set canvas with selector
      element: '#zdogCanvas',
      rotate: { x: -0.3 },
    });

    const dome = new Zdog.Hemisphere({
      addTo: illo,
      diameter: 300,
      // fill enabled by default
      // disable stroke for crisp edge
      stroke: false,
      color: '#46B4AB',
      backface: 'url("#gachaGradient")',
      rotate: { x: -Zdog.TAU / 4 },
    });

    const dome2 = dome.copy({
      // overwrite original options
      translate: { y: 0, x: -30 },
      rotate: { x: -Zdog.TAU / -4, y: 0 },
      color: '#EFAE2D',
    });

    let ticker = 0;
    const cycleCount = 150;

    const animate = () => {
      const progress = ticker / cycleCount;
      // apply easing to rotation
      const tween = Zdog.easeInOut(progress % 1, 3);
      illo.rotate.y = tween * Zdog.TAU + -4.8;
      ticker += 1;

      /* if (dome2.rotate.y >= 0.7) {
        dome2.rotate.y = 0;
      }
      if (dome2.translate.y <= -100) {
        dome2.translate.y = 0;
      } */

      if (dome2.rotate.y <= 0.7) {
        dome2.rotate.y += 0.03;
      }
      if (dome2.translate.y >= -100) {
        dome2.translate.y -= 4;
      }

      illo.updateRenderGraph();
      // animate next frame
      requestAnimationFrame(animate);
    };
    // start animation
    animate();
  }, []);

  return (
    <div className={styles.container}>
      <svg id="zdogCanvas" width="600" height="600" />

      <svg id="gradientContainer" width="0" height="0">
        <defs>
          <linearGradient id="gachaGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#B51409" />
            <stop offset="50%" stopColor="#DEAF0A" />
            <stop offset="100%" stopColor="#46B4AB" />
          </linearGradient>
        </defs>
      </svg>

      <span id="vertical" ref={spanDom}>
        <Ztext
          depth="25px"
          direction="both"
          event="none"
          eventRotation="30deg"
          eventDirection="default"
          fade={false}
          layers={20}
          perspective="100px"
        >
          {displayText}
        </Ztext>
      </span>
    </div>
  );
};

export default PartyStageCapsule;
