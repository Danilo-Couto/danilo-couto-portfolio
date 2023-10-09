import { handleEmailClick, handleRedirect } from "@/utils";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import "../styles/footer.css"

export function Footer() {

  return (
    <div className="footer">
        <AiOutlineGithub
          onClick={() =>
            handleRedirect('https://github.com/Danilo-Couto/')
          }
        />
        <AiFillLinkedin
          onClick={() =>
            handleRedirect('https://www.linkedin.com/in/danilocouto/')
          }
        />
        <AiOutlineInstagram
          onClick={() => handleRedirect('https://instagram.com/danilo_couto')}
        />
        <AiOutlineYoutube
          onClick={() =>
            handleRedirect('https://www.youtube.com/motoemochilabrasil')
          }
        />
        <AiOutlineMail
        title = {'danilocoutodev@gmail.com'}
          onClick={() =>
            handleEmailClick()
          }
        />
    </div>
  );
}

