import React, {PureComponent} from 'react';
import Map from "../../components/map/map";

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
