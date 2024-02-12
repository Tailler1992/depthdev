import { ReactNode } from 'react';

import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';
import SideNav from '../SideNav/SideNav.tsx';

import s from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className={s.layout}>
                <SideNav />
                <div className={s.wrapper}>
                    <Header />
                    <main className={s.main}>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
