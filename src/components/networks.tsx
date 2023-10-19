import React from 'react';
import Link from "next/link";
import { handleRedirect } from "../utils";
import useTranslation from "@/hooks/use-translation";

export function Networks() {

  const { t } = useTranslation();
  
  return (
    <div className="buttons_intro">
      <button
        type="button"
      >
        <Link href={'/eu'}>{t('introKnowMeBetter')}</Link>
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
        onClick={() => handleRedirect('https://wa.me/+5519997484772')}
      > whatsapp
      </button>
    </div>

  );
}