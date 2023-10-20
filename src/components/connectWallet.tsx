"use client";
import Image from "next/image";
import { Icons } from "./icons";
import DefaultModal from "./modal";
import { Accordion } from "flowbite-react";

const wallets = [
  { title: "Metamask", img: "/metamask.svg" },
  { title: "Coinbase", img: "/coinbase.svg" },
  { title: "Safepal", img: "/safepal.svg" },
  { title: "Wallet Connect", img: "/walletconnect.svg" },
];

export const ConnectWalletModal = ({
  openModal,
  setOpenModal,
  nextStep,
}: {
  openModal: boolean;
  setOpenModal: (str: boolean) => void;
  nextStep: () => void;
}) => {
  const connect = () => {
    nextStep();
  };

  return (
    <>
      <DefaultModal
        title="Connect Account"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <div>
          <Accordion
            alwaysOpen
            flush
            arrowIcon={() => <Icons icon="pepicons-pop:angle-down-circle" className="text-gray-300" />}
          >
            <Accordion.Panel>
              <Accordion.Title className="bg-transparent text-white mb-5">
                Choose Network
              </Accordion.Title>
              <Accordion.Content className="mb-10">
                <p className="flex gap-5 items-center">
                  <span className="bg-blue-400 px-4 py-3 rounded-[0.8rem]">
                    <Icons icon="logos:ethereum" className="text-xxl" />
                  </span>
                  <span className="text-xl"> Ethereum Network</span>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="bg-transparent text-white mb-5">
                Select Wallet
              </Accordion.Title>
              <Accordion.Content>
                <div className="grid grid-cols-2 gap-9">
                  {wallets.map(({ title, img }) => (
                    <div
                      className="justify-center flex items-center flex-col gap-5 py-7 cursor-pointer rounded-[1rem] hover:bg-pink-400"
                      key={title}
                      onClick={connect}
                    >
                      <Image src={img} alt="metamask" height={36} width={36} />
                      <span>{title}</span>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </DefaultModal>
    </>
  );
};
