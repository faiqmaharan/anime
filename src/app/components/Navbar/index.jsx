import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="bg-color-cyan">
            <div className="flex md:flex-row flex-col justify-between items-center md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-white text-3xl">TOEI ANIMATION</Link>
                <InputSearch /> 
            </div>
        </header>
    )
}

export default Navbar