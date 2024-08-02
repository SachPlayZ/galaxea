import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 mr-8">
          <img
            src="/placeholder.svg"
            alt="Logo"
            className="h-8 w-8"
            width="32"
            height="32"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />
          <span className="text-xl font-bold">Galaxea</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-8 w-8" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black">
            <nav className=" *:text-white flex flex-col space-y-4 py-6">
              <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
                Drops
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
                Stats
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
                Create
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
                Communities
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex space-x-8 *:text-gray-500">
          <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
            Drops
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
            Stats
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
            Create
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-gray-300" prefetch={false}>
            Communities
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search NFTs and collections"
            className="pl-8 pr-4 py-2 bg-gray-800 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        <div className="flex space-x-4 *:p-2">
        <CloudLightningIcon className="h-10 w-10 text-gray-500 rounded-full cursor-pointer hover:text-gray-300 hover:bg-slate-800" />
        <BellIcon className="h-10 w-10 text-gray-500 rounded-full cursor-pointer border-orange-600 hover:text-gray-300 hover:bg-slate-800" />
        </div>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button className="bg-purple-500 text-white hover:bg-purple-600 rounded-3xl">Create</Button>
      </div>
    </header>
  )
}

function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CloudLightningIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
