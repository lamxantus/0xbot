import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { appTheme } from 'common/theme/app';
import {
  GlobalStyle,
  AppWrapper,
  ConditionWrapper,
} from 'containers/App/app.style';
import ResetCSS from 'common/assets/css/style';
import Navbar from 'containers/App/Navbar';
import DomainSection from 'containers/App/Banner';
import FeatureSection from 'containers/App/FeatureSection';
import ControlSection from 'containers/App/Control';
import TestimonialSection from 'containers/App/Testimonial';
import PartnerHistory from 'containers/App/PartnerHistory';
import PaymentSection from 'containers/App/PaymentSection';
import Footer from 'containers/App/Footer';
// import FeatureSlider from 'containers/App/FeatureSlider';
// import FeatureSliderTwo from 'containers/App/FeatureSliderTwo';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import dynamic from 'next/dynamic';
const FeatureSlider = dynamic(() => import('containers/App/FeatureSlider'), {
  ssr: false,
});
const FeatureSliderTwo = dynamic(
  () => import('containers/App/FeatureSliderTwo'),
  {
    ssr: false,
  }
);

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

const App = () => {
  const size = typeof window !== 'undefined' && useWindowSize();
  return (
    <ThemeProvider theme={appTheme}>
      <>
        <Head>
          <title>App | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <DomainSection />
          <FeatureSection />
          <ControlSection />
          <ConditionWrapper id="keyfeature">
            {size.innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
          </ConditionWrapper>
          <PartnerHistory />
          <PaymentSection />
          <TestimonialSection />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default App;
