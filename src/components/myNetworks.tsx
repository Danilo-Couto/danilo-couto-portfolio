import { handleRedirect } from "../utils";

export const myNetworks = 

  <div>
      {/* <a href="/eu" > saiba + </a> */}
      <button
        type="button"
        onClick={() =>
          handleRedirect('/eu/')
        }
      > saiba +
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