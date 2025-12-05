import { Button, StyleSheet, Text, View } from 'react-native';
import { useMoods } from '../context/MoodContext';

export default function HomeScreen({ navigation }) {
  const { moods } = useMoods();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mood Entries</Text>
      <Button title="Add Mood" onPress={() => navigation.navigate('AddMood')} />
      <View style={styles.spacer} />
      <Button title="View Mood Log" onPress={() => navigation.navigate('ViewMood')} />
      <Text style={styles.count}>Total Entries: {moods.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
  spacer: { height: 12 },
  count: { marginTop: 20, fontSize: 16, color: '#555' },
});
