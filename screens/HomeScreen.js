import { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import MoodItem from '../components/MoodItem';
import { MoodContext } from '../context/MoodContext';

export default function HomeScreen({ navigation }) {
  const { moods } = useContext(MoodContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Mood Tracker</Text>
      <Button title="Add Mood" onPress={() => navigation.navigate('AddMood')} />
      <Button title="View Mood Log" onPress={() => navigation.navigate('ViewMood')} />

      {moods.length > 0 && (
        <FlatList
          data={moods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MoodItem mood={item} />}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  list: { marginTop: 20, width: '100%' },
});