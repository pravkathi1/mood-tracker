import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoodProvider } from './context/MoodContext';
import AddMoodScreen from './screens/AddMoodScreen';
import HomeScreen from './screens/HomeScreen';
import ViewMoodScreen from './screens/ViewMoodScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MoodProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mood Tracker' }} />
          <Stack.Screen name="AddMood" component={AddMoodScreen} options={{ title: 'Add Mood' }} />
          <Stack.Screen name="ViewMood" component={ViewMoodScreen} options={{ title: 'Mood Log' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoodProvider>
  );
}

