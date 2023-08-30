import { useReducer } from "react";
import { debounce } from "lodash";

import { ACTIONS, INITIAL_STATE, reducer } from "../utils/reducer";
import { BASE_URL } from "../utils/base";

const Beers = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleData = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: ACTIONS.FETCH_ERROR, payload: error })
      );
  };

  const handleDebounce = debounce(() => {
    handleData();
  }, 250);

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET_DATA });
    !state.fetching ? alert("No data to fetch!") : null;
  };

  return (
    <>
      <section className="container">
        <button type="button" className="beer-button" onClick={handleDebounce}>
          BEER
        </button>
        <button
          type="button"
          className="reset-button m-4"
          onClick={handleReset}
        >
          RESET
        </button>
      </section>

      <section className="beer-section">
        <div key={state.beer.uid}>
          <h1>{state.beer.brand}</h1>
          <h1>{state.beer.name}</h1>
          <h1>{state.beer.style}</h1>
        </div>
      </section>
    </>
  );
};

export default Beers;
