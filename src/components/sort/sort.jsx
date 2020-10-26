import React, {useState} from "react";
import {SortType} from "../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {PROPTYPES} from "../proptypes";


const Sort = ({currentSortType, handleSortTypeChange})=>{
  const [sortSelectState, setSortSelectState] = useState(`closed`);

  const toggleSelect = ()=>{
    setSortSelectState((prevState)=>prevState === `opened` ? `closed` : `opened`);
  };

  const handleOptionClick = (evt) =>{
    handleSortTypeChange(evt);
    toggleSelect();
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
            onClick={handleOptionClick}>
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  handleSortTypeChange(evt) {
    dispatch(ActionCreator.setSortType(evt.target.textContent));
  },
});

Sort.propTypes = PROPTYPES.sort;

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
