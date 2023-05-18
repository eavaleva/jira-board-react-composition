import {MainMenu} from "../MainMenu";
import {Logo} from "../Logo";
import {CreateTopBarItems} from "../CreateTopBarItems";
import {SearchBar} from "../SearchBar";
import {ProfileMenu} from "../ProfileMenu";

export const TopBar = () => {
    return (
        <div className="top-bar">
            <Logo/>
            <MainMenu/>
            <CreateTopBarItems/>
            <SearchBar/>
            <ProfileMenu/>
        </div>
    );
};
