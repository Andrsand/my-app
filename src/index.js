// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  //height: 30,
  width: 300,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    items: Array.from(['fff', 'ssss', 2, 4, 4, 5, 4, 3, 3, 2, 3, 4, 6, 'fff', 'ssss', 2, 4, 4, 5, 4, 3, 3, 2, 3, 4, 6, 'fff', 'ssss', 2, 4, 4, 5, 4, 3, 3, 2, 3, 4, 6, 'fff', 'ssss', 2, 4, 4, 5, 4, 3, 3, 2, 3, 4, 6, 'end'])
    //items: Array.from({ length: 20 }) // поле items с изначальной длинной 20 строк
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 10 })) // добавляет в массив определенное число новых строк
      });
    }, 500);
  };

  render() {
    return (
      <div id="scrollableDiv" style={{ height: 500, overflow: "auto" }}>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              {i} - #{index} !!!
              <details>
                <summary></summary>
                <p>Бендер Родригез</p>
              </details>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
