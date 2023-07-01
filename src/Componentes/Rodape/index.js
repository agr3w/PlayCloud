import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <img src="/img/Logo.png" alt="Alura+" className="rodape__logo" />
      <ul className="rodape__lista">
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">idiomas</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Dispositivos compatíveis</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Contrato de assinatura</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Política de privacidade</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Proteção de dados do Brasil</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Anúncios personalizados</a>
        </li>
        <li className="lista__link">
          <a href="https://portifolio-weslley-kampa.netlify.app/">Ajuda</a>
        </li>
      </ul>
      <p className="rodape__texto">
        ® 2023 Sony Playstation. Todos os direitos reservados.
        Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.
      </p>
      <p className="rodape__texto">
        Playstation Cloud é um serviço pago, baseado em assinatura e sujeito a termos e
        condições.
      </p>
    </footer>
  );
};

export default Rodape;
