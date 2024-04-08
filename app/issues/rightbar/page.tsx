"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RightBar = () => {
  const currentPath = usePathname();

  const linksRight = [
    { href: "/issues", label: "New" },
    { href: "/issues", label: "Pending" },
    { href: "/issues", label: "Copmleted" },
  ];

  return (
    <main className="flex">
      <div className="flex flex-col justify-center align-middle p-2">
        <ul className="flex flex-col justify-between align-middle">
          {linksRight.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-zinc-50": link.href === currentPath,
                "bg-zinc-700": link.href === currentPath,
                "p-3 mt-3 hover:bg-zinc-700 hover:text-slate-300 rounded transition-colors":
                  true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default RightBar;
