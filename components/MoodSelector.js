import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EMOJIS = ['😊', '😐', '😔', '😢', '😡', '😴', '🤩'];

export default function MoodSelector({ value, onChange }) {
  return (
    <View style={styles.row}>
      {EMOJIS.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={() => onChange(emoji)}
          style={[styles.button, value === emoji && styles.selected]}
        >
          <Text style={styles.emoji}>{emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  button: { padding: 8, borderRadius: 8, borderWidth: 1, borderColor: '#ddd', margin: 4 },
  selected: { backgroundColor: '#e0f7fa', borderColor: '#4dd0e1' },
  emoji: { fontSize: 22 },
});