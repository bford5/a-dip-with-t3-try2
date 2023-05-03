import { SignUp } from "@clerk/nextjs";

import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className=" mx-auto mt-2 w-5/6 rounded-md bg-slate-400 px-6 py-4">
      <div className="my-2 flex justify-center px-2 py-4">
        <Link href={`/`} className=" bg-red-400 px-2 py-4">
          Take me hoooome...
        </Link>
      </div>
      <div className="flex justify-center">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </div>
  );
};
export default SignUpPage;
