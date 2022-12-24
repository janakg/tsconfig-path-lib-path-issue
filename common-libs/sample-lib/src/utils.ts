import chroma from "chroma-js";

export function getColorHex(color: any) {
    return chroma(color).hex();
}