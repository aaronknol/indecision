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
}

const onRemoveAll = () => {
    text.options = [];
    renderApp();
}

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <header>
            <h1>{text.title}</h1>
            {text.subtitle && <p>{text.subtitle}</p>}
            <p>{(text.options && text.options.length) ? 'Here are your options' : 'No options'}</p> 
            <p>{text.options.length}</p>
            <button type="button" onClick={onRemoveAll}>Remove all</button>
            {
                numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                })
            }
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