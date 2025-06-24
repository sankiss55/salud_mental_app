import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilos/styles';

export default function Paginas_informativas({ imagen, texto_principal, texto_secundario, concejo, emoji, pagina_sigiente, pagina_anterior,ultima_pagina}) {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.logo} 
                        source={imagen}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{texto_principal}</Text>

                    <Text style={styles.description}>{texto_secundario}</Text>

                    <View style={styles.highlightContainer}>
                        <View style={styles.breatheIcon}>
                            <Text style={styles.breatheEmoji}>{emoji}</Text>
                        </View>
                        <Text style={styles.highlight}>{concejo}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.navigationContainer}>
                {
                        pagina_anterior==true && (
                        <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    
                    <Text style={styles.backButtonText}>← Regresar</Text>
                </TouchableOpacity>

                        )
                    }
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={() =>{
                        if (ultima_pagina) {
navigation.reset({
    index: 0,
    routes: [{ name: pagina_sigiente }],
  });
  } else {
    navigation.navigate(pagina_sigiente);
  }

                    } }
                >
                    <Text style={styles.nextButtonText}>Siguiente →</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
