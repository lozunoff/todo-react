import React, { Component } from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    const { onItemAdded } = this.props;
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
        />
        <button type="submit" className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}

export default ItemAddForm;
