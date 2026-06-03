/**
 * Stub web de react-native-svg para o Storybook.
 *
 * react-native-svg usa APIs nativas do RN (codegenNativeComponent, Fabric etc.)
 * que não existem no ambiente web. Este stub mapeia os componentes RN-SVG para
 * elementos SVG nativos do HTML, preservando `color` como propriedade CSS para
 * que `fill="currentColor"` nos ícones gerados pelo SVGR funcione corretamente.
 */
import * as React from 'react';

type SvgProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  color?: string;
};

type PathProps = React.SVGProps<SVGPathElement>;
type CircleProps = React.SVGProps<SVGCircleElement>;
type RectProps = React.SVGProps<SVGRectElement>;
type GenericProps = Record<string, unknown> & { children?: React.ReactNode };

export const Svg = ({
  children,
  width,
  height,
  viewBox,
  color,
  style,
  ...props
}: SvgProps) => (
  // `color` é passado como CSS `color` para que `fill="currentColor"` nos
  // elementos filhos resolva para a cor correta no ambiente web do Storybook.
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    style={{ color, ...(style as React.CSSProperties) }}
    {...props}
  >
    {children}
  </svg>
);

export const Path = (props: PathProps) => <path {...props} />;
export const Circle = (props: CircleProps) => <circle {...props} />;
export const Rect = (props: RectProps) => <rect {...props} />;

const Stub = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export const G = Stub;
export const Defs = Stub;
export const ClipPath = Stub;
export const LinearGradient = Stub;
export const RadialGradient = Stub;
export const Stop = (_: GenericProps) => null;
export const Ellipse = (_: GenericProps) => null;
export const Line = (_: GenericProps) => null;
export const Polyline = (_: GenericProps) => null;
export const Polygon = (_: GenericProps) => null;
export const Text = ({ children }: { children?: React.ReactNode }) => (
  <text>{children}</text>
);
export const TSpan = ({ children }: { children?: React.ReactNode }) => (
  <tspan>{children}</tspan>
);
export const TextPath = Stub;
export const Use = (_: GenericProps) => null;
export const Mask = Stub;
export const Marker = Stub;
export const Pattern = Stub;
export const Symbol = Stub;
export const ForeignObject = Stub;
export const Image = (_: GenericProps) => null;
export const SvgUri = (_: GenericProps) => null;
export const SvgXml = (_: GenericProps) => null;
export const SvgFromUri = (_: GenericProps) => null;
export const SvgFromXml = (_: GenericProps) => null;
export const SvgCss = (_: GenericProps) => null;
export const SvgCssUri = (_: GenericProps) => null;

export type SvgProps_ = SvgProps;

export default Svg;
