import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      white: string;
      primary: string;
      litLetter: string;
    },
    font: {
      size: string;
    }
    baseline: string;
    breakpoint: {
      smallDesktop: string;
      tablet: string;
      smallTablet: string;
      mobile: string;
    }
  }
}
