import React from "react";
import Link from "next/link";
import SignOut from "@/components/SignOut";

const Emre = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Admin Page</h1>

          <Link className="btn" href="/">
            Go to Index Page
          </Link>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Emre;
