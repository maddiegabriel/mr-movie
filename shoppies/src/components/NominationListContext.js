import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class NominationListContextProvider extends Component {
  state = {
    nominationList: [],
  };

  setNominationList = (newList) => {
    // could update localStorage here for persistence
    // console.log(this.state.nominationList)
  
    this.setState(prevState => {
      return {
        nominationList: newList
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