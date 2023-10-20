export interface Repository {
    id: string,
    name: string,
    html_url: string,
    fork: boolean
  }
  
export  interface RepositoryArray {
    repo: Repository[];
}

export interface Certificate {
    certificate: {
      link: string;
      title: string;
      altText: string;
     };
  }
  