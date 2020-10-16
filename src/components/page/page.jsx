import React from "react";
import PropTypes from "prop-types";

const Page = (props) => {

  return (
    <div >
      {props.children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;