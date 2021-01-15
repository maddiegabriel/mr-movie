import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class NominationListContextProvider extends Component {
  state = {
    nominationList: [
        "{ imdb: 1234 }",
        "{ imdb: 5678 }"
    ]
  };

  setNominationList = (newMovie) => {
    console.log('inside setNominationList')
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
