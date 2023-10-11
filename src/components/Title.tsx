import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: 'auto',
  background: '#DADADA',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '42px' : '5.2em',
  margin: 0,
  fontWeight: '500',
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '46px' : '5.5em',
  margin: '24px 0',
  fontWeight: '300',
  fontFamily: 'Luxurious Script'
});

const DateLocation = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '24px' : '3em',
  margin: '24px 0',
  fontWeight: '300',
  fontFamily: 'Noto Serif'
})

const ImageLayout = styled('div', {
  width: '100%',
  background: '#DADADA',
  bottom: '-5px',
  textAlign: 'center',
  position: 'relative',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

type TitleProps = {
  config: ConfigsType;
};

const Title = ({ config }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        gravity={0.2}
        colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
        recycle={false}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout>
          <SubTitleLayout>Wedding Invitation</SubTitleLayout>
          <TitleLayout>
            {config.groom.name} &amp; {config.bride.name}
          </TitleLayout>
          <DateLocation>
            {config.weddingDate}
            <br />
            {config.weddingLocation}
          </DateLocation>
        </Layout>
        <ImageLayout>
          <Image src={config.titleImage} alt="Wedding Invitation Title Picutre" />
        </ImageLayout>
      </Section>
    </>
  );
};

export default Title;
