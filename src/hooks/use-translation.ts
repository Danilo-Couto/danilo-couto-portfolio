import { useLaguageContext } from '@/context/language_context';
import { dict } from '@/libs/dicionario';

export default function useTranslation() {
  const { locale, changeLocale } = useLaguageContext();

  function t(str: string) {

    const language = dict.find((elem) => elem[locale]) as { [key: string]: string } | undefined;
      if (language) return language[locale][str];
    console.warn(`No string '${str}' for locale '${locale}'`);
    }
   
  return { t, locale, changeLocale };
}