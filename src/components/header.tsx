"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./theme-toggle";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <header className="mb-10 tracking-tight mt-10">
      <div className=" lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="fade relative scroll-pr-6  px-0 pb-0 md:relative md:overflow-auto"
            id="nav"
          >
            <div className="flex w-full flex-row justify-between items-center">
              <div className="flex flex-row justify-between uppercase font-mono">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="relative flex align-middle transition-all duration-500 px-2 py-1 rounded-md"
                    >
                      <span
                        className={cn(
                          "relative z-10",
                          isActive
                            ? "text-gray-100 dark:text-gray-100"
                            : "text-neutral-700 dark:text-gray-200",
                        )}
                      >
                        {name}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-md bg-[hsla(222,80%,30%,0.7)] dark:bg-[hsla(222,80%,30%,1)]"
                          layoutId="activeBackground"
                          transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div>
                <ThemeToggler />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}
