

const Content = () => {
    const handleButtonClick = () => {
        const textArea = document.getElementById('displayText');
        const displayArea = document.getElementById('displayArea');
        displayArea.innerHTML = textArea.value;
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
        color: '#fff',
        border: '1px solid #f3d8a0',
        borderRadius: '8px',
        padding: '3px',
    };

    const textAreaStyle = {
        margin: '10px',
        color: '#ae7954',
        border: '1px solid #DDBB9C'
    };

    return (
        <div style={containerStyle}>
            <textarea style={textAreaStyle} id="displayText" />
            <button style={buttonStyle} onClick={handleButtonClick}>
                Click here
            </button>
            <br />
            <div id="displayArea"></div>
        </div>
    );
};

export default Content;