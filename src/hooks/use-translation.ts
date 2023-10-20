import { LanguageDict, LanguageStrings } from '@/app/interfaces/Interfaces';
import { useLaguageContext } from '@/context/language_context';
import { dict } from '@/libs/dicionario';

export default function useTranslation() {
  const { locale, changeLocale } = useLaguageContext();

  function t(str: keyof LanguageStrings) {

    const language = dict.find((elem) => elem[locale as keyof LanguageDict]);

    if (language) {
      return language[locale as never][str];
    } else {
      console.warn(`No language found for locale '${locale}'`);
      return `Translation not found for ${str}`;
    }
  }

  return { t, locale, changeLocale };
}
