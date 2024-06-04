import "./Info.css";
const Info = ({ title, value }) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/1280px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png";
  return (
    <div className="container">
      <img width={120} height={50} alt="Teste" src={url}></img>
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
};

export default Info;
