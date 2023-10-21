import { Accordion } from "flowbite-react";
import { Icons } from "./icons";
import Image from "next/image";

export const Faq = () => {
  return (
    <section className="container my-20" id="faq">
      <div className="text-center">
        <p className="title mb-12">Frequently Ask Questions</p>
        <p className="mb-12 text-base font-medium">
          Everything you need to know about Reveus
        </p>
      </div>
      <Accordion className="accordion-wrapper mb-16">
        {[...Array(6)].map((_, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title className="bg-transparent hover:bg-pink-400 border-solid border-pink-400 text-white mb-5 rounded-[0.8rem]">
              What is Reveus?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem beatae, corporis minima iste, numquam reiciendis tempore
                culpa dolore officiis error cupiditate sint odio ducimus atque,
                totam recusandae molestiae eius adipisci!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>

      <div className="text-center mb-20">
        <p className="text-xl mb-9">Didn’t find what you’re looking for?</p>
        <p className="text-xl mb-10">
          Visit our full FAQ Section in our Documentation
        </p>

        <button className="btn btn-outline-primary btn-lg mx-auto">
          View alll FAQs <Icons icon="uil:arrow-right" className="text-xxl" />
        </button>
      </div>

      <div className="text-center mb-10">
        <p className="text-2xl font-semibold mb-9">Become a Part of Reveus.</p>
        <p className="text-xl text-gray-100 lg:w-2/3 mx-auto leading-[3rem]">
          Ready to embark on your web3 journey? Join Reveus.io now and start
          exploring, reviewing, and earning in the world of blockchain and
          decentralized technologies.
        </p>
      </div>
      <div className="bg-white px-30 py-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-9 gap-y-16">
        <Social icon="bi:twitter-x" title="Twitter" desc="Stay updated" />
        <Social
          icon="logos:discord-icon"
          title="Discord"
          desc="Join the community"
        />
        <Social icon="logos:youtube-icon" title="Youtube" desc="Connected" />
        <Social
          icon="logos:linkedin-icon"
          title="LinkedIn"
          desc="Latest news"
        />
        <Social
          img="/governance.svg"
          title="Forum"
          desc="Governance discussion"
        />
        <Social
          icon="tabler:mail-plus"
          title="Contact Us"
          desc="Speak to our team"
          iconClassNames="text-2xl"
        />
      </div>
    </section>
  );
};

export const Social = ({
  icon,
  title,
  desc,
  iconClassNames,
  img,
}: {
  icon?: string;
  title: string;
  desc: string;
  iconClassNames?: string;
  img?: string;
}) => {
  return (
    <div className="text-center text-black-400">
      <div className="mb-10">
        {icon ? (
          <Icons icon={icon} className={`text-xxl mx-auto ${iconClassNames}`} />
        ) : img ? (
          <Image
            alt={title}
            src={img}
            height={30}
            width={30}
            className="mx-auto"
          />
        ) : null}
      </div>
      <p className="text-base font-medium mb-5">{title}</p>
      <p className="text-base font-medium text-pink-400">{desc}</p>
    </div>
  );
};
