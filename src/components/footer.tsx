"use client";

import { Footer } from "flowbite-react";
import { Icon } from '@iconify/react';

export const DefaultFooter = () => {
  return (
    <Footer container className="mt-auto mb-10 bg-transparent">
      <Footer.Copyright
        by="Reveus"
        href="/"
        year={new Date().getFullYear()}
        className="text-white"
      />
       <Footer.LinkGroup>
        <Footer.Link href="#" className="text-white">
        <Icon icon="fa6-brands:x-twitter" fontSize={'20'}/>
        </Footer.Link>
        <Footer.Link href="#" className="text-white">
        <Icon icon="teenyicons:discord-outline" fontSize={'20'}/>
        </Footer.Link>
        <Footer.Link href="#" className="text-white">
        <Icon icon="ph:linkedin-logo-bold" fontSize={'20'}/>
        </Footer.Link>
        <Footer.Link href="#" className="text-white">
        <Icon icon="basil:youtube-outline" fontSize={'25'}/>                                
        </Footer.Link>
      </Footer.LinkGroup>
      <Footer.LinkGroup>
        <Footer.Link href="#" className="text-white">
          Terms of Use
        </Footer.Link>
        <Footer.Link href="#" className="text-white">
          Cookie Policy
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
