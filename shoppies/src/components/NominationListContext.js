import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class NominationListContextProvider extends Component {
  state = {
    nominationList: []
  };

  setNominationList = (newMovie) => {
    this.setState(prevState => {
      return {
        nominationList: [
            ...this.state.nominationList,
            newMovie
        ]
      };
    });
  };

  render() {
    return (
      <Provider value={{ nominationList: this.state.nominationList, setNominationList: this.setNominationList }} >
        {this.props.children}
      </Provider>
    );
  }
}

export { NominationListContextProvider, Consumer as NominationListContextConsumer };