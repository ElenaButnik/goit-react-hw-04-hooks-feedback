import PropTypes from "prop-types";

export function Notification({ titleText }) {
  return <h3>{titleText}</h3>;
}

Notification.defaultProps = {
  titleText: "No feedback given",
};

Notification.propTypes = {
  titleText: PropTypes.string,
};
