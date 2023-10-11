import useTranslation from "@/hooks/use-translation";
import '../styles/certificates.css'

export function Certificates() {
  const {t} = useTranslation();
  
  return (
    <div className="div_box_right" title="">
      <h2>{t('certificates')}</h2>
    </div>
  );
}
