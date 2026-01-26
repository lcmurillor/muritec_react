import "./values.css";

const Values = ({ url, title, label, marginRight }) => {
  return (
    <>
      <div className="value">
        <div>
          <div className="title">{title}</div>
          <div className="text">{label}</div>
        </div>
        <img
          src={url}
          className="img"
          style={{ marginRight: marginRight }}
        ></img>
      </div>
    </>
  );
};

export default Values;
