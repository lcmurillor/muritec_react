import "./headerButton.css"

const HeaderButton = ({laber}) => {
  return (
    <>
      <button onClick={NavigateTo}> {laber}</button>
    </>
  );
};

const NavigateTo = () => {
    console.log("Estoy Estresado")
}

export default HeaderButton;
