import React, { Component } from 'react';
// import latImg from '../assets/latitude.svg';
// import lonImg from '../assets/longitude.svg';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { latitude, longitude, isLoading } = this.props;

    return (
      <div className='header'>
        <h1>Space Station Tracker</h1>
        <div className='latLon'>
            <h1>
                <img src="https://img.icons8.com/office/40/null/latitude.png" alt='' />
                { `Latitude: ${ latitude }`} 
            </h1>
            <h1>
                {' '}
                <img src="https://img.icons8.com/office/40/null/longitude.png" alt="" />
                { `Longitude: ${ longitude }`} 
            </h1>
        </div>
        {
          isLoading && <h3 className='isLoading'>Loading...</h3>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    latitude: state.ISSLocationReducer.latitude,
    longitude: state.ISSLocationReducer.longitude,
    isLoading: state.ISSLocationReducer.isLoading,
  }
}

export default connect(mapStateToProps)(Header);

// export default Header;