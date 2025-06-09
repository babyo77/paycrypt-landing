import Link from "next/link";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="p-4 font-semibold">
      <p>We are working on it</p>
      <Link href={"/"} className=" text-sm underline underline-offset-4">
        Back to Home
      </Link>
    </div>
  );
}
