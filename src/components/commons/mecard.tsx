import "../../styles/_mecard.scss";

function MeCard() {
  return (
    <div className="item me-card">
      <h2> Hello&nbsp;World&nbsp; <img src="../../public/home/book.gif" alt="Book"/>  </h2>
        <p>
          Oi, meu nome é Harison, sou técnico em Desenvolvimento de Sistemas na ETEC
          e estou fazendo o faculdade de tecnólogo em Análise e
          Desenvolvimento de Sistemas.
        </p>          
        <br />
        <p>
          Estou envolvido com a programação desde criança, fazendo pequenos script e aplicações para jogos, e atualmente estou
          estudando e desenvolvendo projetos acadêmicos.
        </p>    
        <br />
        <p>
          Além da programação, gosto muito de futebol, sou são paulino, gosto muito de escultar música, principalmente rap, trap e músicas
          internacionais.
        </p>
    </div>
  )
}

export default MeCard