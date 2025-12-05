import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import MoodSelector from '../components/MoodSelector';
import { useMoods } from '../context/MoodContext';

export default function AddMoodScreen({ navigation }) {
  const [mood, setMood] = useState('😊');
  const [note, setNote] = useState('');
  const { addMood } = useMoods();

  const handleSave = () => {
    if (!mood) return alert('Please select a mood.');
    addMood({ mood, note, date: new Date() });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Your Mood</Text>
      <MoodSelector value={mood} onChange={setMood} />

      <Text style={styles.label}>Add a Note (Optional)</Text>
      <TextInput
        value={note}
        onChangeText={setNote}
        placeholder="Write a short note..."
        style={styles.input}
        multiline
      />

      <Button title="Save Mood" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { marginTop: 16, marginBottom: 8, fontWeight: '600', fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, minHeight: 80, textAlignVertical: 'top' },
});