import Image from "next/image";
import { Icons } from "../icons";
import Link from "next/link";

export const ProductCard = ({
  marketplace = true,
}: {
  marketplace?: boolean;
}) => {
  return (
    <div className="bg-black-300 px-5 pb-9">
      <Link href={marketplace ? "/product/:id" : "/review-product/:id"}>
        <div className="w-100 h-[23rem] mb-15">
          <Image
            src={"/product.svg"}
            width={400}
            height={230}
            alt="product name"
          />
        </div>
      </Link>

      <h3 className="text-xxl font-bold mb-5">Ethnography</h3>
      <p className="text-gray-300 mb-9">
        Rigorous vetting ensures only the most promising Web3 projects gain
        access to our community of expert reviewers.
      </p>
      {marketplace ? (
        <div className="flex justify-between font-bold">
          <Link
            href="/product/:id"
            className="flex gap-2 items-center text-pink-400"
          >
            Detailed Review
            <Icons icon="fa6-solid:angle-right" className="leading-none" />
          </Link>

          <p className="flex gap-3 text-yellow-400">
            4.2
            <Icons icon="ph:star-bold" className="text-xl" />
          </p>
        </div>
      ) : (
        <Link
          href="/review-product/:id"
          className="flex gap-2 items-center text-pink-400"
        >
          0.02 ETH x 15 Participants
        </Link>
      )}
    </div>
  );
};
