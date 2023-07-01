import "./secundario1.css";

const Secundario1 = () => {
  return (
    <section className="container secundario">
      <img
        src="/img/Plataformas.png"
        alt="Um monitor e um celular com o Alura+ aberto"
        className="secundario__imagem"
      />
      <div className="container__descricao">
        <h2 className="descricao__titulo">Jogue do seu jeito</h2>
        <p className="descricao__texto">
          Aproveite a tela grande da TV ou jogue no tablet, laptop, celular e
          outros aparelhos. Nossa seleção de jgos não para de crescer.
        </p>
      </div>
    </section>
  );
};

export default Secundario1;
