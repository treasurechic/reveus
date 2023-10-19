import { Icons } from "../icons";
import { DefaultProgress } from "../progressbar";
import { ReviewCard } from "./reviewCard";

export const ProductReviews = () => {
  return (
    <div className="my-10 container px-4">
      <h3 className="title text-center mb-16">Reviews</h3>
      <div className="flex flex-col lg:flex-row gap-14 mb-16">
        <div className="bg-black-300 px-8 py-10 lg:w-[60%]">
          <p className="flex gap-3 text-yellow-400 mb-10">
            4.2
            <Icons icon="ph:star-bold" className="text-xl" />
          </p>
          <p className="text-2xl font-bold mb-5">Our Review</p>
          <p className="text-base mb-10 text-gray-300 leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur. Amet gravida sit molestie
            quisque egestas in. Leo id interdum neque urna non sed dignissim
            vitae. Cursus urna massa nec mauris semper nunc parturient. Hac et
            at sit justo est. Viverra adipiscing in auctor porta venenatis augue
            porttitor aliquam lacus. Lacus ipsum tincidunt id suscipit
            ridiculus. Mus egestas quis non faucibus.
            <br />
            <br />
            Ante sed sed tortor pellentesque sed. Feugiat elit at tristique
            massa. Id mauris in suspendisse urna nullam. Montes sed consectetur
            tellus volutpat augue aliquet nisl ornare quis.
          </p>
        </div>
        <div className="bg-black-300 px-8 py-10 lg:w-[40%]">
          <div className="mb-10">
            <p className="text-xl font-bold mb-5">Community Voice</p>
            <DefaultProgress value={90} />
          </div>
          <div className="mb-10">
            <p className="text-xl font-bold mb-5">Organizational Structure</p>
            <DefaultProgress value={70} />
          </div>

          <div className="mb-10">
            <p className="text-xl font-bold mb-5">Onboarding Experience</p>
            <DefaultProgress value={75} />
          </div>

          <div className="mb-10">
            <p className="text-xl font-bold mb-5">Incentives for Members</p>
            <DefaultProgress value={60} />
          </div>
        </div>
      </div>
      <div className="grid gap-x-8 gap-y-20 lg:grid-cols-3 md:grid-cols-2">
        {[...Array(3)].map((_, idx) => (
          <ReviewCard key={idx} />
        ))}
      </div>
    </div>
  );
};
