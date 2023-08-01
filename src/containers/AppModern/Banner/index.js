import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';

import { client } from 'common/data/AppModern';

import microsoft from 'common/assets/image/appModern/envato-icon.png';
import bannerImg from 'common/assets/image/appModern/banner2.png';
import videoBanner1 from 'common/assets/image/appModern/video-1.png';
import videoBanner2 from 'common/assets/image/appModern/video-2.png';
import circleBorder from 'common/assets/image/appModern/shape.svg';
import { Modal } from '@nextui-org/react';


const Banner = () => {
  const [openModal, setModal] = useState(false);
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <RatingInfo>
              <Rating rating={4} />
              4.9 of 5 By <img src={microsoft?.src} alt="Microsoft" />
            </RatingInfo>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The Revolution of
          Ultimate Platform to
          monitor your task"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
          ipsum dolor sit amet consectetur."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Start Free trail" />
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />
            </ButtonGroup>
          </Fade>
          <VideoGroup>
            <NextImage
              src={videoBanner1}
              onClick={() => setModal(true)}
              alt="Microsoft"
            />
            <NextImage
              src={videoBanner2}
              onClick={() => setModal(true)}
              alt="Microsoft"
            />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="Trusted by companies like:" />
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image?.src}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder?.src}
        alt="Bottom Circle"
      />

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
