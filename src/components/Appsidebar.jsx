import { Activity, Archive, Calendar, FileArchive, FileChartColumn, FileText, Home, Inbox, Layers, Mail, RotateCcw, Search, Send, Settings, UploadCloud, User, Clipboard, LayoutDashboard, Users, Upload, UserCheckIcon, File, ChartArea, UserMinus, UserCheck2, FileKey, Ratio, FlagTriangleLeft, User2 } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "@/components/ui/sidebar"
import { Link, useLoaderData, useLocation } from "react-router";

const Appsidebar = () => {
    const menuSections = [
        {
            label: "Dashboard",
            items: [
                { title: "Dashboard", url: "/", icon: LayoutDashboard },
            ],
        },
        {
            label: "MANAGEMENT ARSIP",
            items: [
                { title: "Manajemen Dokumen", url: "/document", icon: FileText },
                { title: "Pinjam Dokumen", url: "/pinjam", icon: Archive },
                { title: "Kembalikan Dokumen", url: "/kembalikan", icon: RotateCcw },
                { title: "Laporan Pinjaman", url: "/lap-pinjam", icon: FileChartColumn },
                { title: "Laporan Penyimpanan", url: "/lap-simpan", icon: FileArchive },
            ],
        },
        {
            label: "MANAGEMENT SURAT",
            items: [
                { title: "Input Surat Masuk", url: "/surat-masuk", icon: Mail },
                { title: "Input Surat Keluar", url: "/surat-keluar", icon: Send },
                { title: "Disposisi Surat", url: "/disposisi", icon: Layers },
                { title: "Laporan Surat", url: "/lap-surat", icon: Clipboard },
            ],
        },
        {
            label: "INFORMASI PEMBIAYAAN",
            items: [
                { title: "List Nasabah", url: "/daftar-nasabaha", icon: User2 },
                { title: "Laporan NPF", url: "/laporan-npf", icon: FlagTriangleLeft },
                { title: "Nasabah Belum Upload Dokumen", url: "/nasabah-non-dokumen", icon: FileKey },
                { title: "Daftar Nasabah Terbesar", url: "/nasabah-terbesar", icon: UserCheck2 },
                { title: "Daftar Nasabah Bermasalah", url: "/nasabah-bermasalah", icon: UserMinus },
            ],
        },
        {
            label: "LAPORAN LAIN",
            items: [
                { title: "Rasio Keuangan", url: "/rasio-keuangan", icon: Ratio },
                { title: "Log User", url: "/log-user", icon: Activity },
            ],
        },
        {
            label: "ADMIN",
            items: [
                { title: "Master Penyimpanan", url: "/register-tempat-simpan", icon: File },
                { title: "Master Divisi", url: "/master-divisi", icon: UserCheckIcon },
                { title: "Master User", url: "/pengguna", icon: Users },
                { title: "Upload TKS", url: "/master-user", icon: Upload },
            ],
        },
    ];

    const pathname = useLocation()

    return (
        <>
            <Sidebar collapsible="icon">
                <div className="flex flex-col h-full ">
                    <div className="flex-1 overflow-y-auto scrollbar-none">
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel className="text-xl">Arsip Digital</SidebarGroupLabel>
                            </SidebarGroup>

                            {menuSections.map(section => (
                                <SidebarGroup key={section.label}>
                                    <SidebarGroupLabel className="text-gray-500 text-md">{section.label}</SidebarGroupLabel>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {section.items.map(item => {
                                                const Icon = item.icon
                                                return (
                                                    <SidebarMenuItem key={item.title}>
                                                        <SidebarMenuButton asChild isActive={pathname.pathname === item.url}>
                                                            <Link to={item.url} className="flex items-center gap-2">
                                                                <Icon />
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                );
                                            })}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            ))}
                        </SidebarContent>
                    </div>
                </div>
            </Sidebar></>
    );
}

export default Appsidebar;