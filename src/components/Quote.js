import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuoteMark from 'svg-react-loader?name=Quote!../quote.svg';

export default class Quote extends Component {
  render() {
    let quote = this.props.data ? this.props.data.quote : '';
    let size = 'normal';
    if (quote && quote.length >= 550) {
      size = 'small';
    } else if (quote && quote.length >= 450) {
      size = 'smaller';
    }
    return (
      <div className="quote">
        {quote && (
          <div className="quote--wrapper">
            <span className="quote-open">
              <QuoteMark />
            </span>
            <p className={`quote--${size}`}>{quote}</p>
            <span className="quote-closed">
              <QuoteMark />
            </span>
          </div>
        )}
      </div>
    );
  }
}

Quote.propTypes = {
  data: PropTypes.object,
  quoteAppend: PropTypes.string
};
