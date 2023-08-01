import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

import bannerImg from 'common/assets/image/appCreative/bannerImg.png';
import bannerImgMobile from 'common/assets/image/appCreative/availableThumb.png';
import { Modal } from '@nextui-org/react';

const Banner = () => {
  const [openModal, setModal] = useState(false);

  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Your trusted mobile app to make days beautiful 😘"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="There will be a day–in our lifetime–when we get to celebrate every person on the planet having access." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start 14-days free trail" />
              <div onClick={() => setModal(true)}>
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="Our Interviews"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <NextImage src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <NextImage src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
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
