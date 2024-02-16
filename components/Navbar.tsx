import { LogIn, Menu, User } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { NavigationMenu } from "./ui/navigation-menu"

const Navbar = () => {
  return (
    <nav id="navbar" className="p-4 px-8 flex flex-row justify-between items-center">
        <h3>Zennotes</h3>

        {/* MOBILE NAVIGATION */}
        <Sheet>
            <SheetTrigger className="sm:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <div className="my-5 flex flex-col justify-center">
                    <Button variant='outline' className="m-2 w-full">Log In <LogIn size={18} className="mx-1" /></Button>
                    <Button variant='outline' className="m-2 w-full">Sign Up <User size={18} className="mx-1" /></Button>
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