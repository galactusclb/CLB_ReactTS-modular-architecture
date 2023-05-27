export type Theme = "blue" | "lime" | "white" | "dark";

export interface ISummaryCard {
    theme?: Theme;
    mainText: string | number;
    title: string | number;
    subText: string | number;
}