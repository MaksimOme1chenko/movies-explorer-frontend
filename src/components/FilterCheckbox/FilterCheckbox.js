import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" />
      <div className="filter-checkbox__switch">
        <div className="filter-checkbox__slider"></div>
      </div>
      <p className="filter__text">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;