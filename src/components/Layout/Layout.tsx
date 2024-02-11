import {ReactNode} from "react";
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  );
};

export default Layout;
