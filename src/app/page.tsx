"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
        logoSrc="/images/logo.svg"
        logoAlt="Subha Logo"
        buttonText="Reserve a Table"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to Subha"
          subtitle="Experience a fun dining atmosphere with delightful dishes!"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={["We serve delicious food made with love!", "Join our community and enjoy great flavors!", "Follow us on our social channels."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Understanding our value and distribution."
          cardItems={[{ id: 1, title: 'Supply', description: 'Total Supply of Tokens.' }, { id: 2, title: 'Liquidity', description: 'Locked liquidity details.' }, { id: 3, title: 'Distribution', description: 'How tokens are distributed.' }]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Subha Logo"
          logoText="Subha"
          columns={[
            { items: [{ label: 'Home', onClick: () => {} }, { label: 'Menu', onClick: () => {} }, { label: 'Reservations', onClick: () => {} }] },
            { items: [{ label: 'Events', onClick: () => {} }, { label: 'Contact', onClick: () => {} }, { label: 'About Us', onClick: () => {} }] },
            { items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }, { label: 'FAQ', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Subha, All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}