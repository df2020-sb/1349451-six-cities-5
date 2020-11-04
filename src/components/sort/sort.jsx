import React from "react";
import {SortType} from "../../const";
import withSelect from "../../hocs/with-select/with-select";
import {connect} from "react-redux";
import {setSortType} from "../../store/action";
import {PROPTYPES} from "../proptypes";


const Sort = ({currentSortType, handleSortTypeChange, selectCondition, toggleSelect})=>{

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
      <ul className={`places__options places__options--custom places__options--${selectCondition}`}>
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

const mapStateToProps = ({APP_STATE}) => ({
  currentSortType: APP_STATE.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  handleSortTypeChange(evt) {
    dispatch(setSortType(evt.target.textContent));
  },
});

Sort.propTypes = PROPTYPES.sort;

export default connect(mapStateToProps, mapDispatchToProps)(withSelect(Sort));
