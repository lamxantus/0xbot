import { Modal } from '@nextui-org/react';
import videoBtn from 'common/assets/image/webApp/video-btn.svg';
import videoShape1 from 'common/assets/image/webApp/video-dot-1.svg';
import videoShape2 from 'common/assets/image/webApp/video-shape-1.svg';
import videoShape3 from 'common/assets/image/webApp/video-wave-1.svg';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import { VIDEO_DATA } from 'common/data/WebApp';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import VideoArea, { VideoWrapper } from './video.style';


const Video = () => {
  const [openModal, setModal] = useState(false);

  return (
    <VideoArea>
      <Container>
        <Heading as="h2" content={VIDEO_DATA?.title} />
        <Box className="videoBox">
          <div className='videoShape-1 videoShape'>
            <Image src={videoShape1} alt="" />
          </div>
          <div className='videoShape-2 videoShape'>
            <Image src={videoShape2} alt="" />
          </div>
          <div className='videoShape-3 videoShape'>
            <Image src={videoShape3} alt="" />
          </div>
          <div className='video-play-button-wrapper'>
            <Button
              className="videoBtn"
              onClick={() => setModal(true)}
              icon={<Image src={videoBtn} alt="" />}
              iconPosition="left"
              title=""
            />
          </div>
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
    </VideoArea>
  );
};

export default Video;
