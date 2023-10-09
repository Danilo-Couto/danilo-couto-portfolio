import { handleRedirect } from "../utils";
import useTranslation from "@/hooks/use-translation";

export function MyNetworks() {

  const { t } = useTranslation();
  
  return (
    <div >
      <button
        type="button"
      >
        <a href="/eu" > {t('introKnowMeBetter')} </a>
      </button>
      <button
        type="button"
        onClick={() =>
          handleRedirect('https://www.linkedin.com/in/danilocouto/')
        }
      > linkedin
      </button>
      
      <button
        type="button"
        onClick={() => handleRedirect('https://github.com/Danilo-Couto/')}
      > github
      </button>

      <button
        type="button"
        onClick={() => handleRedirect('https://github.com/Danilo-Couto/')}
      > CV
      </button>   

      <button
        type="button"
        onClick={() => handleRedirect('https://github.com/Danilo-Couto/')}
      > whatsapp
      </button>
    </div>

  );
}