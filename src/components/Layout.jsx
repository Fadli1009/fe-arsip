import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Appsidebar from "./Appsidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <SidebarProvider defaultOpen={false}>
                <Appsidebar />
                <main className="w-full bg-blue-50/40">
                    <Navbar />
                    <div className="px-5 py-5">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}

export default Layout;