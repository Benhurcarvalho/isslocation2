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
          <a target="blank" href="https://icons8.com/icon/2VXZb3OKn14e/satellite">Satellite icon by Icons8</a>
        </footer>
      </>
    );
  }
}

export default connect()(App);
