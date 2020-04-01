import React, { Component } from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      let classList = 'btn';

      if (isActive) {
        classList += ' btn-info';
      } else {
        classList += ' btn-outline-secondary';
      }

      return (
        <button
          type="button"
          className={classList}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}

export default ItemStatusFilter;
