import "./index.css";
import HeaderButton from "../components/headerButton";
import BannerButton from "../components/bannerButton";
import InformationCard from "../components/informationCard";

const Index = () => {
  return (
    <>
      <div className="banner">
        <img src="src/assets/img1.jpg" className="img"></img>
        <div className="conteiner">
          <div className="header">
            <div>
              <img src="src/assets/logotipo.svg" className="logo"></img>
            </div>

            <div className="buttons">
              <HeaderButton label={"Acerca de nosotros"}></HeaderButton>
              <HeaderButton label={"Experiencia"}></HeaderButton>
              <HeaderButton label={"Contáctanos"}></HeaderButton>
            </div>
          </div>

          <div className="info">
            <div>
              <h1>MuriTEC</h1>
              <h3>
                Somos un equipo multidiciplinario enfocado en las distintas
                áreas de la Tecnología de la información
              </h3>
            </div>
            <div className="button">
              <BannerButton label={"Contáctanos"}></BannerButton>
            </div>
          </div>
          <div className="Carousel">
            <InformationCard
              url={"src/assets/pc.png"}
              title={"Computación"}
              label={
                "Mantenimiento preventivo y correctivo de equipos informáticos como computadoras portatilies, de estritorio,  impresaoras y puntos de venta."
              }
            >
              {" "}
            </InformationCard>
            <InformationCard
              url={"src/assets/networks.png"}
              title={"Redes"}
              label={
                "Cotización, venta e instalación de equipos de redes para entorno domestico y comercial."
              }
            >
              {" "}
            </InformationCard>
            <InformationCard
              url={"src/assets/code.png"}
              title={"Programación"}
              label={
                "Desarrollo de aplicaciones multiplataforma a medida, implementando las tecnologías más populares y solicitada en el mercado actural."
              }
            >
              {" "}
            </InformationCard>
            <InformationCard
              url={"src/assets/database.png"}
              title={"Bases de datos"}
              label={""}
            >
              {" "}
            </InformationCard>
          </div>
        </div>
      </div>
      <div className="missionVision">
        <div className="mission">
          <div>
            <div className="title">Misión</div>
          <div className="text">
            Ofrecer servicios orientados en las Tecnológicas de la Información,
            los cuales se puedan ajustar a las necesidades de cualquier tipo de
            cliente. Con nuestro equipo situado en el Cantón de Tilarán,
            buscamos ayudar a las personas de nuestra comunidad, instruyéndolos
            acerca de la tecnología y como innovarse.
          </div>
          </div>
           <img src="src/assets/pc.png" className="img"></img>
        </div>
      </div>
    </>
  );
};

export default Index;
