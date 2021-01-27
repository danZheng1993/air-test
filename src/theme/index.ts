import { DEFAULT_THEME } from './default';

export type Theme = {
  primaryColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  placeholderColor: string;
  primaryFont: string;
  secondaryFont: string;
  borderColor: string;
  secondaryBgColor: string;
  placeholderBgColor: string;
}

const THEME = DEFAULT_THEME as Theme;

export default THEME;