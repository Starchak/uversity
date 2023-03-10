export const fallbackLng = 'ua';
export const languages = [fallbackLng, 'ru'];
export const defaultNS = 'home';

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
};
