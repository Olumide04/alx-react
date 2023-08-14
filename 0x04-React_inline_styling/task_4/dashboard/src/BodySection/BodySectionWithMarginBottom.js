import PropTypes from "prop-types";
import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className={css(style.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const style = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;