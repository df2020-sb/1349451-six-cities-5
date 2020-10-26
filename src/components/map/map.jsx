import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import {PROPTYPES} from "../proptypes";
import {connect} from "react-redux";

const ZOOM = 12;
const ICON_SIZE = [30, 30];

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE
});

const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: ICON_SIZE
});

class Map extends PureComponent {

  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
    this.map = null;
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  renderMarkers() {
    const offers = this.props.offers;
    if (this.map) {
      offers.forEach((offer)=>{
        leaflet
     .marker(offer.coordinates, {icon: this.props.activeOfferId === offer.id ? activeIcon : icon})
     .addTo(this.map);
      });
    }
  }

  componentDidMount() {

    this.map = leaflet.map(this.mapContainer.current, {
      city: this.props.centerCoords,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(this.props.centerCoords, ZOOM);
    this.map.scrollWheelZoom.disable();
    this.map.on(`click`, () => {
      this.map.scrollWheelZoom.enable();
    });
    this.map.on(`mouseout`, () => {
      this.map.scrollWheelZoom.disable();
    });

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this.renderMarkers();
  }

  componentDidUpdate() {
    this.map.setView(this.props.centerCoords).invalidateSize(ZOOM);
    this.renderMarkers();
  }

  render() {
    return (
      <div ref={this.mapContainer} style={{height: `100%`}} backgroundcolor="red"></div>
    );
  }
}

const mapStateToProps = (state) => ({
  centerCoords: state.selectedCity.coords,
});

Map.propTypes = PROPTYPES.offersList;

export default connect(mapStateToProps)(Map);
