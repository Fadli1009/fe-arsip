import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Navbar = () => {    
    return (
        <>
            <nav className="flex items-center px-2 py-4 justify-between border-b bg-white ">
                <div className="flex items-center">
                    <SidebarTrigger />
                    <Input type="text" placeholder="Cari Dokumen" className={"ms-2"} />
                </div>

                <Avatar className="z-50">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>                
            </nav>
        </>
    );
}

export default Navbar;