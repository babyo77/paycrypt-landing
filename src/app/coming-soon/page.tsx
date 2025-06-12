import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function ComingSoon() {
  redirect("https://docs.paycrypt.tech");
  return (
    <div className="p-4 font-semibold">
      <p>We are working on it</p>
      <Link href={"/"} className=" text-sm underline underline-offset-4">
        Back to Home
      </Link>
    </div>
  );
}
