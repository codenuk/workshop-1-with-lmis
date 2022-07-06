import React from "react";

const ChildLevelThreeComponent: React.FC<any> = (props): any => {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white' }}>
      <h1>ChildLevelThreeComponent</h1>
      <h3>จำนวนไอเทม: {props.itemInCart}</h3>
    </div>
  );
};

export default ChildLevelThreeComponent;
