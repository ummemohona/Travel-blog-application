

const Content = () => {
    const  handleButtonClick = () => {
        const textArea = document.getElementById('displayText');
        textArea.value = "Every traveler carries a unique tale, woven with the threads of unforgettable experiences and cherished memories. From the hidden gems stumbled upon to the serendipitous encounters with locals, each journey leaves an indelible mark on the soul. The laughter shared, the challenges conquered, and the moments of awe are all part of the traveler's tapestry. Every destination becomes a chapter, and every story told becomes an inspiration for those who long to explore. So, come forth, fellow wanderers, and let us share our travel stories, weaving a tapestry of wanderlust that connects us all";
      };

      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      };
      
      const buttonStyle = {
        margin: '10px',
        backgroundColor: '#f3d8a0',
        border: '1px solid #f3d8a0',
        borderRadius: '8px',
        padding: '3px',
      };
      
      const textAreaStyle = {
        margin: '10px',
        width: '550px',
        height: '170px',
        color: '#ae7954',
        border: '1px solid #DDBB9C'
      };

    return (
        <div style={containerStyle}>
            <button style={buttonStyle} onClick={handleButtonClick}>Click here to see the Content</button>
            <br />
        <textarea style={textAreaStyle} id="displayText" defaultValue="See more..." readOnly />
        </div>
    );
};

export default Content;