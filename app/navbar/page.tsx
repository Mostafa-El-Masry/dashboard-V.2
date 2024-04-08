"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "DashBoard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className="flex navbar items-center justify-between uppercase border-b-2 px-5 h-14 ">
      <div className="flex">
        <Link href="/" className="ml-6 text-4xl text-zinc-50">
          <MdDashboard />
        </Link>
        <ul>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-zinc-50": link.href === currentPath,
                "bg-zinc-700": link.href === currentPath,
                "px-5 py-2 mx-2 hover:bg-zinc-700 hover:text-slate-300 rounded transition-colors":
                  true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div className="flex text-slate-200 items-center text-lg rounded-2xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search some thing Mostafa"
            className="bg-transparent p-1  outline-none border-none"
          />
        </div>

        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
