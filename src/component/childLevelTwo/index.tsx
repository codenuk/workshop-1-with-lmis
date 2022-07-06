import React from "react";
import ChildLevelThreeComponent from "../childLevelThree";

const ChildLevelTwoComponent: React.FC<any> = (props): any => {
  return (
    <div style={{ backgroundColor: 'green', color: 'white' }}>
      <h1>ChildLevelTwoComponent</h1>
      <ChildLevelThreeComponent itemInCart={props.itemInCart} />
    </div>
  );
};

export default ChildLevelTwoComponent;
