import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class BannerContextProvider extends Component {

  state = {
    banners: [false, false],
  };

  setBanners = (full, error) => {
    this.setState(prevState => {
      return {
        banners: [
            full,
            error
        ]
      };
    });
  };

  render() {
    return (
      <Provider value={{ banners: this.state.banners, setBanners: this.setBanners }} >
        {this.props.children}
      </Provider>
    );
  }
}

export { BannerContextProvider, Consumer as BannerContextConsumer };