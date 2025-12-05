import { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MoodItem from '../components/MoodItem';
import { MoodContext } from '../context/MoodContext';

export default function ViewMoodScreen() {
  const { moods } = useContext(MoodContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Log</Text>
      {moods.length === 0 ? (
        <Text>No moods logged yet.</Text>
      ) : (
        <FlatList
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoodItem mood={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});