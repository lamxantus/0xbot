import ResetCSS from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webApp';
import Banner from 'containers/WebApp/Banner';
import Blog from 'containers/WebApp/Blog';
import CallToAction from 'containers/WebApp/CallToAction';
import Clients from 'containers/WebApp/Clients';
import Counter from 'containers/WebApp/Counter';
import CustomerSupport from 'containers/WebApp/CustomerSupport';
import Features from 'containers/WebApp/Features';
import Footer from 'containers/WebApp/Footer';
import Navbar from 'containers/WebApp/Navbar';
import Pricing from 'containers/WebApp/Pricing';
import SecureDashboard from 'containers/WebApp/SecureDashboard';
import Services from 'containers/WebApp/Services';
import Testimonials from 'containers/WebApp/Testimonials';
import Video from 'containers/WebApp/Video';
import GlobalStyle, { AppWrapper, ContentWrapper } from 'containers/WebApp/webApp.style';
import Head from 'next/head';
import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';

const WebApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Web App | A next js landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700" rel="stylesheet" />
          <meta name="keywords" content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing" />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Features />
            <Video />
            <Services />
            <Clients />
            <SecureDashboard />
            <Counter />
            <Testimonials />
            <Pricing />
            <CustomerSupport />
            <Blog />
            <CallToAction />
            <Footer />
          </ContentWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default WebApp;
