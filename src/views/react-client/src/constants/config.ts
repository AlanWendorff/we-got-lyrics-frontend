import Bowser from 'bowser';
import { EBrowserList } from './enum';

export const APP_NAME = 'We got lyrics';
export const APP_URL = 'https://we-got-lyrics.vercel.app/';

export const BROWSER_NAME = Bowser.getParser(window.navigator.userAgent).getBrowserName();

export const PWA_PROMPT_INCOMPATIBLE_BROWSER = BROWSER_NAME === EBrowserList.Firefox || BROWSER_NAME === EBrowserList.Safari;
