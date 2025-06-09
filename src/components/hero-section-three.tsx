import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";

import Footer from "./footer";
import Image from "next/image";
const BACKED_BY = [
  {
    name: "Circle",
    logoUrl:
      "https://cdn.prod.website-files.com/67116d0daddc92483c812e88/67116d0daddc92483c812f72_Circle%20Logo.avif",
    url: "https://partners.circle.com/partner/paycrypt",
  },
];
const BENEFITS = [
  {
    title: "Multi-currency payments",
    desc: "Accept payments in any stablecoin or fiat currency you prefer.",
  },
  {
    title: "Offer instant onramp and offramp",
    desc: "Convert between crypto and fiat instantly with competitive rates.",
  },
  {
    title: "0% Transaction fee",
    desc: "Get your funds instantly with our reliable payment infrastructure.",
  },
];

const SOLUTIONS = [
  {
    title: "Global Payment Network",
    desc: "Connect with customers and businesses worldwide through our extensive payment network.",
  },
  {
    title: "Payment Link",
    desc: "Create and share payment links instantly with customers for quick and easy transactions.",
  },

  {
    title: "Compliance Automation",
    desc: "Built-in KYC/AML tools tailored for global regulations and seamless compliance.",
  },
  {
    title: "Multi-Currency Accounts",
    desc: "Hold, send, and receive both fiat and stablecoins in one unified account.",
  },
  {
    title: "Automated Reconciliation",
    desc: "Simplify refunds and transaction tracking with our automated reconciliation tools.",
  },
];

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]  max-md:bg-[size:8rem_6rem] 
       [mask-image:linear-gradient(to_bottom,white,transparent_0%,transparent_0%,white)]"
      ></div>
      <main className="overflow-hidden max-md:px-4">
        <section>
          <div className="relative py-24">
            <div className="mx-auto max-w-6xl ">
              <div className="flex max-md:flex-col max-md:gap-5  items-end justify-between">
                <h1 className="mt-8 max-w-2xl tracking-normal text-balance text-5xl font-semibold lg:text-6xl">
                  Next-Gen Payment Infrastructure
                </h1>
                <div className="max-w-lg">
                  <p className="text-foreground mb-4 text-base">
                    Seamlessly integrate crypto and fiat payments, reduce costs,
                    and scale your operations globally.
                  </p>
                  <div className="flex items-center gap-2 flex-row max-md:items-start">
                    <Button asChild size="lg">
                      <Link href="https://app.paycrypt.tech">
                        <span className=" tracking-tighter">Get Started</span>
                      </Link>
                    </Button>
                    <Button key={2} asChild size="lg" variant="outline">
                      <Link href="">
                        <span className=" tracking-tighter">Get a demo</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-muted-foreground font-medium">
                  Trusted by :
                </p>
                <div className="mt-4 flex items-center gap-12">
                  {BACKED_BY.map((company) => (
                    <Link
                      href={company.url}
                      key={company.name}
                      className="flex"
                    >
                      <img
                        className="mx-auto h-5 w-fit"
                        src={company.logoUrl}
                        alt={`${company.name} Logo`}
                        height="20"
                        width="auto"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 sm:mt-10">
                <div className=" z-10 rounded-lg border overflow-hidden">
                  <Image
                    alt="Paycrypt Dashboard"
                    height={500}
                    width={500}
                    className=" w-full h-full object-cover"
                    src="https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Screenshot_2025-06-09_at_9.14.11%E2%80%AFPM.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="benefits" className=" bg-muted/30 py-20 ">
        <div className="max-w-6xl mx-auto max-md:px-4">
          <h2 className="text-center text-3xl max-md:text-start md:text-4xl lg:text-5xl text-zinc-950 font-semibold mb-4">
            Unified Payment Infrastructure
          </h2>
          <div className="text-base md:text-base max-md:text-start text-zinc-500 mb-8 text-center">
            <p>Accept payments from customers worldwide.</p>
            <p>Get paid in your preferred currency.</p>
          </div>
          <div className="flex gap-6 md:w-full max-md:flex-col items-stretch">
            {BENEFITS.map((solution) => (
              <div
                key={solution.title}
                className="bg-gradient-to-b from-white to-zinc-50 rounded-lg border border-zinc-200 "
              >
                <div className="h-[296px] w-full flex items-center justify-center overflow-hidden"></div>
                <div className="p-6 w-full">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-950">
                    {solution.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="solutions" className=" bg-muted/30 py-20 border-b">
        <div className="max-w-6xl mx-auto max-md:px-4">
          <h2 className="text-center text-3xl max-md:text-start md:text-4xl lg:text-5xl text-zinc-950 font-semibold mb-4">
            Enterprise-Grade Solutions
          </h2>
          <div className="text-base md:text-base max-md:text-start text-zinc-500 mb-8 text-center">
            <p>Built for businesses that need more than just payments.</p>
            <p>Complete infrastructure for global financial operations.</p>
          </div>
          <div className="flex gap-6 md:w-full max-md:flex-col items-stretch">
            {SOLUTIONS.slice(0, 2).map((solution) => (
              <div
                key={solution.title}
                className="bg-gradient-to-b from-white to-zinc-50 rounded-lg border border-zinc-200 "
              >
                <div className="h-[296px] w-full flex items-center justify-center overflow-hidden"></div>
                <div className="p-6 w-full">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-950">
                    {solution.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-5 md:w-full max-md:flex-col items-stretch">
            {SOLUTIONS.slice(2, SOLUTIONS.length).map((solution) => (
              <div
                key={solution.title}
                className="bg-gradient-to-b from-white to-zinc-50 rounded-lg border border-zinc-200 "
              >
                <div className="h-[296px] w-full flex items-center justify-center overflow-hidden"></div>
                <div className="p-6 w-full">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-950">
                    {solution.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
