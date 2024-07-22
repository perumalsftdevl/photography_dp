"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ChevronDown,
} from "lucide-react";

// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useState } from "react";
import React from "react";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white flex items-center justify-between text-[#666]">
      <Link href="/" className="flex items-center">
        <h1 className={cn("text-2xl font-bold text-black", font.className)}>
          pic
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <span className="px-3 cursor-pointer">
          <Link href="/">Home</Link>
        </span>
        <span className="px-3 cursor-pointer">
          <Link href="/about">About Us</Link>
        </span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[250px] gap-3 p-4 md:w-[250px] md:grid-cols-2 lg:w-[250px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <span className="px-3 cursor-pointer">
          <Link href="/gallery">Gallery</Link>
        </span>
        <span className="px-3 cursor-pointer">
          <Link href="/price">Package</Link>
        </span>
        <span className="px-3 cursor-pointer">
          <Link href="/contact">Contact Us</Link>
        </span>
      </div>
    </nav>
  );
};

const components: { title: string; href: string }[] = [
  {
    title: "Wedding Photography",
    href: "/",
  },
  {
    title: "Pre-Wedding Photography",
    href: "/",
  },
  {
    title: "Maternity Photoshoot",
    href: "/",
  },
  {
    title: "Newborn Baby Photography",
    href: "/",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
