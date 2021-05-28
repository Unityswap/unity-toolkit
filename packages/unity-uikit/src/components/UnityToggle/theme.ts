import { darkColors, lightColors } from "../../theme/colors";
import { UnityToggleTheme } from "./types";

export const light: UnityToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: UnityToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
