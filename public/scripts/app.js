'use strict';

console.log('App.js is running');

var text = {
    title: 'Indecision',
    subtitle: 'An app to help pick',
    options: ['One', 'Two']
};
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
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};

var subtractOne = function subtractOne() {
    console.log('subtractOne');
};

var reset = function reset() {
    console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { type: 'button', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { type: 'button', onClick: subtractOne },
        '-1'
    ),
    React.createElement(
        'button',
        { type: 'button', onClick: reset },
        'Reset'
    )
);

// ReactDOM.render(template, document.getElementById('app'));
ReactDOM.render(templateTwo, document.getElementById('app'));
