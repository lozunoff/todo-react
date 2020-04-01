import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const { onSearchChange } = this.props;
    const term = e.target.value;
    this.setState({ term });
    onSearchChange(term);
  };

  render() {
    const { term } = this.state;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
        value={term}
      />
    );
  }
}

export default SearchPanel;
