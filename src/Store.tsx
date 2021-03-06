import React from "react";
import { IState, IAction } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState | any>(initialState);

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
