export interface Repository {
    stargazers_count: number;
    topics: string[];
    id: string,
    name: string,
    html_url: string,
    fork: boolean
    language?: string,
    description?: string,
  }
  
export  interface RepositoryArray {
    repo: Repository[];
}

export interface Certificate {
    certificate: {
      link: string;
      title: string;
      altText: string;
      stacks?: string;
     };
  }

export interface MyHistory {
  mySelf: {
    company?: string,
    desc: string,
    link?: string, 
    title: string,
    year: string
  }
}

export interface LanguageStrings {
  introTitle: string;
  introDescription: string;
  introKnowMeBetter: string;
  introAltText: string;
  stacks: string;
  titleProjets: string;
  more: string;
  certificates: string;
}

export type LanguageDict = {
  pt: LanguageStrings;
  en: LanguageStrings;
  es: LanguageStrings;
};
