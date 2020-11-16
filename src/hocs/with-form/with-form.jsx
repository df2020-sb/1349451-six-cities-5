import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        score: 0,
        message: ``,
        isValid: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
    }

    checkValidity() {
      const messageLength = this.state.message.trim().length;
      if (this.state.score && (messageLength >= 50 && messageLength <= 300)) {
        this.setState({isValid: true});
      }
    }

    handleChange(evt) {
      if (evt.target.tagName === `INPUT`) {
        this.setState({score: Number(evt.target.value)});
      } else {
        this.setState({message: evt.target.value});
      }
      this.checkValidity();
    }

    onSuccess() {
      this.setState({message: ``, score: 0});
    }

    render() {
      const {score, message, isValid} = this.state;

      return (
        <Component
          {...this.props}
          score={score}
          message={message}
          isValid={isValid}
          onChange={this.handleChange}
          onSuccess={this.onSuccess}
        />
      );
    }
  }
  return WithForm;
};

export default withForm;
