import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enter Sandman',
    Svg: require('@site/static/img/es.svg').default,
    description: (
      <>
          Tuesdays at 5:30 AM <br/>
          <a href='https://goo.gl/maps/nWX3JkiFmktCbdvU6'>Carlsbad State Beach</a>
      </>
    ),
  },
  {
    title: 'Rolling Ruck',
    Svg: require('@site/static/img/rr.svg').default,
    description: (
      <>
          Thursdays at 5:30 AM <br/>
          <a href='mailto:f3northernsd@gmail.com'>Ask us!</a>
      </>
    ),
  },
  {
    title: 'Stokasaurus',
    Svg: require('@site/static/img/s.svg').default,
    description: (
      <>
          Saturdays at 7:00 AM <br/>
          <a href='https://goo.gl/maps/RrxMSax5QF2aW4Zs8'>Calavera Hills Community Park</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
