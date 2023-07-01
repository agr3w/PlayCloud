import "./principal.css";

const Principal = () => {
  return (
    <section className="container principal">
      <div className="container__caixa">
        <h1 className="container__titulo">
          Com o Playstation Cloud, você pode aproveitar a biblioteca inteira do Playstation por um
          preço único.
        </h1>
        <img
          src="/img/Combo.png"
          className="container__imagem"
          alt="O combo+ é a junção do Alura+ e o Alura línguas"
        />
        <a href="https://portifolio-weslley-kampa.netlify.app/" className="container__botao">
          Assine por R$ 100,00 mensais*
        </a>
        <a
          href="https://github.com/agr3w"
          className="container__botao botao_secundario"
        >
          Teste de 14 dias
        </a>
        <p className="container__aviso">
          * 30 dias apartir da compra
        </p>
      </div>
    </section>
  );
};

export default Principal;
