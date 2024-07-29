"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={82} className="text-color-primary"/>
            <h1 className="text-color-cyan text-2xl font-bold">API nya ga ketemu kocak</h1>
            <p className="text-color-primary">maklum masih pemula</p>
            <Link href="/" className="flex justify-center items-center text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page;