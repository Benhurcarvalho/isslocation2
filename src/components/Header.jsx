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
        <h1>
            {/* <img src={ latImg } alt='' width='30' />*/}
            { `Latitude: ${ latitude }`} 
        </h1>
        <h1>
            {' '}
            {/* <img src={ lonImg } alt="" width='30' />*/}
            { `Longitude: ${ longitude }`} 
        </h1>
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