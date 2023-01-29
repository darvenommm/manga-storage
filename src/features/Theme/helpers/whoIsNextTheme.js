import { THEME_VALUES } from '../../../shared/constants/themeValues';
const { light, dark } = THEME_VALUES;

export const whoIsNextTheme = (theme) => (theme === light ? dark : light);
