import React, {PureComponent} from 'react';
import Map from "../../components/map/map";
import {MARKER} from "../../const";

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component
        {...this.props}
        renderMap={(offers, activeOfferId) => {
          return (
            <Map
              offers={offers}
              activeOfferId={activeOfferId}
              marker={MARKER}
            />
          );
        }}
      />;
    }
  }

  WithMap.propTypes = {};

  return WithMap;
};

export default withMap;
