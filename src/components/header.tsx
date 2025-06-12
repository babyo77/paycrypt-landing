"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Benefits", href: "#benefits" },
  { name: "Solutions", href: "#solutions" },
  { name: "Docs", href: "coming-soon" },
];

export const HeroHeader = () => {
  return (
    <header>
      <nav className={cn("fixed z-20 w-full transition-all duration-300")}>
        <div className="mx-auto py-4 max-w-full bg-white/50 backdrop-blur-3xl">
          <div className="relative flex max-w-6xl mx-auto justify-between items-center gap-6 lg:gap-0 md:px-0 px-4">
            <Link href="/" aria-label="home" className="flex items-center">
              <Logo />
            </Link>
            <div className="flex w-full items-center justify-between gap-6 lg:w-auto">
              <div className="mx-auto size-fit lg:block pl-6 md:pl-0">
                <ul className="flex gap-4 md:gap-1 ">
                  {menuItems.map((item, index) => (
                    <li key={index} className="hidden md:block">
                      <Button asChild variant="ghost" size="sm">
                        <Link href={item.href} className="text-base">
                          <span>{item.name}</span>
                        </Link>
                      </Button>
                    </li>
                  ))}
                  {menuItems.map((item, index) => (
                    <li key={index} className="md:hidden">
                      <Link href={item.href} className="text-sm">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild size="sm" className="md:hidden">
                <Link href="https://app.paycrypt.tech">
                  <span>Open App</span>
                </Link>
              </Button>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full ml-3 flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                <Button asChild size="sm" variant={"outline"}>
                  <Link href="https://app.paycrypt.tech">
                    <span>Sign in</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="https://cal.com/tanmay7/15min">
                    <span>Get a demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
