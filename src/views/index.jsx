import "./index.css";
import Placeholder from "../assets/landscape-placeholder.svg";
import HeaderButton from "../components/headerButton";
("../components/headerButton");

const Index = () => {
  return (
    <>
      {" "}
      <div className="header">
        <div>
          <img src={Placeholder} className="img"></img>
        </div>

        <div className="buttons">
          <HeaderButton laber={"Acerca de nosotros"}></HeaderButton>
          <HeaderButton laber={"Experiencia"}></HeaderButton>
          <HeaderButton laber={"Contáctanos"}></HeaderButton>
        </div>
      </div>
      <div className="banner">
        <img src={Placeholder} className="img"></img>

        <div className="info">
          <div>
            <h1>MuriTEC</h1>
            <h3>
              Somos un equipo multidiciplinario enfocado en las distintas áreas
              de la Tecnología de la información
            </h3>
          </div>
          <HeaderButton laber={"Contáctanos"}></HeaderButton>
        </div>
      </div>
      {/* <div className="carousel"></div> */}
    </>
  );
};

export default Index;
