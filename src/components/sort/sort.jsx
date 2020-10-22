import React, {useState} from "react";
import {SortType} from "../../const";


const Sort = ({currentSortType, onSortTypeChange})=>{
  const [sortSelectState, setSortSelectState] = useState(`closed`);

  const toggleSelect = ()=>{
    setSortSelectState((prevState)=>prevState === `opened` ? `closed` : `opened`);
  };

  const handleSelectChange = (sortType)=>{
    toggleSelect();
    onSortTypeChange(sortType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSelect}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${sortSelectState}`}>
        {Object.values(SortType).map((sortType)=>(
          <li key={sortType}
            className={`places__option ${sortType === currentSortType ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={()=>handleSelectChange(sortType)}>
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};
export default Sort;
