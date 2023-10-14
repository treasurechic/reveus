import { Icons } from "./icons";

export const LoginForm = () => {
  return (
    <div className="w-[36rem] mx-auto">
      <h3 className="text-title text-center mb-16">Sign in</h3>
      <div>
        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="devicon:google" className="mr-4" />
          Sign in with Google
        </button>
        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="logos:microsoft-icon" className="mr-4" />
          Sign in with Microsoft
        </button>
        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="devicon:linkedin" className="mr-4" />
          Sign in with LinkedIn
        </button>
        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="line-md:twitter-x" className="mr-4" />
          Sign in with Twitter
        </button>

        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="devicon:facebook" className="mr-4" />
          Sign in with Facebook
        </button>

        <button className="btn btn-md btn-secondary w-full mb-8 text-xl">
          <Icons icon="fontisto:apple" className="mr-4" color="white" />
          Sign in with Apple
        </button>
      </div>
    </div>
  );
};
