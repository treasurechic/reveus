"use client";

import { ReactNode } from "react";
import { DefaultNavbar } from "./navbar";
import { DefaultFooter } from "./footer";

//Wagmi and rainbowkit
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { optimism, arbitrum, polygon, goerli, mainnet, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const MainLayout = ({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) => {
  const { chains, publicClient } = configureChains(
    [mainnet, optimism, arbitrum, polygon, goerli, sepolia],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_KEY! }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Reveus",
    projectId: "6d67c07450c923a4048608d8f361a1e3",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <>
          {showNav && <DefaultNavbar />}
          <main className="flex min-h-screen flex-col">
            <div>{children}</div>
            <DefaultFooter />
          </main>
        </>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
