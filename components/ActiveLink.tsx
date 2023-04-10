import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties } from "react"

const style:CSSProperties = {
    color:"blue",
    textDecoration:"underline"
}

interface ActiveLinkProps {
    href:string,
    text:string
}

export const ActiveLink = ({href,text}:ActiveLinkProps) =>{
    const pathName = useRouter();
    return(
        <Link style={pathName.pathname === href ? style : undefined} href={href} >{text}</Link>
    )
}