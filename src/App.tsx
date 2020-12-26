import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any) {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>The Simpsons</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
