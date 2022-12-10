import React from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import { connect } from 'react-redux';
import { fetchISSLocation } from './redux/actions';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchISSLocation())

    this.id = setInterval(() => dispatch(fetchISSLocation()), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {

    return (
      <>
        <div className="App">
          <Header />
          <ISSLocation />
        </div>
        <footer className='footer'>
          <ul className='liFooter'>
            <li>
              <a target="blank" href="https://icons8.com/icon/2VXZb3OKn14e/satellite">Satellite icon by Icons8</a>
            </li>
            <li>
              <a target="blank" href="https://icons8.com/icon/30565/latitude">Latitude icon by Icons8</a>
            </li>
            <li>
              <a target="blank" href="https://icons8.com/icon/30562/longitude">Longitude icon by Icons8</a>
            </li>
          </ul>
        </footer>
      </>
    );
  }
}

export default connect()(App);
