import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout