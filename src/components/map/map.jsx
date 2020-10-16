import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import {PROPTYPES} from "../proptypes";

const ZOOM = 12;
const ICON_SIZE = [30, 30];
const CENTER = [52.38333, 4.9];

class Map extends PureComponent {

  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();

    this.state = {
      activeOffer: this.props.offers[0],
    };
  }

  componentDidMount() {
    const offers = this.props.offers;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: ICON_SIZE
    });

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: ICON_SIZE
    });

    const map = leaflet.map(this.mapContainer.current, {
      city: CENTER,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(CENTER, ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    offers.forEach((offer, i)=>{
      leaflet
     .marker(offer.coordinates, {icon: this.state.activeOffer === offers[i] ? activeIcon : icon})
     .addTo(map);
    });
  }

  render() {
    return (
      <section className="cities__map map">
        <div ref={this.mapContainer} style={{height: 1000}}></div>
      </section>
    );
  }
}

Map.propTypes = PROPTYPES.offersList;

export default Map;
