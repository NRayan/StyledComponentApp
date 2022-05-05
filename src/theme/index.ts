interface ThemeColors {
    BACKGROUND: string,
    PRIMARY: string,
    TEXT1: string,
    TEXT2: string,
}

export interface ThemeProps {
    NAME: "Dark" | "Light",
    COLORS: ThemeColors
}

export { dark } from "./dark";
export { light } from "./light";

