import React from "react";
import PropTypes from "prop-types";

const styleRow = {
  backgroundColor: "#f5f5f5ab",
};

const styleHeader = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={styleRow}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={styleHeader} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={styleHeader}>{textFirstCell}</th>
            <th style={styleHeader}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;