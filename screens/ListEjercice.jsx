import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gymExercises } from '../Data/listOfEjercices';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Usamos la librería para tamaños dinámicos

export function ListEjercice() {
    const navigation = useNavigation();

    // Obtén las claves del objeto gymExercises
    const muscleGroups = Object.keys(gymExercises);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />

            <View style={styles.buttons}>
                {muscleGroups.map((group, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, styles.buttonOutline]}
                            onPress={() => navigation.navigate('Ejercicios', { group: gymExercises[group] })}>
                            <Text style={styles.buttonText}>{group}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

const { width } = Dimensions.get('window'); // Obtención del ancho de la pantalla

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Fondo oscuro
    },
    buttons: {
        alignSelf: 'center',
        flexDirection: 'column',
        gap: 15, // Usa margen si gap no es compatible con versiones de RN antiguas
        textAlign: 'center',
        padding: wp('5%'), // Padding relativo al ancho de la pantalla
        marginTop: hp('5%'), // Margen dinámico en la parte superior
    },
    button: {
        paddingVertical: hp('2%'), // Ajuste dinámico en la altura del botón
        paddingHorizontal: wp('20%'), // Escala dinámica para el ancho
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        borderWidth: 2,
        borderColor: '#E0DED5', // Borde blanco
        backgroundColor: '#333', // Fondo oscuro
    },
    buttonText: {
        color: '#E0DED5', // Texto blanco
        fontSize: wp('8%'), // Tamaño de fuente dinámico basado en el ancho
        fontWeight: '700',
        letterSpacing: 1, // Espaciado de letras limpio
        fontFamily: 'Times New Roman', // Fuente clásica
        textTransform: 'uppercase', // Todo en mayúsculas
    },
});
