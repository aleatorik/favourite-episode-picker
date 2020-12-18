import React from "react";
import { Store } from "./Store";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const URL =
      "http://api.tvmaze.com/singlesearch/shows?q=Simpsons&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
  console.log(state);
  return (
    <>
      <h1>The Simpsons</h1>
      <p>Pick your favourite episode!</p>
    </>
  );
}
