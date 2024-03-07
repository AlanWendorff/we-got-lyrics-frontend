import Bowser from 'bowser';

export const APP_NAME = 'We got lyrics';
export const APP_URL = 'https://we-got-lyrics.vercel.app/';

export const BROWSER_NAME = Bowser.getParser(window.navigator.userAgent).getBrowserName();
