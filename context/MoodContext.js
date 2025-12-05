import { createContext, useState } from 'react';

export const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [moods, setMoods] = useState([]);

  const addMood = (mood) => {
    setMoods((prev) => [...prev, { id: Date.now().toString(), ...mood }]);
  };

  return (
    <MoodContext.Provider value={{ moods, addMood }}>
      {children}
    </MoodContext.Provider>
  );
};