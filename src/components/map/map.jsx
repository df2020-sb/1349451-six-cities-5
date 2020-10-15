import React, {PureComponent} from "react";
import leaflet from 'leaflet';
import {PROPTYPES} from "../proptypes";

class Map extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      activeOffer: this.props.offers[0],
    };
  }

  componentDidMount() {
    const offers = this.props.offers;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);


    offers.map((offer)=>{
      leaflet
     .marker(offer.coordinates, {icon})
     .addTo(map);
    });

  }

  render() {
    return (
      <section className="cities__map map">
        <div id="map" style={{height: 1000}}></div>
      </section>
    );
  }
}

Map.propTypes = PROPTYPES.offersList;

export default Map;
