const Footer = () => {
  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: "10px",
    backgroundColor: "#d8b67d",
    color: "#fff",
  };
  
  const infoStyle = {
    textAlign: 'left',
  };
  
  const quoteStyle = {
    textAlign: 'right',
    fontStyle: 'italic',
  };

  return (
    <footer style={footerStyle}>
      <div style={infoStyle}>
        <p>Name: Umme Mohona</p>
        <p>Address: Nikunja - 02, Dhaka.</p>
        <p>Email: ummemohonaa@gmail.com</p>
      </div>
      <div style={quoteStyle}>
        <p><q> Traveling – it leaves you speechless, then turns you into a storyteller.</q></p>
        <p style={{ fontStyle: 'normal' }}>- Ibn Battuta</p>
      </div>
    </footer>
  );
};

export default Footer;
