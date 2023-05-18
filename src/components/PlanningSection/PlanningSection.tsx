import {CollapsableSection} from "../CollapsableSection";

export const PlanningSection = () => {
    return (
        <CollapsableSection title="Planning">
        <div className="sidebar-section">
            <button className="board-picker">Eleonora's board</button>

            <ul className="section-menu">
                <li>
                    <a href="#">Roadmap</a>
                </li>
                <li>
                    <a href="#">Backlog</a>
                </li>
                <li>
                    <a href="#">Kanban board</a>
                </li>
                <li>
                    <a href="#">Reports</a>
                </li>
                <li>
                    <a href="#">Roadmap</a>
                </li>
            </ul>

            <ul className="section-menu">
                <li>
                    <a href="#">Issues</a>
                </li>
                <li>
                    <a href="#">Components</a>
                </li>
            </ul>
        </div>
        </CollapsableSection>
    );
};

