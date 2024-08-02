import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconBrandTabler className="text-blue-300 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUserBolt className="text-blue-300 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="text-blue-300 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className="text-blue-300 h-5 w-5 flex-shrink-0" />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-black w-full flex-1 max-w-full mx-auto border border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className=" flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 overflow-y-auto">
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-blue-300 py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-blue-300 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-blue-300 whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-blue-300 py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-blue-300 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};


