import { Header }  from "./Header"; 
import { Footer }  from "./Footer";

export function PageLayout({ children }) {
    return (
        <>
            <Header />

            {children}
            
            <Footer />
        </>
    )
}   