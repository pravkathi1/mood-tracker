import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useMoods } from '../context/MoodContext';

export default function ViewMoodScreen() {
  const { moods } = useMoods();

  return (
    <View style={styles.container}>
      {moods.length === 0 ? (
        <Text style={styles.emptyText}>No mood entries yet.</Text>
      ) : (
        <FlatList
          data={moods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.emoji}>{item.mood}</Text>
              <View style={styles.text}>
                <Text style={styles.note}>{item.note || 'No note'}</Text>
                <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  emptyText: { fontSize: 18, textAlign: 'center', marginTop: 40, color: '#666' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, marginVertical: 6, backgroundColor: '#fff', borderRadius: 8 },
  emoji: { fontSize: 28, marginRight: 12 },
  text: { flex: 1 },
  note: { fontSize: 16 },
  date: { fontSize: 12, color: '#888', marginTop: 4 },
});