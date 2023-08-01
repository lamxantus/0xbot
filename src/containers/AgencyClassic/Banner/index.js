import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/agencyClassic/banner/heroImage.png';
import playIcon from 'common/assets/image/agencyClassic/banner/play.png';
import { Modal } from '@nextui-org/react';

const Banner = () => {
  const [openModal, setModal] = useState(false);

  return (
    <BannerWrapper id="banner_section">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="We built to make your life easier & smarter"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="We are one-man design studio founded by Dash & Andri. We specialise in web design and development using Webflow & other CMS."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary primary_hover" title="Read our Story" />
              <div onClick={() => setModal(true)} className="playBtn"> 
                <NextImage src={playIcon} alt="play" />
                <Button
                  className="text"
                  variant="textButton"
                  title="Our Interviews"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage className="heroImg">
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
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
    </BannerWrapper>
  );
};

export default Banner;
