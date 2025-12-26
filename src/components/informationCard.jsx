import "./informationCard.css";

const InformationCard = ({ url, title, label }) => {

  return (
    <>
      <div className="card">
        <img src={url} className="img"></img>
        <div className="title">{title}</div>
        <div>{label}</div>
      </div>
      
    </>
  );
};

export default InformationCard;
