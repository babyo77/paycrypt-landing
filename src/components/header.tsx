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
      <nav className={cn("fixed z-20 py-4 w-full transition-all duration-300")}>
        <div className="mx-auto max-w-fit border bg-white rounded-xl p-2 pl-4">
          <div className="relative flex flex-wrap items-center gap-6 lg:gap-0">
            <div className="flex w-full justify-between gap-6 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <div className="mx-auto size-fit lg:block">
                <ul className="flex gap-1">
                  <>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Button
                          className={index == 0 ? "max-md:hidden" : ""}
                          asChild
                          variant="ghost"
                          size="sm"
                        >
                          <Link href={item.href} className="text-base">
                            <span>{item.name}</span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                    <Button asChild size="sm" className="md:hidden ml-4">
                      <Link href="https://app.paycrypt.tech">
                        <span>Open App</span>
                      </Link>
                    </Button>
                  </>
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full ml-3 flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm">
                  <Link href="https://app.paycrypt.tech">
                    <span>Open App</span>
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
