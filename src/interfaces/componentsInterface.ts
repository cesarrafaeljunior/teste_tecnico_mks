export interface IButtonComponent {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  alignSelf?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  right?: string;
  left?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  bordercolor?: string;
  color?: string;
  fontSize?: string;
  hover?: string;
  fontWeigth?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IDivFlexComponent {
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}

export interface IIconsComponent {
  width?: string;
  height?: string;
  color?: string;
  backgroundcolor?: string;
}
