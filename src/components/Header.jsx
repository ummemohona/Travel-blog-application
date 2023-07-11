const Header = (props) => {
  const headerStyle = {
    background: `url('src/assets/images/img.webp')`,
    backgroundSize: "100% 360px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: "white",
    fontFamily: "YourChosenFont, sans-serif",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "column",
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ display: "block" }}>{props.title}</h1>
      <p style={{ display: "block" }}>
        Embark on Uncharted Journeys through Captivating Narratives
      </p>
    </div>
  );
};

export default Header;
