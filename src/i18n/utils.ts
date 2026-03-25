import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const defaultPrefix = ''; // No prefix for default language 'it' as per astro config (prefixDefaultLocale: false)
    const base = path.startsWith('/') ? path : `/${path}`;
    
    // If we're translating to the default language, and the config says don't prefix
    if (l === defaultLang) {
      // Remove any existing language prefix from path to get root path
      const pathWithoutLang = base.replace(new RegExp(`^/(${Object.keys(ui).join('|')})`), '');
      return pathWithoutLang || '/';
    }
    
    // If the path already has a language prefix, replace it
    for (const locale of Object.keys(ui)) {
      if (base.startsWith(`/${locale}/`) || base === `/${locale}`) {
        return base.replace(`/${locale}`, `/${l}`);
      }
    }

    // Otherwise attach the lang prefix
    return `/${l}${base === '/' ? '' : base}`;
  }
}
