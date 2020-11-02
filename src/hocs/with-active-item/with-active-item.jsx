import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeOfferId: ``
      };

      this.handleCardHover = this.handleCardHover.bind(this);
      this.handleCardMouseOut = this.handleCardMouseOut.bind(this);
    }

    handleCardHover(id) {
      this.setState({activeOfferId: id});
    }

    handleCardMouseOut() {
      this.setState({activeOfferId: ``});
    }

    render() {
      const {activeOfferId} = this.state;

      return (
        <Component
          {...this.props}
          activeOfferId={activeOfferId}
          onCardHover={this.handleCardHover}
          onCardMouseOut={this.handleCardMouseOut}
        />
      );
    }
  }
  return WithActiveItem;
};

export default withActiveItem;
