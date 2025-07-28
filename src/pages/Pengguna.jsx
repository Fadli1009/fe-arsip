import { Pencil, Trash } from "lucide-react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import user from "../components/dummy/Pengguna"
const Pengguna = () => {

    return (
        <>
            <Layout>
                <Header text={'Pengguna'} subtext={'Kelola pengguna dan hak akses'} />
                <Card>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">#</TableHead>
                                    <TableHead>Nama</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Hak Akses</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {user.map((item, index) => (
                                    <TableRow>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>{item.nama}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell><Badge variant="default">{item.hakAkses}</Badge></TableCell>
                                        <TableCell>
                                            <div className="flex gap-3">
                                                <Trash size={20} className="text-red-500" />
                                                <Pencil size={20} className="text-cyan-500" />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </Layout>
        </>
    );
}

export default Pengguna;