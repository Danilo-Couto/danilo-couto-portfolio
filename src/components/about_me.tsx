import React from 'react';
import useTranslation from "@/hooks/use-translation";

export function AboutMe() {
  const {t} = useTranslation();
  
  return (
    <div >
      <h2> {t('introTitle')} </h2>
      <p dangerouslySetInnerHTML={{ __html: t('introDescription') }} />
    </div>
  );
}