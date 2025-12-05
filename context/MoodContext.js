import { createContext, useContext, useReducer } from 'react';

const MoodContext = createContext();

const initialState = {
  moods: [],
};

function moodReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, moods: [...state.moods, { ...action.payload, id: Date.now() }] };
    case 'UPDATE':
      return {
        ...state,
        moods: state.moods.map((m) => (m.id === action.payload.id ? { ...m, ...action.payload } : m)),
      };
    case 'DELETE':
      return { ...state, moods: state.moods.filter((m) => m.id !== action.payload) };
    default:
      return state;
  }
}

export function MoodProvider({ children }) {
  const [state, dispatch] = useReducer(moodReducer, initialState);

  const addMood = (data) => dispatch({ type: 'ADD', payload: data });
  const updateMood = (data) => dispatch({ type: 'UPDATE', payload: data });
  const deleteMood = (id) => dispatch({ type: 'DELETE', payload: id });

  return (
    <MoodContext.Provider value={{ moods: state.moods, addMood, updateMood, deleteMood }}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMoods() {
  const context = useContext(MoodContext);
  if (!context) throw new Error('useMoods must be used within MoodProvider');
  return context;
}