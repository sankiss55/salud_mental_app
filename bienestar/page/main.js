import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Contenedores_temas from '../component/contenedores_temas';
import { ScrollView } from 'react-native-gesture-handler';
import Speech_text from '../component/speeck_text';
export default function Main({ navigation }) {
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.title}>Temas de Bienestar</Text>
                    <Text style={styles.subtitle}>Explora contenido para mejorar tu salud mental</Text>
                </View>
                <View style={styles.speechHeader}>
                   
                </View>
            </View>
            
            <ScrollView 
                style={styles.container}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
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
        backgroundColor: '#f8fafc',
    },
    header: {
        backgroundColor: '#667eea',
        paddingVertical: 25,
        paddingHorizontal: 20,
        paddingTop: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#667eea',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 12,
        position: 'relative',
    },
    headerContent: {
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        fontWeight: '400',
    },
    speechHeader: {
        position: 'relative',
       
        borderRadius: 30,
        padding: 12,
        marginLeft: "20%",
        marginTop:20,
        marginBottom:20,
    },
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingTop: 50,
        paddingBottom: 30,
    },
});