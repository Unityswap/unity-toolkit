import React from "react";
import { UnityStack, UnityInput, UnityLabel } from "./StyledUnityToggle";
import { UnityToggleProps, scales } from "./types";

const UnityToggle: React.FC<UnityToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <UnityStack scale={scale}>
    <UnityInput id={props.id || "unity-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <UnityLabel scale={scale} checked={checked} htmlFor={props.id || "unity-toggle"}>
      <div className="unitys">
        <div className="unity" />
        <div className="unity" />
        <div className="unity" />
        <div className="butter" />
      </div>
    </UnityLabel>
  </UnityStack>
);

UnityToggle.defaultProps = {
  scale: scales.MD,
};

export default UnityToggle;
