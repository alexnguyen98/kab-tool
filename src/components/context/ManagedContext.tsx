import React, { useReducer, useMemo, useCallback, useContext, createContext } from 'react';
import { ThemeProvider } from 'next-themes';

export interface State {
  input: string;
}

const initialState = {
  input: '',
};

type Action = {
  type: 'SET_INPUT';
  input: string;
};

export const GlobalContext = createContext<State | any>(initialState);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        input: action.input,
      };
  }
};

const GlobalProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInput = useCallback(
    (input: string) =>
      dispatch({
        type: 'SET_INPUT',
        input,
      }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setInput,
    }),
    [state]
  );

  return <GlobalContext.Provider value={value} {...props} />;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(`useGlobalContext must be used within a GlobalProvider`);
  }
  return context;
};

export const ManagedContext: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
    </GlobalProvider>
  );
};
