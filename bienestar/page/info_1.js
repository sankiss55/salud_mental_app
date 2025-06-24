import React from 'react';
import styles from '../estilos/styles';
import { TouchableOpacity, View, Image, Text, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import Paginas_informativas from '../component/paginas_informativas';

export default function Info_1({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#f8f9ff', '#e8f4f8']}
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '33%' }]} />
                        </View>
                        <Text style={styles.progressText}>1 de 3</Text>
                    </View>
                </View>
              <Paginas_informativas
      imagen={require('../images/apoyo_tip1.png')}
      texto_principal="Tu bienestar importa"
      texto_secundario="Cuidar tu salud mental es el primer paso para cuidar de todo lo demás."
      concejo="Respira profundo. Estás en un espacio seguro."
      emoji="🌸"
      pagina_sigiente={'Info_2'}
      pagina_anterior={false}
      ultima_pagina={false}
    />
            </LinearGradient>
        </SafeAreaView>
    );
}

