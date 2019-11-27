import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import en from './en.json';
import vi from './vi.json';

I18n.fallbacks = true;

I18n.translations = {
    en,
    vi
};

const currentLocale = I18n.currentLocale();
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}
export default I18n;
