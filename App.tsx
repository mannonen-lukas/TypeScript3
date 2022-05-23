import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TitleText from './component/TitleText';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleText title='Le titre de mon article' text='Le texte de mon article' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
