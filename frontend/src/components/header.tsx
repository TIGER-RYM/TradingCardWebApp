"use client"

import { useState } from "react"
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";

  
  const navItems = [
    {title: "Home", href: "/"},
    {title: "Category 1", href: "/category1"},
    {title: "Category 2", href: "/category2"},
    {title: "Category 3", href: "/category3"},
    {title: "Sell To Us", href: "/sell-to-us"},
    {title: "About Us", href: "/about-us"}
  ]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState(10)
    return (
  <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav>
                    <ul className="flex flex-col space-y-4">
                      {navItems.map((item, index) => (
                        <li key={index}>
                          <Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>
                            {item.title}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
              <h1 className="text-2xl font-bold">Card Traders</h1>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <li >
                      <Button variant="ghost" >{item.title}</Button>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button>Sign In</Button>
              <div className="relative">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="sr-only">Shopping cart</span>
                </Button>
                {cartItems > 0 && (
                  <Badge className="absolute -top-3 -right-2 px-2 py-1 bg-opacity-70 " variant="secondary">
                    {cartItems}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </header>
    )

}
