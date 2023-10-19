import React from 'react';
import { AiFillBulb, AiFillStepBackward, AiOutlineBulb } from "react-icons/ai";
import { BR, ES, US } from "country-flag-icons/react/1x1";
import { useLaguageContext } from "@/context/language-context";
import { useThemeContext } from "@/context/theme_context";
import { useRouter } from "next/navigation";
import "../styles/header.css";
import Link from "next/link";

export function Header() {

  const defaultThemeContextValue = {
    theme: 'light',
    toogleTheme: () => {}, 
  };
  
  const { changeLocale } = useLaguageContext();
  const { theme, toogleTheme } = useThemeContext() || defaultThemeContextValue;

  const router = useRouter();

  const goBack = () => { 
    router.back();
  };

  return (
    <div className={"header"}>
      <AiFillStepBackward onClick={() => goBack() }/>
      <Link className="link" href='/'>
        <h3>Danilo Couto</h3>
      </Link>
      <div>
        <BR onClick ={() => {changeLocale('pt')}}>
        </BR>
        <US  onClick ={() => {changeLocale('en')}}>
        </US>
        <ES  onClick ={() => {changeLocale('es')}}>
        </ES>
        {theme === 'light' 
          ? <AiFillBulb onClick ={() => {toogleTheme()}}/> 
          :  <AiOutlineBulb onClick ={() => {toogleTheme()}}/> } 
      </div>
    </div>
  );
}
