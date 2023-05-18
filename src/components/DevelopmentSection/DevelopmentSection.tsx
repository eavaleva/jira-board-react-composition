import {CollapsableSection} from "../CollapsableSection";

export const DevelopmentSection = () => {
  return (
      <CollapsableSection title="Development">
        <button className="board-picker">Eleonora's board</button>
          <ul className="section-menu">
              <li>
                  <a href="#">Project pages</a>
              </li>
              <li>
                  <a href="#">Sheets</a>
              </li>
              <li>
                  <a href="#">Add shortcut</a>
              </li>
              <li>
                  <a href="#">Project settings</a>
              </li>
          </ul>
        <div className="">You are in a private-managed project   <a href="#">learn more</a> </div>
      </CollapsableSection>
  );
};
