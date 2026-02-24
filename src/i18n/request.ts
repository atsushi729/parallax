import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import ja from '../messages/ja.json';
import en from '../messages/en.json';

const messages = { ja, en } as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'ja' | 'en')) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: messages[locale as 'ja' | 'en'],
  };
});
