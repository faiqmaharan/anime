import Link from "next/link"

const Header = ({title, linkHref, linkTitle }) => {
    return(
        <div className="flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        {linkHref && linkTitle ?
        <Link href={linkHref} className="text-sm underline text-color-primary hover:text-color-accent transition-all">{linkTitle}</Link>
        : null
        }
        </div>
    )
}

export default Header