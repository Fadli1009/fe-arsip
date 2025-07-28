import { useEffect, useState } from "react"

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { File } from "lucide-react"
import img from "../assets/img/loginimg.png"
import img2 from "../assets/img/loginimg2.png"
import { useNavigate } from "react-router"

const Login = () => {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        const hour = new Date().getHours()
        if (hour >= 5 && hour < 11) {
            setGreeting('Selamat Pagi')
        } else if (hour >= 11 && hour < 15) {
            setGreeting('Selamat Siang')
        } else if (hour >= 15 && hour < 19) {
            setGreeting('Selamat Sore')
        } else {
            setGreeting('Selamat Malam')
        }
    })
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full bg-blue-100">
                <div className="grid lg:grid-cols-2">
                    <div className="pt-5 lg:pt-20 px-5 lg:px-15 bg-white">
                        <div className="flex mb-5 lg:mb-20 text-blue-600 font-medium">
                            <File />
                            Arsip Digital
                        </div>
                        <div className="text-4xl font-medium mb-10 text-blue-800">
                            <h1>Hallo,</h1>
                            <h1>{greeting}.</h1>
                        </div>
                        <form className="space-y-5">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Username</Label>
                                <Input id="picture" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="picture">Password</Label>
                                <Input id="picture" type="password" />
                            </div>
                            <Button type="button" onClick={() => navigate('/')}>Login</Button>
                        </form>
                    </div>
                    <div className="order-first lg:order-none">
                        <img src={img2} className="object-cover h-screen" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;