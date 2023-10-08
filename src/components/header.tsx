import { AiFillBulb } from "react-icons/ai";
import "../styles/header.css"
import { BR, ES, US } from "country-flag-icons/react/1x1";

export function Header() {


  return (
    <div className="header">
      <h2> Danilo Couto</h2>
      <div>
        <US/>
        <BR/>
        <ES/>
        <AiFillBulb />
      </div>
    </div>
  );
}

