import { useRef } from 'react';
import { styled } from '@stitches/react';
import { Col, Row, Image } from 'antd';
import useOnScreen from '../hooks/useOnScreen';

import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

// import { LazyLoadImage } from "react-lazy-load-image-component";

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 5% 10% 5%' : '5% 10% 5% 10%',
});

const Title = styled('p', {
  color: '#FFFFFF',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500'
});

const Grid = styled('div', {
  // padding: isPortrait ? '1rem 0.5rem 1rem 0.5rem' : '5% 10% 5% 10%',
  // alignContent: 'center'
})

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {
  // const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowSize();
  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: 'auto',
        background: onScreen ? '#212121' : '#EFEBE9',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
        paddingBottom: isPortrait ? '10%' : '5%'
      }}
    >
      <Layout>
        <Title>Beautiful moments of ours.</Title>
      </Layout>
      {/* <Space>
        {isLoading && (
          <div className="loading-spinner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh'}}>
          <Spin size="large"/>
          </div>
        )}
      </Space> */}
      
      <Row gutter={[24, 24]} justify={'center'}>
        {config.galleryImages.map((image, index) => (
          <Grid>
            <Col key={index} span={isPortrait ? 6 : 3}>
              <Image width={isPortrait ? width / 4 - 10 : width / 8 - 10} src={image}/>
            </Col>
          </Grid>
        ))}
      </Row>
    </section>
  );
};

export default Gallery;
