
import "../styles/header.css"
import { AiFillBulb, AiFillStepBackward } from "react-icons/ai";
import { BR, ES, US } from "country-flag-icons/react/1x1";
import { useLaguageContext } from "@/context/language-context";
import { useThemeModeContext } from "@/context/thememode-context";

export function Header() {

  const { changeLocale } = useLaguageContext();
  const { toogleThemeMode } = useThemeModeContext();
  
  return (
    <div className="header">
      <AiFillStepBackward />
      <h2> Danilo Couto</h2>
      <div>
        <BR onClick ={() => {changeLocale('pt')}}>
        </BR>
        <US  onClick ={() => {changeLocale('en')}}>
        </US>
        <ES  onClick ={() => {changeLocale('es')}}>
        </ES>
        <AiFillBulb onClick ={() => {toogleThemeMode()}}/>
      </div>
    </div>
  );
}