import { Activity, FileText, Plus, Star, User } from "lucide-react"
import Header from "../components/Header"
import Layout from "../components/Layout"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Dashboard() {
    const newDocs = [
        {
            "title": "Laporan Keuangan DE 2024.xls",
            "date": "3-04-2024",
            "category": "Keuangan"
        },
        {
            "title": "Laporan Keuangan DE 2025.xls",
            "date": "3-05-2025",
            "category": "Keuangan"
        },
        {
            "title": "Kontrak Kerja Dudung.docx",
            "date": "1-03-2025",
            "category": "Legal"
        },
    ]

    const newActivity = [
        {
            "title": "Admin mengunggah Laporan Keuangan DE 2025.xls",
            "date": "3 Jam yang lalu"
        },
        {
            "title": "User mengunggah Laporan Keuangan DE 2025.xls",
            "date": "1 Jam yang lalu"
        },
        {
            "title": "User mengunggah Laporan Kerja Dudung.docx",
            "date": "3 Jam yang lalu"
        },
    ]

    return (
        <>
            <Layout>
                <Header text={'Dashboard'} subtext={'Selamat datang di arsip digital'} />
                <div className="space-y-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-white p-5 shadow rounded">
                            <div className="flex items-center">
                                <div className="bg-green-700 p-3 rounded">
                                    <FileText color="#fff" />
                                </div>
                                <div className="flex-1 ms-2">
                                    <p>Total Dokumen</p>
                                    <p className="font-medium text-xl">3</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow rounded">
                            <div className="flex items-center">
                                <div className="bg-yellow-700 p-3 rounded">
                                    <Plus color="#fff" />
                                </div>
                                <div className="flex-1 ms-2">
                                    <p>Dukumen Bulan ini</p>
                                    <p className="font-medium text-xl">3</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow rounded">
                            <div className="flex items-center">
                                <div className="bg-blue-700 p-3 rounded">
                                    <User color="#fff" />
                                </div>
                                <div className="flex-1 ms-2">
                                    <p>Total Pengguna</p>
                                    <p className="font-medium text-xl">3</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow rounded">
                            <div className="flex items-center">
                                <div className="bg-yellow-500 p-3 rounded">
                                    <Star color="#fff" />
                                </div>
                                <div className="flex-1 ms-2">
                                    <p>Dokumen Favorit</p>
                                    <p className="font-medium text-xl">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Dokumen Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-5">

                                {newDocs.map((item, index) => (
                                    <div className="flex justify-between space-y-5 items-center">
                                        <div className="flex items-center">
                                            <FileText color="blue" size={35} />
                                            <div className="flex-1 ms-3">
                                                <p className="font-semibold">{item.title}</p>
                                                <p className="text-gray-700 text-sm">{item.category}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">{item.date}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Aktifitas Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-5">
                                {newActivity.map((item, index) => (
                                    <div className="flex items-center">
                                        <div className="bg-blue-200 p-2 rounded-full">
                                            <Activity color="blue" size={20} />
                                        </div>
                                        <div className="flex-1 ms-3">
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-gray-700 text-sm">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Layout>
        </>
    )
}

export default Dashboard
