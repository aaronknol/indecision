'use strict';

console.log('App.js is running');

var text = {
    title: 'Indecision',
    subtitle: 'An app to help pick',
    options: []
};

var onSubmit = function onSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        text.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    text.options = [];
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            text.title
        ),
        text.subtitle && React.createElement(
            'p',
            null,
            text.subtitle
        ),
        React.createElement(
            'p',
            null,
            text.options && text.options.length ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            text.options.length
        ),
        React.createElement(
            'button',
            { type: 'button', onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item 1'
            ),
            React.createElement(
                'li',
                null,
                'Item 2'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add option'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
