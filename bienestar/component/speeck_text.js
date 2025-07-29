
import  { useEffect } from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../estilos/styles';
import * as speech from 'expo-speech';
import DropDownPicker from 'react-native-dropdown-picker';
import speechfn from './speechfn';
export default function Speech_text({texto_principal, texto_secundario, concejo}) {
      const [open, setOpen] = useState(false);
      const [valor, setValor] = useState(null);
      const [texto_de_voz, setTexto_de_voz] = useState("Selecciona la voz que deseas");
      const [cambio_stilos, setCambio_stilos] = useState(false);
      const [reproducir, setReproducir] = useState(false);
      const [items, setItems] = useState([
        { label: 'Hombre', value: 'es-es-x-eef-local' },
        { label: 'Mujer', value: 'es-ES-language' },
      ]);
      
  // Función para guardar datos en AsyncStorage
  const guardarDatos = async (voz, textoVoz) => {
    try {
      await AsyncStorage.setItem('voz_seleccionada', voz);
      await AsyncStorage.setItem('texto_voz', textoVoz);
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  };

  // Función para cargar datos desde AsyncStorage
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

  // useEffect para cargar datos al montar el componente
  useEffect(() => {
    cargarDatos();
  }, []);
  
    return(
<>
     <TouchableOpacity style={styles.speechButton} onPress={()=>{
setCambio_stilos(!cambio_stilos);
              }} >
                
                <Icon name="volume-high" size={24} color="black" />
                
                  <Text>
                    {texto_de_voz}
                       </Text>
                       {
valor!=null && (
                       
                         <TouchableOpacity style={styles.playButton} onPress={ async ()=>{
                            reproducir==false?setReproducir(true): setReproducir(false);
                            if (reproducir==false) {
                               
                              setReproducir(!await speechfn(valor, texto_principal, texto_secundario, concejo));
                            } else {
                              speech.stop();
                            }
                          
              }}>
                
                   <Icon name={reproducir==false?"play":"pause" } size={20} color="black" />
               </TouchableOpacity>
)
                       }
              


                   <Icon name= {cambio_stilos===false ? "chevron-down": "chevron-up"} size={16} color="black" />
              </TouchableOpacity>
               <DropDownPicker
  style={cambio_stilos ? styles.dropdown2 : styles.dropdown}
  dropDownContainerStyle={cambio_stilos ? styles.dropDownContainer2 : styles.dropDownContainer}
  listItemLabelStyle={cambio_stilos ? styles.listItemLabel2 : styles.listItemLabel}
  listItemContainerStyle={cambio_stilos ? styles.listItemContainer2 : styles.listItemContainer}
  open={open}
  value={valor}
  items={items}
  setOpen={setOpen}
  setValue={(valor_fn)=>{
     const nuevoValor = valor_fn(valor);
     const nuevoTextoVoz = nuevoValor === 'es-es-x-eef-local' ? 'Hombre' : 'Mujer';
     
     setValor(nuevoValor);
    setCambio_stilos(!cambio_stilos);
    setTexto_de_voz(nuevoTextoVoz);
    
    guardarDatos(nuevoValor, nuevoTextoVoz);
    
    console.log(nuevoValor);
              }}
  setItems={setItems}
  placeholder="Selecciona la voz que deseas"
/>

</>
    )
}