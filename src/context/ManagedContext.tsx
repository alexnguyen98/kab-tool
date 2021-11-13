import React, { useReducer, useMemo, useCallback, useContext, createContext } from 'react';
import { ThemeProvider } from 'next-themes';
import { LETTER_LENGTH } from '../constants/vocabulary';
import { AffineType, SubstType } from '../types/cipther';

export interface State {
  input: string;
  output: string;
  faShift: number;
  shift: number;
  affine: AffineType;
  subst: SubstType;
}

const initialState = {
  input: '',
  output: '',
  faShift: 0,
  shift: 0,
  affine: {
    a: 1,
    b: 0,
  },
  subst: {},
};

type Action =
  | {
      type: 'SET_ALL_DATA';
      data: Omit<State, 'output'>;
    }
  | {
      type: 'SET_INPUT';
      input: string;
    }
  | {
      type: 'SET_OUTPUT';
      output: string;
    }
  | {
      type: 'SET_FA_SHIFT_LEFT';
    }
  | {
      type: 'SET_FA_SHIFT_RIGHT';
    }
  | {
      type: 'SET_SHIFT';
      shift: number;
    }
  | {
      type: 'SET_AFFINE';
      affine: AffineType;
    }
  | {
      type: 'SET_SUBST';
      subst: SubstType;
    };

export const GlobalContext = createContext<State | any>(initialState);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ALL_DATA':
      return {
        ...state,
        ...action.data,
      };
    case 'SET_INPUT':
      return {
        ...state,
        input: action.input,
      };
    case 'SET_OUTPUT':
      return {
        ...state,
        output: action.output,
      };
    case 'SET_FA_SHIFT_LEFT':
      return {
        ...state,
        faShift: state.faShift === 0 ? LETTER_LENGTH - 1 : state.faShift - 1,
      };
    case 'SET_FA_SHIFT_RIGHT':
      return {
        ...state,
        faShift: state.faShift === LETTER_LENGTH - 1 ? 0 : state.faShift + 1,
      };
    case 'SET_SHIFT':
      return {
        ...state,
        shift: action.shift,
      };
    case 'SET_AFFINE':
      return {
        ...state,
        affine: action.affine,
      };
    case 'SET_SUBST':
      return {
        ...state,
        subst: action.subst,
      };
  }
};

const GlobalProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setData = useCallback(
    (data: State) =>
      dispatch({
        type: 'SET_ALL_DATA',
        data,
      }),
    [dispatch]
  );

  const setInput = useCallback(
    (input: string) =>
      dispatch({
        type: 'SET_INPUT',
        input,
      }),
    [dispatch]
  );

  const setOutput = useCallback(
    (output: string) =>
      dispatch({
        type: 'SET_OUTPUT',
        output,
      }),
    [dispatch]
  );

  const setFaShiftLeft = useCallback(
    () =>
      dispatch({
        type: 'SET_FA_SHIFT_LEFT',
      }),
    [dispatch]
  );

  const setFaShiftRight = useCallback(
    () =>
      dispatch({
        type: 'SET_FA_SHIFT_RIGHT',
      }),
    [dispatch]
  );

  const setShift = useCallback(
    (shift: number) =>
      dispatch({
        type: 'SET_SHIFT',
        shift,
      }),
    [dispatch]
  );

  const setAffine = useCallback(
    (affine: AffineType) =>
      dispatch({
        type: 'SET_AFFINE',
        affine,
      }),
    [dispatch]
  );

  const setSubst = useCallback(
    (subst: SubstType) =>
      dispatch({
        type: 'SET_SUBST',
        subst,
      }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setData,
      setInput,
      setOutput,
      setFaShiftLeft,
      setFaShiftRight,
      setShift,
      setAffine,
      setSubst,
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
