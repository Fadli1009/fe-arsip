import { useEffect, useState } from "react"

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { File } from "lucide-react"
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
                    <div className="pt-5 lg:pt-20 px-5 lg:px-15 bg-white lg:m-10 rounded shadow">
                        <div className="flex mb-5 lg:mb-20 text-blue-600 font-medium">
                            <File />
                            Arsip Digital
                        </div>
                        <div className="text-4xl font-medium mb-10 text-blue-800">
                            <h1>Hallo,</h1>
                            <h1>{greeting}.</h1>
                        </div>
                        <form className="space-y-5">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" type="text" className="w-full" placeholder="Username" />
                            </div>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="Password" />
                            </div>
                            <Button type="button" onClick={() => navigate('/')} className="w-full mt-5">Login</Button>
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