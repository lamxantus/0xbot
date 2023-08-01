import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import TiltShape from '../TiltShape';
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
} from './banner.style';
import BannerImage from 'common/assets/image/saasClassic/banner-image.jpg';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import { play } from 'react-icons-kit/entypo/play';
import { Modal } from '@nextui-org/react';

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {
  const [openModal, setModal] = useState(false);
  return (
    <BannerWrapper id="banner_section">
      <TiltShape className="banner-shape" />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="25% Save" />
                <Text
                  {...discountText}
                  content="for first month trail version"
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content="Ultimate Platform to monitor your best workflow."
            />
            <Text
              {...description}
              content="For Enhanced performance we use LiteSpeed Web Server, HTTP/2, PHP7. We make your website faster, which will help you to increase search ranking!"
            />
            <Box {...buttonWrapper}>
              <Link href="#">
                <a>
                  <Button {...fillButton} title="FREE TRIAL" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Button
                    {...button}
                    title="WATCH VIDEO"
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                  />
                </a>
              </Link>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <NextImage src={BannerImage} alt="banner image" />
                <PlayButton tabIndex="1000" onClick={() => setModal(true)}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal>
            </Fade>
          </Box>
        </Box>
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

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    height: '46px',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
