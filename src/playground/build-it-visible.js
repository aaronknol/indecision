console.log('App.js is running');

const text = {
    title: 'Visbility toggle',
    text: 'Here are the details'
};

let isVisible = false;

const toggleVisibility = () => {
    isVisible = !isVisible;
    renderApp();
}

const renderApp = () => {
    const template = (
        <header>
            <h1>{text.title}</h1>
            <button type="button" onClick={toggleVisibility}>
                {
                    isVisible ? 'Hide ' : 'Show '
                }
                details
            </button>
            {isVisible && <p>{text.text}</p>}
        </header>
    );
    
    ReactDOM.render(template, document.getElementById('app'));
}

renderApp();