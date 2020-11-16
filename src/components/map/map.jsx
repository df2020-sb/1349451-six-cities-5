import React, {Component} from "react";
import leaflet from 'leaflet';
import {PROPTYPES} from "../proptypes";

class Map extends Component {

  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
    this.renderMarkers = this.renderMarkers.bind(this);
    this.map = null;
    this.markers = [];
    this.icon = leaflet.icon({iconUrl: this.props.marker.default, iconSize: this.props.marker.size});
    this.activeIcon = leaflet.icon({iconUrl: this.props.marker.active, iconSize: this.props.marker.size});
  }

  renderMarkers() {
    const offers = this.props.offers;
    if (this.map) {
      offers.forEach((offer)=>{
        let marker = leaflet.marker(
            [offer.location.latitude, offer.location.longitude],
            {icon: this.props.activeOfferId === offer.id ? this.activeIcon : this.icon}
        ).addTo(this.map);
        this.markers.push(marker);
      });
    }
  }

  removeMarkers() {
    this.markers.forEach((marker)=>this.map.removeLayer(marker));
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
