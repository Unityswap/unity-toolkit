import React, { useState } from "react";
import UnityToggle from "./UnityToggle";

export default {
  title: "Components/UnityToggle",
  component: UnityToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <UnityToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <UnityToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
