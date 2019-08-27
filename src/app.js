console.log('App.js is running');

const text = {
    title: 'Indecision',
    subtitle: 'An app to help pick',
    options: []
};

const onSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        text.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onRemoveAll = () => {
    text.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * text.options.length);
    const selectedOption = text.options[randomNumber];
    alert(selectedOption);
};

const renderApp = () => {
    const template = (
        <header>
            <h1>{text.title}</h1>
            {text.subtitle && <p>{text.subtitle}</p>}
            <p>{(text.options && text.options.length) ? 'Here are your options' : 'No options'}</p> 
            <button type="button" onClick={onMakeDecision} disabled={!text.options.length}>What should I do?</button>
            <button type="button" onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    text.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add option</button>
            </form>
        </header>
    );
    
    ReactDOM.render(template, document.getElementById('app'));
}

renderApp();