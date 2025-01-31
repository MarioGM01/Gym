import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Video } from 'expo-av'; // Asegúrate de que 'expo-av' esté instalado
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Librería para tamaños dinámicos
import Ejercices from './Exercises';

export default function MuscleExercise() {
    const route = useRoute();
    const { exercise } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Título del ejercicio */}
                <Text style={styles.title}>{exercise.name}</Text>

                {/* Reproductor de video */}
                <View style={styles.boxVideo}>
                    <Video
                        source={exercise.video} // Ruta del video local
                        style={styles.videoPlayer}
                        controls={true}
                        resizeMode="cover" // Ajusta el video para cubrir completamente el área
                        shouldPlay={true} // Reproduce el video automáticamente
                        isLooping={true} // Video en bucle
                    />
                </View>

                {/* Detalles del ejercicio */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.description}>{exercise.tips}</Text>
                    <Text style={styles.details}>Repeticiones: <Text style={styles.detailsValue}>{exercise.reps}</Text></Text>
                    <Text style={styles.details}>Series: <Text style={styles.detailsValue}>{exercise.sets}</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        margin: wp('4%'), // Margen dinámico
        padding: wp('5%'), // Padding dinámico
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E0DED5',
        backgroundColor: '#333',
    },
    title: {
        color: '#E0DED5',
        fontSize: wp('8%'), // Tamaño dinámico del texto del título
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: hp('3%'), // Espaciado inferior dinámico
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    boxVideo: {
        alignItems: 'center',
    },
    videoPlayer: {
        width: wp('70%'), // Ocupa el 90% del ancho disponible
        height: hp('30%'), // Ajuste dinámico para la altura del video
        borderRadius: 15, // Bordes redondeados
    },
    description: {
        color: '#E0DED5',
        fontSize: wp('4.5%'), // Tamaño dinámico para la descripción
        marginBottom: hp('2%'), // Espaciado dinámico debajo de la descripción
    },
    detailsContainer: {
        marginTop: hp('3%'),
        paddingHorizontal: wp('4%'), // Padding horizontal dinámico
    },
    details: {
        color: '#E0DED5',
        fontSize: wp('4.5%'), // Tamaño dinámico para los detalles
        marginBottom: hp('1.5%'), // Espaciado dinámico entre cada detalle
    },
    detailsValue: {
        fontWeight: 'bold',
        color: '#E0DED5',
    },
});
