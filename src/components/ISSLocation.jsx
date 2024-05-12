import React, { Component } from 'react';
import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
// import { stamenTerrain } from 'pigeon-maps/providers'
import { connect } from 'react-redux';

class ISSLocation extends Component {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <main>
        <div className='map'>
            <Map
                // provider={stamenTerrain}
                // dprs={[1, 2]} // this provider supports HiDPI tiles
                center={ [0,0] }
                defaultWidth= { 450 }
                height={ 450 }
                minZoom={ 1.5 }
                maxZoom={ 50 }
                zoom={ 1.5 }
            >
                <ZoomControl />
                <Overlay 
                    anchor={[latitude, longitude]} 
                    offset={[-5, -5]}
                >
                    <img
                        className='ISSimg' 
                        src="https://img.icons8.com/external-flat-berkahicon/64/null/external-Satellite-astronomy-flat-berkahicon.png" 
                        width={40} 
                        height={40} 
                        alt=''
                    />
                </Overlay>
                <Marker 
                anchor={ [latitude,longitude] } 
                />
            </ Map>

        </div>
      </main>
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

export default connect(mapStateToProps)(ISSLocation);

// export default ISSLocation;