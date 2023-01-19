import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { FC, useCallback } from 'react';
import styles from './PartyStage.module.css';

const PartyStageBg: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesParams = {
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
        direction: 'bottom' as const,
        random: false,
        straight: false,
        out_mode: 'out' as const,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas' as const,
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
  };

  return (
    <>
      <Particles
        id="particles"
        options={particlesParams}
        init={particlesInit}
      />
      <div className={`${styles.bg}`} />
    </>
  );
};

export default PartyStageBg;
