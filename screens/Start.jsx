import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';  // Librería para pantallas responsivas

export function Start({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            {/* Cambiar el color y estilo de la barra de estado */}

            <Text style={styles.formattedText} allowFontScaling={false}>
                G Y M
            </Text>

            <View style={styles.ViewImagesStart}>
                <Image
                    source={require('../src/start/imgStart3.jpg')} // Asegúrate de que la ruta sea correcta
                    style={styles.image}
                />
            </View>

            {/* Botones */}
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Musculos')}>
                    <Text style={styles.buttonText} allowFontScaling={false}>
                        Empezar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={() => navigation.navigate('Quienes Somos')}>
                    <Text style={styles.buttonText} allowFontScaling={false}>
                    Acerca de
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Fondo oscuro
        justifyContent: 'center', // Asegura que los elementos se mantengan centrados
        paddingBottom: hp('3%'), // Añadir espacio en la parte inferior, con porcentaje
    },
    ViewImagesStart: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('5%'),  // Ajuste dinámico al tamaño de pantalla
    },
    image: {
        width: wp('90%'), // El 90% del ancho de la pantalla
        height: hp('40%'), // El 40% del alto de la pantalla
        borderRadius: 15,
    },
    buttons: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'column',
        gap: 15,
        marginTop: hp('4%'), // Ajuste para mantener la distancia dinámica
    },
    button: {
        paddingVertical: hp('2%'),  // Ajuste del padding de forma proporcional
        paddingHorizontal: wp('10%'),  // Ajuste del padding de forma proporcional
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
        fontSize: wp('9%'),  // Utilizar porcentaje para el tamaño de fuente
        fontWeight: '900',
        letterSpacing: 1, // Espaciado de letras limpio
        fontFamily: 'Times New Roman', // Fuente clásica (asegúrate de que esté disponible o personalizada)
        textTransform: 'uppercase', // Todo en mayúsculas
    },
    formattedText: {
        color: '#E0DED5', // Texto blanco
        fontSize: wp('20%'),   // Tamaño de fuente dinámico basado en el ancho de la pantalla
        fontWeight: '900', // Pesado para un estilo imponente
        textAlign: 'center', // Centrado
        letterSpacing: 4, // Espaciado de letras amplio
        fontFamily: 'Times New Roman', // Fuente clásica (asegúrate de que esté disponible o personalizada)
        textTransform: 'uppercase', // Todo en mayúsculas
    },
});
