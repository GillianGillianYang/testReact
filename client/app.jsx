//npm install 
// run webpack : (1) npm install -g webpack
// better : node ./node_modules/webpack/bin/webpack.js --config webpack.config.js

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);