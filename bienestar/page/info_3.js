import React from 'react';
import styles from '../estilos/styles';
import { TouchableOpacity, View, Image, Text, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import Paginas_informativas from '../component/paginas_informativas';

export default function Info_3() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#f8f9ff', '#e8f4f8']}
                style={styles.container}
            >
                <View style={styles.header}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '100%' }]} />
                        </View>
                        <Text style={styles.progressText}>3 de 3</Text>
                    </View>
                </View>
              <Paginas_informativas
      imagen={require('../images/apoyo_tip3.png')}
      texto_principal="Estás dando un paso valiente"
      texto_secundario="Buscar apoyo y cuidarte no te hace débil, te hace humano."
      concejo="Bienvenido al camino hacia una mente en equilibrio."
      emoji="💜"
      pagina_sigiente={'main'}
      pagina_anterior={true}
      ultima_pagina={true} 
    />
            </LinearGradient>
        </SafeAreaView>
    );
}

