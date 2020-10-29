import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        score: ``,
        message: ``,
        isValid: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    checkValidity() {
      const messageLength = this.state.message.trim().length;
      if (this.state.score && (messageLength >= 50 && messageLength <= 300)) {
        this.setState({isValid: true});
      }
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleChange(evt) {
      const value = evt.target.value;
      if (evt.target.tagName === `INPUT`) {
        this.setState({score: value});
      } else {
        this.setState({message: value});
      }
      this.checkValidity();
    }

    render() {
      const {score, message, isValid} = this.state;

      return (
        <Component
          {...this.props}
          score={score}
          message={message}
          isValid={isValid}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      );
    }
  }
  return WithForm;
};

export default withForm;
