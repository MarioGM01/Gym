import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from './screens/Start'; // Asegúrate de que la ruta sea correcta
import { ListEjercice } from './screens/ListEjercice'; // Ruta a la pantalla ListEjercice
import Ejercices from './screens/Exercises'; // Importación por defecto
import { AboutUs } from './screens/About'; // Ruta a la pantalla AboutUs
import MuscleExercise from './screens/MuscleEjercice'; // Asegúrate de que la ruta sea correcta
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';  // Librería para pantallas responsivas

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{
            headerShown: false, // Oculta el encabezado
          }}
        />

        <Stack.Screen
          name="Musculos"
          component={ListEjercice}
          options={{
            title: 'Musculos',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#E0DED5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: wp('7%'), // Ajuste dinámico del tamaño de la fuente
              fontFamily: 'Times New Roman',
              textTransform: 'uppercase',
            },
          }}
        />

        <Stack.Screen
          name="Quienes Somos"
          component={AboutUs}
          options={{
            title: 'Ejercicios',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#E0DED5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: wp('7%'), // Ajuste dinámico del tamaño de la fuente
              fontFamily: 'Times New Roman',
              textTransform: 'uppercase',
            },
          }}
        />

        <Stack.Screen
          name="Ejercicios"
          component={Ejercices}
          options={{
            title: 'Lista',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#E0DED5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: wp('7%'), // Ajuste dinámico del tamaño de la fuente
              fontFamily: 'Times New Roman',
              textTransform: 'uppercase',
            },
          }}
        />

        <Stack.Screen
          name="MuscleExercise"
          component={MuscleExercise}
          options={{
            title: 'Ejercicio',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#E0DED5',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: wp('7%'), // Ajuste dinámico del tamaño de la fuente
              fontFamily: 'Times New Roman',
              textTransform: 'uppercase',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
