import { ReactNode } from 'react'
import { TopBar} from "../TopBar";
import {SideBar} from "../SideBar";

export interface JiraPageLayoutProps {
    children: ReactNode,
}

export const JiraPageLayout = ({ children } : JiraPageLayoutProps) => {
    return (
        <div className="app">
            <TopBar/>
            <div className="main-content">
                <SideBar/>
                <div className="page-content">{children}</div>
            </div>
        </div>
    );
};
