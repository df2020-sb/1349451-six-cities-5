import React, {PureComponent} from "react";

const withSelect = (Component) => {
  class WithSelect extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        selectCondition: `closed`
      };

      this.toggleSelect = this.toggleSelect.bind(this);
    }

    toggleSelect() {
      this.setState((state) => {
        return {selectCondition: state.selectCondition === `opened` ? `closed` : `opened`};
      });
    }

    render() {
      const {selectCondition} = this.state;

      return (
        <Component
          {...this.props}
          selectCondition={selectCondition}
          toggleSelect={this.toggleSelect}
        />
      );
    }
  }
  return WithSelect;
};

export default withSelect;
