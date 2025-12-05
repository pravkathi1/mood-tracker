import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MoodItem({ entry, onPress }) {
  const date = new Date(entry.date).toLocaleString();

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.emoji}>{entry.mood}</Text>
      <View style={styles.text}>
        <Text style={styles.note} numberOfLines={1}>
          {entry.note || 'No note'}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#fff', borderRadius: 8, marginVertical: 6 },
  emoji: { fontSize: 28, marginRight: 12 },
  text: { flex: 1 },
  note: { fontSize: 16 },
  date: { fontSize: 12, color: '#666', marginTop: 4 },
});