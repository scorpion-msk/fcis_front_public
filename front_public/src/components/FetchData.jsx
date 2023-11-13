import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FetchData = (api, dependency) => {
  // props  for component: api - backend URL, dependency - dependency array when initiate data fetch
  // set initial state variables
  const [isLoading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(false); // error state
  const [data, setData] = useState({}); // fetched data state

  useEffect(() => {
    // set initial state values when called by dependency
    setLoading(true);
    setError(false);
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // load parsed data in variable
        setLoading(false); //switch Loader off when data is loaded
      })
      .catch(() => {
        setError(true); // set error state on if error
      });
    // eslint-disable-next-line
  }, dependency);

  return { isLoading, error, data };
};

FetchData.propTypes = {
  api: PropTypes.string.isRequired,
  dependency: PropTypes.array.isRequired,
};
export default FetchData;
