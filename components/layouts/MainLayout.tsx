import { NavBar } from "../Navbar"

interface MainLayoutProps {
    children:React.ReactNode
}
export const MainLayout = ({children}:MainLayoutProps) =>{
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
}