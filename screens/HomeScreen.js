import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Mood Tracker!</Text>
      <Button
        title="Add Mood"
        onPress={() => navigation.navigate('AddMood')}
      />
      <Button
        title="View Mood Log"
        onPress={() => navigation.navigate('ViewMood')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});