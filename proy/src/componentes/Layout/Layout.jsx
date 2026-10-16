import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({children}) // children prop especial
{
    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout;