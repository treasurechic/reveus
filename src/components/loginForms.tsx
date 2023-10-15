import Link from "next/link";
import { Icons } from "./icons";

export const LoginForm = () => {
  return (
    <div className="md:w-[36rem] mx-auto">
      <h3 className="title text-center mb-16">Sign in</h3>
      <div>
        {/* Adding a link pending when we integrate the social auths */}
        <Link href="/onboard">
          <button className="btn btn-md btn-secondary w-full mb-8">
            <Icons icon="devicon:google" className="mr-4" />
            Sign in with Google
          </button>
        </Link>
        <button className="btn btn-md btn-secondary w-full mb-8">
          <Icons icon="logos:microsoft-icon" className="mr-4" />
          Sign in with Microsoft
        </button>
        <button className="btn btn-md btn-secondary w-full mb-8">
          <Icons icon="devicon:linkedin" className="mr-4" />
          Sign in with LinkedIn
        </button>
        <button className="btn btn-md btn-secondary w-full mb-8">
          <Icons icon="line-md:twitter-x" className="mr-4" />
          Sign in with Twitter
        </button>

        <button className="btn btn-md btn-secondary w-full mb-8">
          <Icons icon="devicon:facebook" className="mr-4" />
          Sign in with Facebook
        </button>

        <button className="btn btn-md btn-secondary w-full mb-8">
          <Icons icon="fontisto:apple" className="mr-4" color="white" />
          Sign in with Apple
        </button>
      </div>
    </div>
  );
};
