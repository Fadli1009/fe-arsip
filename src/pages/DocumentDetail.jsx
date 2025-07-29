import { Link, useParams } from "react-router";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { FileImage, File, FileText, Grid, List, Trash, Download, Plus, Save } from "lucide-react";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import file from "../components/dummy/File"
import CardFile from "../components/CardFile";
import cekfile from "../file/file1.pdf"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Modal from "../components/Modal";


const DocumentDetail = () => {
    const { slug } = useParams()
    const [query, setQuery] = useState('')
    const [grid, setGrid] = useState(true)
    const hadleTheme = () => {
        setGrid(prev => !prev)
    }
    const allFile = file.filter(file => file.name.toLowerCase().includes(query.toLowerCase()))
    const getFileBG = (type) => {
        switch (type) {
            case "pdf":
                return {
                    icon: <File />,
                    bg: "bg-red-100/20",
                    border: "border-red-300"
                }
                break;
            case "jpg":
            case "jpeg":
            case "png":
                return {
                    icon: <FileImage />,
                    bg: "bg-blue-300/20",
                    border: "border-blue-300"
                }
            default:
                return {
                    icon: <FileText />,
                    bg: "bg-green-300/20",
                    border: "border-green-300"
                }
        }
    }
    const [preview, setPreview] = useState(null)
    const openPreview = (file) => {
        setPreview({
            url: cekfile,
            type: file.type,
            name: file.name
        })
    }
    const [modaladdfile, setModalAddFile] = useState(false)
    const closePreview = () => {
        setPreview(null)
    }
    const handleDownload = (url, filename) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <>
            <Layout>
                <Header text={slug} />
                <div className="fixed right-10 bottom-10  z-50">
                    <Tooltip>
                        <TooltipTrigger>
                            <button onClick={() => setModalAddFile(true)} className="cursor-pointer p-3 text-white bg-blue-500 hover:bg-blue-700 rounded-full">
                                <Plus size={25} />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent >
                            <p>Unggah FIle</p>
                        </TooltipContent>
                    </Tooltip>

                </div>

                <Card className="mb-5">
                    <CardContent>
                        <div className="flex gap-5">
                            <Input onChange={e => setQuery(e.target.value)} placeholder="Cari file ..." />
                            <div className="flex gap-2">
                                <Button onClick={hadleTheme} variant="outline" className={`text-gray-700 ${grid ? 'bg-blue-500 text-white' : null}`}><Grid /></Button>
                                <Button onClick={hadleTheme} variant="outline" className={`text-gray-700 ${!grid ? 'bg-blue-500 text-white' : null}`}><List /></Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div className={`${grid ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'} gap-5`}>
                            {allFile.map(item => {
                                const meta = getFileBG(item.type)
                                return (
                                    <CardFile file={item} grid={grid} meta={meta} onclick={() => openPreview(item)} />
                                );
                            })}
                            {preview && (
                                <div
                                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
                                    onClick={closePreview}
                                >
                                    <div
                                        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <header className="flex justify-between items-center p-4 border-b">
                                            <h3 className="font-semibold">{preview.name}</h3>

                                            <button
                                                onClick={closePreview}
                                                className="text-2xl leading-none px-2 hover:bg-gray-100 rounded"
                                            >
                                                &times;
                                            </button>
                                        </header>

                                        <main className="p-4">
                                            {preview.type.startsWith('image/') && (
                                                <img src={preview.url} alt={preview.name} className="max-w-full mx-auto" />
                                            )}
                                            {preview.type === 'pdf' && (
                                                <iframe src={preview.url} className="w-full h-[70vh]" title={preview.name} />
                                            )}
                                        </main>
                                        <div className="p-2">
                                            <button
                                                onClick={() => handleDownload(preview.url, preview.name)}
                                                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-700"
                                            >
                                                <Download />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {modaladdfile && (
                                <Modal title={'Unggah File'} onClose={() => setModalAddFile(false)}>
                                    <form>
                                        <div className="grid w-full max-w-sm items-center gap-3 mb-3">
                                            <Label htmlFor="picture">Unggah File</Label>
                                            <Input id="picture" type="file" className="w-full" multiple />
                                        </div>
                                        <Button type="submit"><Save /></Button>
                                    </form>
                                </Modal>
                            )}


                        </div>
                    </CardContent>
                </Card>
            </Layout>
        </>
    );
}

export default DocumentDetail;