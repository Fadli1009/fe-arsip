import Header from "../components/Header";
import Layout from "../components/Layout";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, FileText, IterationCcw, Save, Star, Trash2, Upload } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import dummyArsip from "../components/dummy/Arsip";
import Modal from "../components/Modal";

const Document = () => {
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [modal, setModal] = useState(false)

    const filterItems = dummyArsip.filter(item => {
        const filter = item.name.toLowerCase().includes(query.toLowerCase())
        const matchCategory = category === "" || category === "all" || item.category === category
        return matchCategory && filter
    })
    const closeModal = () => {
        setModal(false)
    }
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    const inputOnChange = (e) => {
        setInput(e.target.value)
    }
    const onKeyDown = (e) => {
        if (e.key === "," && input.trim().length > 0) {
            e.preventDefault()
            const value = input.trim()
            if (!items.includes(value)) {
                setItems(prev => [...prev, value])
            }
            setInput('')
        }
    }
    const handleClick = (id) => {
        alert(id)
    }

    return (
        <>
            <Layout>
                <Header text={'Manajemen Dokumen'} />
                {modal && (
                    <Modal title={'Upload Dokumen'} onClose={closeModal}>
                        <form>
                            <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                <Label htmlFor="judul">Judul Dokumen</Label>
                                <Input id="picture" type="text" className="w-full" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                <Label htmlFor="judul">Tags Dokumen (pisahkan dengan tanda koma (",")</Label>
                                <Input id="picture" type="text" className="w-full" value={input} onChange={inputOnChange} onKeyDown={onKeyDown} />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                <Label htmlFor="judul">Kategori Dokumen</Label>
                                <Select className="bg-white " onValueChange={setCategory} >
                                    <SelectTrigger className="w-full bg-white">
                                        <SelectValue placeholder="Semua Kategori" />
                                    </SelectTrigger>
                                    <SelectContent className="w-full">
                                        <SelectItem value="legal">Legal</SelectItem>
                                        <SelectItem value="keuangan">Keuangan</SelectItem>
                                        <SelectItem value="all">Semua Kategori</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-wrap w-full max-w-sm items-center gap-3 mb-3">
                                {items.map((kata, idx) => (
                                    <Badge>
                                        {kata}
                                    </Badge>
                                ))}
                            </div>
                            <Button type="submit"><Save /></Button>
                        </form>
                    </Modal>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div>
                        <Input placeholder="Cari dokumen..." className="bg-white me-5" onChange={e => setQuery(e.target.value)} />
                    </div>
                    <div className="max-w-md w-full">
                        <Select className="bg-white " onValueChange={setCategory} >
                            <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Semua Kategori" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectItem value="legal">Legal</SelectItem>
                                <SelectItem value="keuangan">Keuangan</SelectItem>
                                <SelectItem value="all">Semua Kategori</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Button variant="outline" className="w-full" onClick={() => setModal(true)}>
                            <Upload size={4} />
                            Unggah Dokumen
                            {/* <Link to={'create'} className="flex items-center justify-center gap-2 w-full">
                            </Link> */}
                        </Button>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {filterItems.map((item, index) => (
                            <Card className="max-w-sm" key={index}>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-3">
                                                <FileText className="w-8 h-8 text-gray-500" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.size}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => handleClick(item.id)}>
                                                <Star className={`w-5 h-5 ${item.isStarred ? 'text-yellow-400' : 'text-gray-400'}  fill-current`} />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, index) => (
                                                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-300 ">
                                            {item.category}
                                        </span>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>{item.uploader}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Link to={`/document/${item.slug}`} className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4 mr-2" />
                                                Lihat
                                            </Link>
                                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Document;