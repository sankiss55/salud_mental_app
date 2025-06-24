import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Contenedores_temas from '../component/contenedores_temas';
import { ScrollView } from 'react-native-gesture-handler';

export default function Main() {
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.title}>Temas de Bienestar</Text>
            </View>
            
            <ScrollView style={styles.container}>
                <Contenedores_temas imagen={require('../images_componentes/estres.png')} texto_principal={'Estrés'} texto_secundario={'Identificar las causas del estrés y aprender a gestionarlo es clave para tu bienestar diario.'}/>
                <Contenedores_temas imagen={require('../images_componentes/calidad_de_sueño.png')} texto_principal={'Calidad del sueño'} texto_secundario={' Identificar las causas del estrés y aprender a gestionarlo es clave para tu bienestar diario.'}/>
                <Contenedores_temas imagen={require('../images_componentes/Ansiedad.png')} texto_principal={'Ansiedad'} texto_secundario={'Un buen descanso ayuda a regular tus emociones, tu energía y tu concentración.'}/>
                <Contenedores_temas imagen={require('../images_componentes/TDAH.png')} texto_principal={'TDAH'} texto_secundario={'El TDAH no es un límite, sino una forma diferente de procesar el mundo. Con apoyo, puedes lograr mucho.'}/>
                <Contenedores_temas imagen={require('../images_componentes/regulacion_emocional.png')} texto_principal={'Regulación emocional'} texto_secundario={'Reconocer y expresar tus emociones de forma saludable fortalece tu bienestar emocional.'}/>
                <Contenedores_temas imagen={require('../images_componentes/habilidad_emocional.png')} texto_principal={'Habilidades sociales'} texto_secundario={'Mejorar tus habilidades sociales te ayuda a construir relaciones más positivas y seguras.'}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
        paddingTop: 15,
    },
});