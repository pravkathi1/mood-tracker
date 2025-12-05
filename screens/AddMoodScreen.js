import { useContext, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MoodSelector from '../components/MoodSelector';
import { MoodContext } from '../context/MoodContext';

export default function AddMoodScreen({ navigation }) {
  const { addMood } = useContext(MoodContext);
  const [selectedMood, setSelectedMood] = useState('');

  const handleAddMood = () => {
    if (selectedMood) {
      addMood({ mood: selectedMood, date: new Date().toLocaleDateString() });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
      <Button title="Save Mood" onPress={handleAddMood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});