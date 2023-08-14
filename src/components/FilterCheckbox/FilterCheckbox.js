import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onClickSwitch }) {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" onChange={onClickSwitch} />
      <div className="filter-checkbox__switch">
        <div className="filter-checkbox__slider"></div>
      </div>
      <p className="filter__text">Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;