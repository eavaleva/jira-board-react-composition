import {TopBar} from "../TopBar";
import {Issue} from "../Issue";
import {SideBar} from "../SideBar";
import {JiraPageLayout} from "../JiraPageLayout";


export const JiraIssuePage = () => {
    return (
        <JiraPageLayout>
            <Issue />
        </JiraPageLayout>
    );
};
