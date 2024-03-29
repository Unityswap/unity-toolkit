import { InputHTMLAttributes } from "react";
export declare type UnityToggleTheme = {
    handleBackground: string;
    handleShadow: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface UnityToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: Scales;
    checked?: boolean;
}
export interface HandleProps {
    scale: Scales;
}
export interface InputProps {
    scale: Scales;
}
export declare const scaleKeys: {
    readonly unitySize: "unitySize";
    readonly travelDistance: "travelDistance";
    readonly toggleHeight: "toggleHeight";
    readonly toggleWidth: "toggleWidth";
    readonly unityThickness: "unityThickness";
    readonly unityTwoOffset: "unityTwoOffset";
    readonly unityThreeOffset: "unityThreeOffset";
    readonly butterTop: "butterTop";
    readonly butterLeft: "butterLeft";
    readonly butterWidth: "butterWidth";
    readonly butterHeight: "butterHeight";
    readonly butterThickness: "butterThickness";
    readonly butterRadius: "butterRadius";
    readonly butterSmearOneTop: "butterSmearOneTop";
    readonly butterSmearOneLeft: "butterSmearOneLeft";
    readonly butterSmearTwoTop: "butterSmearTwoTop";
    readonly butterSmearTwoRight: "butterSmearTwoRight";
};
export declare type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
