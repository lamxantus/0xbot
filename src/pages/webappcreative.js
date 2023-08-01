import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { theme } from 'common/theme/webAppCreative';
import ResetCSS from 'common/assets/css/style';
import Banner from 'containers/WebAppCreative/Banner';
import Navbar from 'containers/WebAppCreative/Navbar';
import Clients from 'containers/WebAppCreative/Clients';
import HowItWorks from 'containers/WebAppCreative/HowItWorks';
import AnalyticsTool from 'containers/WebAppCreative/AnalyticsTool';
import Dashboard from 'containers/WebAppCreative/Dashboard';
import Testimonials from 'containers/WebAppCreative/Testimonials';
import Integrations from 'containers/WebAppCreative/Integrations';
import Pricing from 'containers/WebAppCreative/Pricing';
import NewsFeed from 'containers/WebAppCreative/NewsFeed';
import Faq from 'containers/WebAppCreative/Faq';
import CallToAction from 'containers/WebAppCreative/CallToAction';
import Footer from 'containers/WebAppCreative/Footer';
import { GlobalStyle, ContentWrapper, CombinedSection, CornerPattern } from 'containers/WebAppCreative/webAppCreative.style';
import 'animate.css';

const webAppCreative = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Web App Creative | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Clients />
          <HowItWorks />
          <AnalyticsTool />
          <Dashboard />
          <Testimonials />
          <CombinedSection>
            <Integrations />
            <Pricing />
            <CornerPattern />
          </CombinedSection>
          <NewsFeed />
          <Faq />
          <CallToAction />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default webAppCreative;
