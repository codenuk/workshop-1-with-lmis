import React from "react";
import ChildLevelTwoComponent from "../childLevelTwo";

const ChildLevelOneComponent: React.FC<any> = (props): any => {
  return (
    <div style={{ backgroundColor: 'red', color: 'white' }}>
      <h1>ChildLevelOneComponent</h1>
      <ChildLevelTwoComponent itemInCart={props.itemInCart} />
    </div>
  );
};

export default ChildLevelOneComponent;
