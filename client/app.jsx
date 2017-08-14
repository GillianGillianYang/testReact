//npm install 
// run webpack : (1) npm install -g webpack
// better : node ./node_modules/webpack/bin/webpack.js --config webpack.config.js

const React = require('react');
const ReactDOM = require('react-dom');

class PlaceItem extends React.Component{


  render(){
    return(
        <div className="item">
          <i className="large youtube middle aligned icon"></i>
          <div className="content">
            <a className="header">{this.props.place}</a>
          </div>
        </div>
    ); 
  }

}

class App extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
    <div className="fourteen wide column">
      <h2 className="ui teal image header">
        <i className="hand spock icon"></i>
        <div className="content">
          Search the place
        </div>
      </h2>
      <div className="ui action input">
        <input id="urlText" type="text" placeholder="Search..."/>
        <button id="searchButton" className="ui blue button">Search</button>
      </div>
      <div className="ui horizontal divider">
        place-spot
      </div>
      <div id="resultList" className="ui relaxed divided list">
        <PlaceItem place="taipei 101"/>
        <PlaceItem place="NTU"/>
        <PlaceItem place="market"/>
      </div>
    </div>
  </div>
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