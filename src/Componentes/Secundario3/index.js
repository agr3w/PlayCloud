import "./secundario3.css";

const Secundario3 = () => {
  return (
    <section className="container secundario">
      <img
        src="/img/Notebook.png"
        alt="Notebook com um curso da Alura"
        className="secundario__imagem"
      />
      <div className="container__descricao">
        <h2 className="descricao__titulo">Baixe seus games</h2>
        <p className="descricao__texto">
          Baixe e jogue quando e onde quiser. Assim, seus favoritos estão sempre
          com você, até mesmo fora de casa.
        </p>
      </div>
    </section>
  );
};

export default Secundario3;
