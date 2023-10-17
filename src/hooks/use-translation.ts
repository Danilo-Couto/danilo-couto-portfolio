import { useLaguageContext } from '@/context/language-context';
import { dict } from '@/libs/dicionario';

export default function useTranslation() {
    
    const { locale, changeLocale } = useLaguageContext();

    function t(str: string) {
    if (!dict[locale][str]) {
        console.warn(`No string '${str}' for locale '${locale}'`);
    }
    
    return dict[locale][str];
    }

    return { t, locale, changeLocale };

}
