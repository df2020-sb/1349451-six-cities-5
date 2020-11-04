import React, {Component} from "react";
import leaflet from 'leaflet';
import {PROPTYPES} from "../proptypes";


const ICON_SIZE = [30, 30];

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: ICON_SIZE
});

const activeIcon = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: ICON_SIZE
});

let markers = [];

class Map extends Component {

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
        let marker = leaflet.marker(
            [offer.location.latitude, offer.location.longitude],
            {icon: this.props.activeOfferId === offer.id ? activeIcon : icon}
        ).addTo(this.map);
        markers.push(marker);
      });
    }
  }

  removeMarkers() {
    markers.forEach((marker)=>this.map.removeLayer(marker));
  }

  componentDidMount() {

    const coords = [this.props.offers[0].city.location.latitude, this.props.offers[0].city.location.longitude];
    const zoom = this.props.offers[0].city.location.zoom;

    this.map = leaflet.map(this.mapContainer.current, {
      city: coords,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(coords, zoom);
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
    const coords = [this.props.offers[0].city.location.latitude, this.props.offers[0].city.location.longitude];
    const zoom = this.props.offers[0].city.location.zoom;
    this.removeMarkers();
    this.map.setView(coords, zoom);
    this.renderMarkers();
  }

  render() {
    return (
      <div ref={this.mapContainer} style={{height: `100%`}} backgroundcolor="red"></div>
    );
  }
}

Map.propTypes = PROPTYPES.offersList;

export default Map;
