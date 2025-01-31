import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';  // Librería para pantallas responsivas
import img1 from '../src/about/img1.jpg';
import img2 from '../src/about/img2.jpg';

export function AboutUs() {
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        // Array de imágenes
        const images = [img1, img2];

        // Elegir una imagen aleatoria
        const randomImage = images[Math.floor(Math.random() * images.length)];

        // Establecer la imagen aleatoria como fondo
        setBackgroundImage(randomImage);
    }, []);

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />

            <Text style={styles.description} allowFontScaling={false}>
                Somos una aplicación dedicada a ayudarte a alcanzar tus metas físicas y mentales.
                Inspirados en la filosofía estoica y en la disciplina romana, creemos en el esfuerzo
                diario y la constancia como base para el éxito.
            </Text>
            <Text style={styles.description} allowFontScaling={false}>
                Ofrecemos rutinas personalizadas, herramientas de seguimiento y contenido motivacional
                para fortalecer tu cuerpo y tu mente. ¡Únete a nosotros y construyamos la mejor versión de ti!
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp('5%'),  // Ajuste dinámico con porcentaje
        paddingTop: hp('5%'),  // Ajuste dinámico con porcentaje
    },
    title: {
        fontSize: wp('7%'),  // Ajuste de tamaño de fuente con porcentaje del ancho
        fontWeight: 'bold',
        marginBottom: hp('3%'), // Margen dinámico con porcentaje
        color: '#E0DED5', // Blanco para el texto sobre fondo oscuro
        textAlign: 'center',
    },
    description: {
        fontSize: wp('4.5%'),  // Ajuste de tamaño de fuente con porcentaje del ancho
        lineHeight: hp('3%'),  // Ajuste de line-height con porcentaje del alto
        color: '#E0DED5', // Blanco para el texto sobre fondo oscuro
        textAlign: 'center',
        marginBottom: hp('2%'), // Margen dinámico entre los párrafos
    },
});
