import { css as emotionCss, CSSObject } from "@emotion/css";

export const css = (...args: CSSObject[]) => emotionCss(args);
