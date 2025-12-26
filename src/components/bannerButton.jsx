import "./bannerButton.css"

const BannerButton = ({label}) => {
  return (
    <>
      <button className="bannerButton" onClick={NavigateTo}> {label}</button>
    </>
  );
};

const NavigateTo = () => {
    console.log("Estoy Estresado")
}

export default BannerButton;
