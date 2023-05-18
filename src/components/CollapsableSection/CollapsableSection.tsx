import React, {ReactNode, useState} from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

export interface CollapsableSectionProps {
    children: ReactNode,
    title: string;
}
export const CollapsableSection = ({ children, title }: CollapsableSectionProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="sidebar-section" >
            <div className="sidebar-section-title" onClick={() => setIsCollapsed(!isCollapsed)}>
                {title}

                {
                    isCollapsed ? <FiChevronDown className="arrow-icon"/> : <FiChevronUp className="arrow-icon"/>
                }
            </div>

            {!isCollapsed && <>{children}</>}
        </div>
    );
}
