"use client";

import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link";

export const DefaultNavbar = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-transperant my-10 items-center navbar-wrapper"
    >
      <Navbar.Brand as={Link} href="/">
        <Image
          className="mr-3 "
          src="/logo-dark.svg"
          alt="Reveus Logo"
          width={200}
          height={60}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-xs" href="/" active>
          MARKETPLACE
        </Navbar.Link>
        <Navbar.Link className="text-xs" as={Link} href="/how-it-works">
          HOW IT WORKS
        </Navbar.Link>
        <Navbar.Link className="text-xs" href="/about">
          ABOUT
        </Navbar.Link>
        <Navbar.Link className="text-xs" href="/faq">
          FAQ
        </Navbar.Link>
        <Navbar.Link href="/login">
          <Button className="btn btn-primary"> Join our Community</Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
