import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import "./index.css";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading ...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}
