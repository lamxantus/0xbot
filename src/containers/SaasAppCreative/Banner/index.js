import React, { useEffect, useState } from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Image from 'common/components/Image';
import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from './banner.style';
import playIcon from 'common/assets/image/saasAppCreative/icons/play.svg';
import dashboard from 'common/assets/image/saasAppCreative/banner-dashboard.png';
import bubble1 from 'common/assets/image/saasAppCreative/banner-bubble-1.png';
import bubble2 from 'common/assets/image/saasAppCreative/banner-bubble-2.png';
import bubble3 from 'common/assets/image/saasAppCreative/banner-bubble-3.png';
import { Modal } from '@nextui-org/react';


const Banner = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [openModal, setModal] = useState(false);
  

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Section id="home">
      <Container width="1360px">
        <BannerContentWrapper>
          <BannerContent>
            <h2 className="animate__animated animate__fadeInUp">
              The leading Customer <span>dashboard</span> for your daily
              workspace
            </h2>
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
            <Buttons>
              <Button title="Get Free Trial" className="button-one" />
              <button className="button-two" onClick={() => setModal(true)}>
                <span className="play-icon">
                  <img src={playIcon?.src} alt="play Icon" />
                </span>
                <span className="btn-txt">
                  <span className="primary">Explore</span> Intro Video
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard" />
            <Image
              src={bubble1?.src}
              alt="bubble 1"
              className={`banner-bubble bubble-1 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble2?.src}
              alt="bubble 2"
              className={`banner-bubble bubble-2 ${domLoaded ? 'active' : ''}`}
            />
            <Image
              src={bubble3?.src}
              alt="bubble 3"
              className={`banner-bubble bubble-3 ${domLoaded ? 'active' : ''}`}
            />
          </Figure>
        </BannerContentWrapper>
      </Container>
      <Modal
        blur
        width='850px'
        aria-labelledby="Search Panel"
        open={openModal}
        onClose={() => setModal(false)}
        justify="center"
        css={{
          background: 'transparent !important',
          borderRadius: '0px !important',
        }}
      >
        <div style={{ margin: 'auto' }}>
          <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Modal>
    </Section>
  );
};

export default Banner;
