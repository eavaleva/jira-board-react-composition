import {Header} from "../Header";
import {PlanningSection} from "../PlanningSection";
import {DevelopmentSection} from "../DevelopmentSection";
import {DraggableSideBar} from "../DraggableSideBar";

export const SideBar = () => {
    return (
        <div className="sidebar">
            <DraggableSideBar>
                <Header/>
                <PlanningSection/>
                <DevelopmentSection/>
            </DraggableSideBar>
        </div>
    );
};
