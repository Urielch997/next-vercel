
interface DarkLayoutProps {
    children:JSX.Element
}

export const DarkLayout = ({children}:DarkLayoutProps) =>{
    return(
        <div  
        style={{
            backgroundColor:'rgba(0,0,0,0.3)'
        }}>
            {children}
        </div>
    )
}