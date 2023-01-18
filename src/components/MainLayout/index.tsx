import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./MainLayout.styles";

const MainLayout  = () => {
        return <StyledMainLayout>
                <Header />
                <Outlet />
                <Footer />
               </StyledMainLayout>
}

export  default  MainLayout;