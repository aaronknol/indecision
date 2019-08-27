console.log('App.js is running');

const text = {
    title: 'Indecision',
    subtitle: 'An app to help pick',
    options: ['One', 'Two']
};
const template = (
    <header>
        <h1>{text.title}</h1>
        {text.subtitle && <p>{text.subtitle}</p>}
        <p>{(text.options && text.options.length) ? 'Here are your options' : 'No options'}</p> 
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </header>
);

let count = 0;
const addOne = () => {
    count = count + 1;
    renderCounterApp();
};

const subtractOne = () => {
    count = count - 1;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={addOne}>+1</button>
            <button type="button" onClick={subtractOne}>-1</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    );
    
    // ReactDOM.render(template, document.getElementById('app'));
    ReactDOM.render(templateTwo, document.getElementById('app'));
}

renderCounterApp();
