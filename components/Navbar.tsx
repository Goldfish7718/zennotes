"use client"

import { LogIn, Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { NavigationMenu } from "./ui/navigation-menu"
import { useRouter } from "next/navigation"

const Navbar = () => {

    const router = useRouter()

  return (
    // <nav id="navbar" className="p-4 px-8 flex flex-row justify-between items-center">
    <nav className="p-4 py-6 sm:p-3 sm:mt-0 sm:text-left flex justify-between items-center z-10 fixed w-full dark:bg-[#0a0a0a] dark:bg-opacity-70 backdrop-blur-sm top-0">
        <h3>Zennotes</h3>

        {/* MOBILE NAVIGATION */}
        <Sheet>
            <SheetTrigger className="sm:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <div className="my-5 flex flex-col justify-center">
                    <Button variant='outline' className="m-2 w-full" onClick={() => router.push('/login')}>Log In <LogIn size={18} className="mx-1" /></Button>
                    <Button variant='outline' className="m-2 w-full" onClick={() => router.push('/signup')}>Sign Up <User size={18} className="mx-1" /></Button>
                    <ModeToggle className="w-full" />
                </div>
            </SheetContent>
        </Sheet>

        {/* DESKTOP NAVIGATION */}
        <div className="flex-row hidden sm:flex items-center">
            <ModeToggle />
            <Button variant='outline' className="mx-2">Log In <LogIn size={18} className="mx-1" /></Button>
            <Button variant='outline' className="mx-2">Sign Up <User size={18} className="mx-1" /></Button>
        </div>
    </nav>
  )
}

export default Navbar