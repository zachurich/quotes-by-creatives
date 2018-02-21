import React, { Component } from "react";
import Quote from "./components/Quote";
import QuoteSource from "./components/QuoteSource";
import Footer from "./components/Footer";
import wikiquote from "wikiquote";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      quote: {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. "
      },
      image: {}
    };
  }
  fetchQuote = () => {
    wikiquote.search("Steve Jobs").then(page => console.log(page.title));
    // this.setState({ quote: data });
  };
  fetchImg = () => {
    // this.setState({ image: data });
  };

  render() {
    return (
      <div className="wrapper">
        <Quote data={this.state.quote} getImg={this.fetchImg} />
        <QuoteSource
          img={this.state.image}
          quoteInfo={this.state.quote}
          getQuote={this.fetchQuote}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
