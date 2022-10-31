import styled from "styled-components";

type PositionAttr = "static" | "relative" | "absolute" | "sticky" | "fixed";

type ObjectFitAttr = "fill" | "contain" | "cover" | "none" | "scale-down";

type PositionalAlignment =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end";

type DistributedAlignment =
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

type JustifyContentAttr =
  | "normal"
  | PositionalAlignment
  | DistributedAlignment
  | "left"
  | "right";

type BaselineAlignment = "baseline" | "first baseline" | "last baseline";

type AlignItemsAttr = PositionalAlignment | BaselineAlignment;

type AlignSelfAttr =
  | PositionalAlignment
  | "self-start"
  | "self-end"
  | BaselineAlignment
  | "stretch";

type FlexDirectionAttr = "row" | "row-reverse" | "column" | "column-reverse";

type OverflowAttr = "visible" | "hidden" | "clip" | "scroll" | "auto";

type FontWeightAttr =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "bold"
  | "lighter"
  | "bolder";

type TextAlignAttr =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

type CursorAttr =
  | "auto"
  | "default"
  | "none"
  | "context-menu "
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text "
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "e-resize"
  | "n-resize"
  | "ne-resize"
  | "nw-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "w-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "col-resize "
  | "row-resize"
  | "all-scroll"
  | "zoom-in "
  | "zoom-out"
  | "grab"
  | "grabbing";

export const ButtonTag = styled.button<{
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  alignSelf?: AlignSelfAttr;
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.5rem;
  background: var(--buttonBg);
  transition: all 100ms ease-out;
  border: 2px solid var(--orange);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  align-self: ${({ alignSelf }) => alignSelf};
  margin: ${({ margin }) => margin};

  &:hover {
    cursor: pointer;
    color: var(--orange);
    background: transparent;
    border: 2px solid var(--orange);
  }
`;

export const ImgTag = styled.img<{
  borderRadius?: string;
  objectFit?: ObjectFitAttr;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  cursor?: CursorAttr;
  alignSelf?: AlignSelfAttr;
  padding?: string;
  margin?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  object-fit: ${({ objectFit }) => objectFit};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ alignSelf }) => alignSelf};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export const ContainerTag = styled.div<{
  justifyContent?: JustifyContentAttr;
  alignItems?: AlignItemsAttr;
  gap?: string;
  flexDirection?: FlexDirectionAttr;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  position?: PositionAttr;
  overflow?: OverflowAttr;
  cursor?: CursorAttr;
  alignSelf?: AlignSelfAttr;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: ${({ overflow }) => overflow};
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ bgColor }) => bgColor};
  align-self: ${({ alignSelf }) => alignSelf};
`;

export const TextTag = styled.span<{
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeightAttr;
  textAlign?: TextAlignAttr;
  textDecoration?: string;
  padding?: string;
  margin?: string;
  cursor?: CursorAttr;
  alignSelf?: AlignSelfAttr;
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ alignSelf }) => alignSelf};
`;

export const GridContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
`;
