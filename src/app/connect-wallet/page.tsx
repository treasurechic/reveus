import { MainLayout } from "@/components/mainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reveus - Connect Wallet",
};

const ConnectWallet = () => {
  return (
    <MainLayout>
      <div className="my-10 container px-4">
        <h3 className="title text-center mb-16">Connect Wallet</h3>
        {/* <div className="w-[40rem] max-w-100 mx-auto bg-black-300">
       <div className="flex justify-between p-5 border-b-2 border-gray-100">
<p className="font-medium text-lg">Connect Account</p>

       </div>
        </div> */}


      </div>
    </MainLayout>
  );
};

export default ConnectWallet;
