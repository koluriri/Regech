import Script from 'next/script';
import { FC } from 'react';
import styles from './PartyStage.module.css';

const PartyStageBg: FC = () => (
  <>
    <Script
      src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
      onReady={() => {
        particlesJS('particles', {
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 200,
              },
            },
            color: {
              value: [
                '#EA5532',
                '#F6AD3C',
                '#FFF33F',
                '#00A95F',
                '#00ADA9',
                '#00AFEC',
                '#4D4398',
                '#E85298',
              ],
            },
            shape: {
              type: 'polygon',
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 3,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: true,
                speed: 20,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 8,
              direction: 'bottom',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        });
      }}
    />
    <div id="particles" />
    <div className={`${styles.bg}`} />
  </>
);

export default PartyStageBg;
