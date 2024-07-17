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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-white flex items-center justify-between">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="px-3 cursor-pointer">
              <div className="flex flex-row items-center ">
                <div className="col-9">Services</div>
                <div className="col-2">
                  <ChevronDown />
                </div>
              </div>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-85">
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span className="cursor-pointer">
                  <Link href="/">Wedding Photography</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer">
                  <Link href="/">Pre-Wedding Photography</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer">
                  <Link href="/">Maternity Photoshoot</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer">
                  <Link href="/">Newborn Baby Photography</Link>
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
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
