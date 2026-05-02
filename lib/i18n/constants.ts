/** Cookie mirrors localStorage locale so SSR / future middleware can read it. */
export const LOCALE_COOKIE_NAME = "davinci-locale";
export const LOCALE_COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 365;
