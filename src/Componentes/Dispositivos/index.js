import "./dispositivos.css";

const Dispositivos = () => {
  return (
    <section className="dispositivos">
      <h2 className="dispositivo__titulo">
        Disponível nos seus dispositivos favoritos
      </h2>
      <ul className="dispositivos__lista">
        <li>
          <img src="/img/tv.png" alt="icone de televisão" />
          <h3 className="lista__item">TV</h3>
        </li>
        <li>
          <img src="/img/computador.png" alt="icone de computador" />
          <h3 className="lista__item">Computador</h3>
        </li>
        <li>
          <img src="/img/celular.png" alt="icone de celular" />
          <h3 className="lista__item">Celular</h3>
        </li>
      </ul>
    </section>
  );
};

export default Dispositivos;
