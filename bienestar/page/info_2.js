import React from 'react';
import styles from '../estilos/styles';
import { TouchableOpacity, View, Image, Text, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import Paginas_informativas from '../component/paginas_informativas';

export default function Info_2() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#f8f9ff', '#e8f4f8']}
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '66%' }]} />
                        </View>
                        <Text style={styles.progressText}>2 de 3</Text>
                    </View>
                </View>
              <Paginas_informativas
      imagen={require('../images/apoyo_tip2.png')}
      texto_principal="Haz una pausa, cuida tu mente"
      texto_secundario="La salud mental no es un lujo, es una prioridad."
      concejo="Hoy es un buen día para empezar a escucharte."
      emoji="🌼"
      pagina_sigiente={'Info_3'}
      pagina_anterior={true}
      ultima_pagina={false}
    />
            </LinearGradient>
        </SafeAreaView>
    );
}

