'use client'
import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center min-h-screen max-w-xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-4 ">
                <FileSearch size={32} className="text-color-accent"/>
                <h3 className="text-color-accent text-2xl font-bold ">NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-color-primary hover:text-color-accent underline" >kembali</button>
            </div>
        </div>
    )
}

export default NotFound
