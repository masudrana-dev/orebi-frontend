import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Fotter from "../Footer/Fotter"

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
            <Fotter />
        </>
    )
}

export default RootLayout