import useTranslation from "@/hooks/use-translation";

export function AboutMe() {
  const {t} = useTranslation();
  
  return (
    <div >
        <h2> {t('introTitle')} </h2>
        <p dangerouslySetInnerHTML={{ __html: t('introDescription') }} />
    </div>
  );
}


// const maisDetalhesSobreMim = Sou um desenvolvedor Full-Stack formado pela Trybe com mais 1500 horas dedicados a conteúdos, desafios e projetos de desenvolvimento web, desenvolvimento Front-End e Back-End, Ciência da Computação, Engenharia de Software, metodologias ágeis e habilidades comportamentais (Soft Skills).

// Foram mais de 50 projetos e contando usando tecnologias como HTML/CSS, JavaScript, React, Next.js, TypeScript, Node.js, Express, RESTful APIs, MySQL, MongoDB, Python e, agora, Java.

// Após uma viagem xamânica pela África, migrei da carreira publicitária para o empreendedorismo.

// 4 anos após, fiz uma viagem sabática de moto pelas 3 Américas, que transformou minha vida e me lançou ao universo da programação.


// Sou apaixonado por aprendizado contínuo e sempre busco criar soluções para minhas empreitadas. Desenvolver programas para melhorar o cotidiano dos que me cercam, ter uma vida leve, saudável e equilibrada entre trabalho, amigos e lazer são objetivos que me movem.

// Além da minha carreira profissional, vivi uma jornada excepcional, percorrendo 135 mil quilômetros de moto pelas 3 Américas, desde o Brasil até o Alasca e Ushuaia. Essa experiência auto-transformadora me tornou mais dinâmico, empático e adaptável.


// "Minha jornada tem sido diversificada e repleta de experiências enriquecedoras. Comecei como baterista, explorando os ritmos do rock, hardcore, punk e metal. Em seguida, busquei meu diploma em publicidade e propaganda na renomada Cásper Líbero. Minha carreira me levou a uma posição de destaque como coordenador de mídia em uma agência digital de excelência em São Paulo.

// Além disso, tive a oportunidade de explorar novos horizontes ao viajar pela África e, em seguida, gerenciar um hostel na bela Praia do Rosa, em Santa Catarina. Uma das realizações que mais me orgulho foi a co-invenção de um aplicativo de entretenimento adulto, que foi premiado pelo seu impacto e inovação.

// Outra grande aventura foi minha emocionante viagem de moto pelas três Américas, uma experiência que ampliou minha perspectiva e me proporcionou valiosos aprendizados.

// Hoje, estou dedicado a uma carreira como desenvolvedor web full-stack, com formação obtida na Trybe. Minha trajetória diversificada me trouxe uma ampla gama de habilidades e uma mentalidade aberta para enfrentar desafios no mundo da tecnologia."

// Este texto destaca suas diversas experiências de forma mais detalhada e envolvente.