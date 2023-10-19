import { Icons } from "../icons";

export const ReviewCard = () => {
  return (
    <div className="bg-black-300 px-8 py-10">
      <p className="flex gap-3 text-yellow-400 mb-5">
        4.2
        <Icons icon="ph:star-bold" className="text-xl" />
      </p>
      <p className="text-2xl font-bold mb-5">John Doe</p>
      <p className="text-base mb-10 text-gray-300 leading-[2rem]">
        Lorem ipsum dolor sit amet consectetur. Mauris porttitor laoreet est
        vitae amet et nec. Tincidunt id feugiat tincidunt maecenas. Nec sed nunc
        interdum laoreet. Tempor sollicitudin nibh sed dictumst risus nulla leo
        sollicitudin.
        <br />
        <br />
        Augue ullamcorper dui aliquam rhoncus. Tempor quam neque eget pulvinar.
      </p>
    </div>
  );
};
