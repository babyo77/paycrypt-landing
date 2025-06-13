import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeroHeader } from "./header";

import Footer from "./footer";
import Image from "next/image";
import LiquidChrome from "./background";
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
    image: "",
    desc: "Accept payments in any stablecoin or fiat currency you prefer.",
  },
  {
    title: "Onramp and offramp",
    image: "",
    desc: "Convert between crypto and fiat instantly with competitive rates.",
  },
  {
    title: "0% Transaction fee",
    image: "",
    desc: "Get your stablecoin funds instantly with our payment infrastructure.",
  },
];

const SOLUTIONS = [
  {
    title: "Global Payment Network",
    image: "",
    desc: "Connect with customers and businesses worldwide through our extensive payment network.",
  },
  {
    title: "Checkout Link",
    image: "",
    desc: "Create and share Checkout links instantly with customers for quick and easy transactions.",
  },

  {
    title: "Instant Invoicing",
    image:
      "https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/invoice-paycrypt.webp",
    desc: "Create and manage professional invoices with automated payment tracking.",
  },
  {
    title: "Instant Settlement",
    image: "",
    desc: "Instant settlements in your preferred currency with automated reconciliation.",
  },
  {
    title: "Automated Reconciliation",
    image: "",
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
          <div className="relative md:px-4">
            <div className="mx-auto max-w-6xl ">
              <div className="flex flex-col py-28 md:py-36 md:pb-12 pb-5 space-y-2 items-center text-center">
                <h1 className="md:min-w-4xl tracking-normal text-balance text-5xl font-semibold lg:text-7xl">
                  Payment rails for <span className=" max-md:hidden">the</span>
                </h1>
                <p className="md:min-w-4xl tracking-normal text-balance text-5xl font-semibold lg:text-7xl">
                  <span className=" md:hidden">the</span> new internet.
                </p>

                <p className="text-muted-foreground/80 max-w-xl mx-auto tracking-normal md:text-lg text-base py-5">
                  Seamlessly integrate crypto and fiat payments, reduce costs,
                  and scale your operations globally.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white h-10 md:h-11 sm:w-[300px]"
                  />
                  <Button asChild size="lg" className="w-full md:w-fit">
                    <Link href="https://app.paycrypt.tech">
                      <span className=" tracking-tighter">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative mt-8 sm:mt-10">
                <div className=" z-10 rounded-lg border overflow-hidden">
                  <Image
                    alt="Paycrypt Dashboard"
                    height={500}
                    width={500}
                    className=" w-full h-full object-cover"
                    src="https://us-east-1.tixte.net/uploads/tanmay111-files.tixte.co/Screenshot_2025-06-12_at_9.41.13%E2%80%AFPM.webp"
                  />
                </div>
              </div>
              <div className=" text-center py-4 pb-6">
                <p className="text-muted-foreground font-medium">Trusted by</p>
                <div className="mt-4 flex justify-center">
                  {BACKED_BY.map((company) => (
                    <Link
                      href={company.url}
                      key={company.name}
                      className="flex"
                    >
                      <img
                        className="mx-auto h-5 grayscale w-auto object-contain "
                        src={company.logoUrl}
                        alt={`${company.name} Logo`}
                        height="24"
                        width="auto"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="benefits" className="  md:py-20 py-10 md:px-4">
        <div className="max-w-6xl mx-auto max-md:px-4">
          <h2 className="text-center text-3xl max-md:text-start md:text-4xl lg:text-5xl text-zinc-950 font-semibold mb-4">
            Unified Payment Infrastructure
          </h2>
          <div className="text-base md:text-base max-md:text-start text-zinc-500 mb-8 text-center">
            <p>Accept payments from customers worldwide.</p>
            <p>Get paid in your preferred currency.</p>
          </div>
          <div className="flex gap-6 md:w-full max-md:flex-col items-stretch">
            {BENEFITS.map((benefits) => (
              <div
                key={benefits.title}
                className="bg-gradient-to-b from-white to-zinc-50 rounded-lg border border-zinc-200 "
              >
                <div className="h-[296px] w-full flex items-center p-4 justify-center overflow-hidden">
                  <Image
                    alt={benefits.title}
                    className=" h-full w-full object-contain mix-blend-multiply"
                    src={benefits.image}
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-6 w-full">
                  <h3 className="mb-2 text-xl font-semibold text-zinc-950">
                    {benefits.title}
                  </h3>
                  <p className="text-zinc-500 text-sm">{benefits.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="solutions" className="  md:py-20 py-10 md:px-4">
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
                <div className="h-[296px] w-full flex items-center p-4 justify-center overflow-hidden">
                  <Image
                    alt={solution.title}
                    className=" h-full w-full object-contain mix-blend-multiply"
                    src={solution.image}
                    height={500}
                    width={500}
                  />
                </div>
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
                <div className="h-[296px] w-full flex items-center p-4 justify-center overflow-hidden">
                  <Image
                    alt={solution.title}
                    className=" h-full w-full object-contain mix-blend-multiply"
                    src={solution.image}
                    height={500}
                    width={500}
                  />
                </div>
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

      <div
        className="max-w-6xl mx-auto rounded-xl overflow-hidden relative max-md:w-[90%]"
        style={{ height: "500px" }}
      >
        <LiquidChrome baseColor={[0.1, 0.1, 0.1]} speed={1} amplitude={0.3} />
        <div className="bg-black/30 absolute top-0 left-1/2 -translate-x-1/2 md:py-20 py-10 border-b h-full w-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-3xl max-md:text-start md:text-4xl lg:text-5xl text-white font-semibold mb-3">
              Ready to Transform Your Payments?
            </h2>
            <div className="text-base md:text-base max-md:text-start text-white mb-3 text-center">
              <p>Join the future of global payments today.</p>
              <p>Start accepting crypto and fiat payments in minutes.</p>
            </div>
            <div className="flex justify-center max-md:justify-start gap-2">
              <Button asChild size="lg" variant={"outline"}>
                <Link href="https://app.paycrypt.tech">
                  <span className="tracking-tighter">Get Started</span>
                </Link>
              </Button>
              <Button asChild size="lg" className="text-white" variant="link">
                <Link href="coming-soon">
                  <span className="tracking-tighter">Read Docs</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
