export const ProductOverview = () => {
  return (
    <>
      <h3 className="container px-4 text-center my-16 leading-none text-4xl font-bold">
        Ethnography
      </h3>
      <div className="w-100 lg:h-[70vh] h-[50vh] mb-16 bg-[url('/product.svg')] bg-no-repeat bg-cover" />

      <div className="container lg:px-32 px-4">
        <p className="title text-pink-400 mb-5">Overview</p>
        <p className="text-xl mb-10">
          Reveus is a review-to-earn platform and a thriving community of
          specialized web3 reviewers.
        </p>
        <h1 className="my-5 h-[0.2rem] bg-pink-400"></h1>
        <p className="text-xxl mb-32">
          We connect you with cutting-edge projects, tokens, DAOs, and trading
          platforms. Our mission is to empower you with knowledge and rewards
          while boosting the web3 ecosystem’s quality and reliability.
        </p>
      </div>
    </>
  );
};
