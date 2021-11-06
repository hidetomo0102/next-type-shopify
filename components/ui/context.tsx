import { createContext, FC, useContext, useReducer } from "react";

export type StateModifiers = {
  openSidebar: () => void;
  closeSidebar: () => void;
};

export type StateValues = {
  isSidebarOpen: boolean;
};

const StateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

const UIContext = createContext<{ [key: string]: any }>({
  ...StateModifiers,
  ...initialState,
});

type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" };

const uiReducer = (state: StateValues, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: false,
      };
  }
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};
