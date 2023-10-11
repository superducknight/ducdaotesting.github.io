import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '500%',
  fontSize: isPortrait ? '5.5em' : '6.5em',
  margin: 0,
  fontWeight: '400',
  fontFamily: 'Luxurious Script',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '110vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>The perfect combination of</Title>
        <SubTitle>
          The bride <b>{config.bride.name}</b> is a woman of soft and kindness. <br />
          She has a radiant personality that warms the hearts of everyone she meets. <br />
          <b>{config.bride.name}</b> is celebrated for her grace and her genuine love and care for others.
          <br />
          <br />
          The groom <b>{config.groom.name}</b> is a man of integrity and compassion. <br />
          He possesses a strong sense of responsibility and a heart that's always open to those in need. <br />
          <b>{config.groom.name}</b> is known for his loyalty and the unwavering support he offers to his loved ones.
          <br />
          <br />
          Two individuals with different preferences and values,
          <br />
          We grow alike through love,
          <br />
          We are about to embark on a journey called life together.
          <br />
          <br />
          With warm encouragement and blessings,
          <br />
          I hope you enjoy this strong beginning."
          <br />
          <br />
          {config.groom.fatherName} · {config.groom.motherName}의 아들 {config.groom.name}
          <br />
          {config.bride.fatherName} · {config.bride.motherName}의 딸 {config.bride.name}
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
