"use client";

import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export const DefaultNavbar = ({ className }: { className?: string }) => {
  return (
    <Navbar
      fluid
      rounded
      className={`bg-black-300 mb-10 items-center navbar-wrapper py-6 px-24 ${className}`}
    >
      <Navbar.Brand as={Link} href="/">
        <Image
          className="mr-3 "
          src="/logo-dark.svg"
          alt="Reveus Logo"
          width={150}
          height={40}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-xs" href="/marketplace" active>
          MARKETPLACE
        </Navbar.Link>
        <Navbar.Link className="text-xs" as={Link} href="/#how-it-works">
          HOW IT WORKS
        </Navbar.Link>
        <Navbar.Link className="text-xs" href="/#about">
          ABOUT
        </Navbar.Link>
        <Navbar.Link className="text-xs" href="/#faq">
          FAQ
        </Navbar.Link>
        <Navbar.Link href="/onboard">
          <Button className="btn btn-primary"> Join our Community</Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
