import "./headerButton.css"

const HeaderButton = ({label}) => {
  return (
    <>
      <button className="headerButton" onClick={NavigateTo}> {label}</button>
    </>
  );
};

const NavigateTo = () => {
    console.log("Estoy Estresado")
}

export default HeaderButton;
