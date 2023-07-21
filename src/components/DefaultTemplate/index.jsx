import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ children }) => {
    return(
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />        
        </div>
    )
}