import useTranslation from "@/hooks/use-translation";
import '../styles/certificates.css'

export function Certificates() {
  const {t} = useTranslation();
  
  return (
    <div className="certificates">
      <h2>{t('certificates')}</h2>
    </div>
  );
}
