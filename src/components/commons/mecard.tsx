import "../../styles/_mecard.scss";

function MeCard() {
  return (
    <div className="item me-card">
      <h2> Hello&nbsp;World&nbsp; <img src="https://i.pinimg.com/originals/fe/f8/65/fef865f1df5fa7bfefafaa56f4d7aaec.gif" alt="Book"/>  </h2>
        <p>
          Oi, meu nome é Harison, sou técnico em Desenvolvimento de Sistemas pela ETEC Itaquera
          e estou cursando tecnólogo em Análise e
          Desenvolvimento de Sistemas na Faculdade Impacta de Tecnologia.
        </p>          
        <br />
        <p>
          Estou envolvido com a programação desde criança, fazendo pequenos script e aplicações para jogos, e atualmente estou
          estudando e desenvolvendo projetos acadêmicos.
        </p>    
        <br />
        <p>
          Além da programação, gosto muito de futebol, sou são paulino, adoro escultar música, principalmente rap, trap e músicas
          internacionais.
        </p>
    </div>
  )
}

export default MeCard