import { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../estilos/styles';
import Speech_text from './speeck_text';
import * as speech from 'expo-speech';
export default function Paginas_informativas({ imagen, texto_principal, texto_secundario, concejo, emoji, pagina_sigiente, pagina_anterior,ultima_pagina}) {
    const navigation = useNavigation();
    const [valor, setValor] = useState(null);
    const [texto_de_voz, setTexto_de_voz] = useState("Selecciona la voz que deseas");

  const cargarDatos = async () => {
    try {
      const vozGuardada = await AsyncStorage.getItem('voz_seleccionada');
      const textoVozGuardado = await AsyncStorage.getItem('texto_voz');
      
      if (vozGuardada !== null && textoVozGuardado !== null) {
        setValor(vozGuardada);
        setTexto_de_voz(textoVozGuardado);
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

    return (
        <>
            <View style={styles.content}>
         <Speech_text texto_principal={texto_principal} texto_secundario={texto_secundario} concejo={concejo} />
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
                    onPress={() => {navigation.goBack(); speech.stop()}}
                >
                    
                    <Text style={styles.backButtonText}>← Regresar</Text>
                </TouchableOpacity>

                        )
                    }
                <TouchableOpacity 
                    style={styles.nextButton}
                    onPress={() =>{
                         speech.stop();
                         
                        if (ultima_pagina) {
navigation.reset({
    index: 0,
    routes: [{ name: pagina_sigiente }],
  });
  } else {
    navigation.navigate(pagina_sigiente);
}
  }

                     }
                >
                    <Text style={styles.nextButtonText}>Siguiente →</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}
