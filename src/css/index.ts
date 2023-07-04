import { css as emotionCss, CSSObject } from "@emotion/css";
import { mq } from "../theme";

export const css = (...args: CSSObject[]) => emotionCss(mq(args));
