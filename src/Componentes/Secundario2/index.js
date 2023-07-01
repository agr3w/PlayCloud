import "./secundario2.css";

const Secundario2 = () => {
  return (
    <section className="container secundario">
      <div className="container__descricao">
        <p className="descricao__texto">
          O Playstation Cloud oferece uma gama incrível de jogos para você, além
          de diversas categorias para se divertir por horas e com toda a família.
        </p>
        <a
          href="https://portifolio-weslley-kampa.netlify.app/"
          className="container__botao secundario__botao"
        >
          Assinar o Playstation Cloud
        </a>
      </div>
      <img
        src="/img/Telas.png"
        alt="Telas da Alura+ e da Alura línguas"
        className="secundario__imagem"
      />
    </section>
  );
};

export default Secundario2;
