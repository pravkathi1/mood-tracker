import { Button, StyleSheet, View } from 'react-native';

const moodOptions = ['Happy', 'Sad', 'Excited', 'Angry', 'Neutral'];

export default function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <View style={styles.container}>
      {moodOptions.map((mood) => (
        <Button
          key={mood}
          title={mood}
          color={selectedMood === mood ? 'blue' : 'gray'}
          onPress={() => setSelectedMood(mood)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, width: '100%' },
});