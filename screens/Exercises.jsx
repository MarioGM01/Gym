import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Librería para tamaños dinámicos

export default function Ejercices() {
  const navigation = useNavigation();
  const route = useRoute();
  const { group } = route.params; // 'group' es el arreglo de ejercicios que pasamos

  if (!group || !Array.isArray(group)) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No hay ejercicios disponibles.</Text>
      </View>
    );
  }

  // Función para renderizar cada ejercicio
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.exerciseCard}
      onPress={() => navigation.navigate('MuscleExercise', { exercise: item })}
    >
      <Text style={styles.exerciseName}>{item.name}</Text>
      <View style={styles.exerciseImageContainer}>
        <Image source={item.image} style={styles.exerciseImage} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      <FlatList
        style={styles.flatList}
        data={group}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo oscuro
    paddingTop: hp('3%'), // Uso de hp() para una altura dinámica
    paddingHorizontal: wp('4%'), // Uso de wp() para un padding horizontal dinámico
  },
  flatList: {
    marginTop: hp('2%'), // Margen dinámico para la lista
  },
  exerciseCard: {
    marginBottom: hp('2.5%'), // Margen inferior dinámico
    backgroundColor: '#333',
    borderRadius: 20,
    padding: wp('4%'), // Padding dinámico para el contenido
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0DED5',
  },
  exerciseImageContainer: {
    width: wp('80%'), // Ancho fijo para la imagen
    height: wp('80%'), // Alto fijo, mismo valor para mantener el ratio 1:1
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden', // Asegura que las imágenes no sobresalgan
    marginTop: hp('2%'), // Margen superior dinámico
  },
  exerciseImage: {
    width: '100%', // La imagen se ajustará al contenedor
    height: '100%', // Mantener altura relativa al contenedor
  },
  exerciseName: {
    textAlign: 'center',
    color: '#E0DED5', // Texto blanco
    fontSize: wp('8%'), // Tamaño dinámico de la fuente
    fontWeight: '900',
    letterSpacing: 1, // Espaciado de letras limpio
    fontFamily: 'Times New Roman', // Fuente clásica
    textTransform: 'uppercase', // Todo en mayúsculas
  },
  text: {
    fontSize: wp('4%'), // Ajuste dinámico del tamaño del texto
    textAlign: 'center',
    color: '#E0DED5',
  },
});
