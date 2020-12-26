// All the interfaces

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: any };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}

export interface IEpisode {
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  season: number;
}
