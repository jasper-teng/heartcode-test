'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Toggle } from "@/components/ui/toggle";
import localFont from "next/font/local"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import "./globals.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { useToast } from "@/hooks/use-toast"

import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          

          <div className="grid items-center justify-items-left p-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="about-me">About Me⠀⠀⠀⠀⠀⠀⠀</a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="quiz">Quiz⠀⠀⠀⠀⠀⠀⠀</a>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <Toggle />
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
      </div>
      {children}
      
      <Toaster />
      
      </ThemeProvider>
      
    </body>
    </html >
  );
  
}
