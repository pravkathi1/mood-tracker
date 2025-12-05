import { createContext, useState } from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [moods, setMoods] = useState([]);

  const addMood = (mood) => {
    setMoods([...moods, { ...mood, id: Date.now() }]);
  };

  return (
    <MoodContext.Provider value={{ moods, addMood }}>
      {children}
    </MoodContext.Provider>
  );
};
