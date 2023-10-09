export const handleRedirect = (url: string) => {
  window.open(url);
};

export const handleEmailClick = () => {
  window.location.href = `mailto:${'danilocoutodev@gmail.com'}`;
};

