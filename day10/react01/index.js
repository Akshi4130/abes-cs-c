{/* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>
            span 1
            </span>
            <span>
            span 2
            </span>
        </div>
    </div>
</div> */}

const reactElement = React.createElement('div',{ id: 'outer' },
    React.createElement('div',{ id: 'inner1' },
        React.createElement('div',{ id: 'span-container' },
           [ React.createElement('span', {}, 'span 1'),
            React.createElement('span', {}, 'span 2')
           ]
        )
    )
);
React.createElement('div',{ id: 'inner1' },
        React.createElement('div',{ id: 'span-container' },
           [ React.createElement('span', {}, 'span 1'),
            React.createElement('span', {}, 'span 2')
           ]
        )
    )
    React.createElement('div',{ id: 'inner1' },
        React.createElement('div',{ id: 'span-container' },
           [ React.createElement('span', {}, 'span 1'),
            React.createElement('span', {}, 'span 2')
           ]
        )
    )
const root =  ReactDOMcreateRoot(document.getElementById('root'));
  const divElement = React.createElement('div', {}, 'hello react learners(React)');
  root.render(divElement);