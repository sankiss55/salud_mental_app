import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  SafeAreaView,
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import speechfn from './speechfn';
import * as Speech from 'expo-speech';

const { width, height } = Dimensions.get('window');

export default function PagConcejos({ navigation, route }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Recibimos el parámetro del tema desde la navegación
  const { tema } = route?.params || { tema: 'Ansiedad' };

  // Base de datos de consejos para cada tema
  const consejosData = {
    'Ansiedad': {
      imagen: require('../images_componentes/Ansiedad.png'),
      titulo: 'Ansiedad',
      subtitulo: 'Consejos prácticos para manejar la ansiedad',
      intro: 'La ansiedad es una respuesta natural del cuerpo, pero cuando se vuelve abrumadora, estos consejos pueden ayudarte a recuperar el control.',
      consejos: [
        {
          id: 1,
          titulo: "Utilizar una pelota aplastable",
          descripcion: "Mantén una pelota antiestrés en tu bolsillo o escritorio. Apretarla puede ayudar a liberar tensión y canalizar la energía nerviosa de manera física.",
          icono: "ellipse-outline"
        },
        {
          id: 2,
          titulo: "Actívate",
          descripcion: "Ir a dar un paseo o realizar alguna actividad física ayuda a controlar la ansiedad.",
          icono: "walk-outline"
        },
        {
          id: 3,
          titulo: "Respiración diafragmática",
          descripcion: "La mejor forma de aprender a hacerlo es estando tumbado. Pon una mano en tu pecho y otra debajo de los pulmones, en el punto en el que acaban tus costillas. Al aspirar, hazlo despacio y desplazando el aire hacia abajo, intentando que el pecho no se mueva y que se te hinchen el estómago y la barriga. Retén el aire un poco y después suéltalo lentamente, hundiendo la barriga e intentando que el pecho no se mueva, tratando de mantenerte en estado de relajación. Repite la acción intentando hacerlo cada vez más despacio. Para aprender, es buena idea practicar la técnica antes de necesitar utilizarla, cuando dispongas de tiempo e intimidad.",
          icono: "medkit-outline"
        }
      ]
    },
    'Calidad del sueño': {
      imagen: require('../images_componentes/calidad_de_sueño.png'),
      titulo: 'Calidad del sueño',
      subtitulo: 'Consejos para mejorar tu descanso',
      intro: 'Un buen descanso es fundamental para tu bienestar físico y mental. Estos consejos te ayudarán a mejorar la calidad de tu sueño.',
      consejos: [
        {
          id: 1,
          titulo: "Baño con agua caliente antes de dormir",
          descripcion: "Tomar un baño caliente antes de acostarte ayuda a relajar los músculos y reduce la temperatura corporal, preparando tu cuerpo para el sueño.",
          icono: "water-outline"
        },
        {
          id: 2,
          titulo: "Dejar aparatos electrónicos",
          descripcion: "Evita el uso de dispositivos electrónicos de una a dos horas antes de dormir.",
          icono: "phone-portrait-outline"
        },
        {
          id: 3,
          titulo: "Tomar té de canela antes de dormir",
          descripcion: "El té de canela tiene propiedades relajantes y puede ayudar a reducir los niveles de azúcar en sangre, facilitando un sueño más reparador.",
          icono: "cafe-outline"
        },
        {
          id: 4,
          titulo: "Escuchar música relajante antes de dormir",
          descripcion: "La música suave y relajante puede ayudar a reducir el estrés y preparar tu mente para el descanso.",
          icono: "musical-notes-outline"
        },
        {
          id: 5,
          titulo: "Leer antes de dormir",
          descripcion: "La lectura ligera puede ayudar a relajar la mente y crear una rutina que señale a tu cuerpo que es hora de dormir.",
          icono: "book-outline"
        }
      ]
    },
    'TDAH': {
      imagen: require('../images_componentes/TDAH.png'),
      titulo: 'TDAH',
      subtitulo: 'Estrategias para niños y adultos',
      intro: 'El TDAH no es un límite, sino una forma diferente de procesar el mundo. Estos consejos están organizados para niños y adultos.',
      consejos: [
        // Niños
        {
          id: 1,
          titulo: "Programa diario",
          descripcion: "Establecer un horario estructurado con actividades regulares puede ayudar a los niños con TDAH a anticipar y prepararse para las tareas y rutinas diarias.",
          icono: "calendar-outline",
          categoria: "Niños"
        },
        {
          id: 2,
          titulo: "Listas de tareas",
          descripcion: "Utilizar listas visuales de tareas, priorizando las más importantes y dividiéndolas en pasos más pequeños, puede hacer que las tareas parezcan menos abrumadoras.",
          icono: "list-outline",
          categoria: "Niños"
        },
        {
          id: 3,
          titulo: "Atención plena",
          descripcion: "Técnicas como la meditación o el yoga pueden ayudar a los niños a mejorar su capacidad de concentración y a manejar la impulsividad.",
          icono: "leaf-outline",
          categoria: "Niños"
        },
        {
          id: 4,
          titulo: "Realizar actividad física de su agrado",
          descripcion: "Realizar ejercicio físico que disfruten ayuda a canalizar la energía y mejorar la concentración en los niños con TDAH.",
          icono: "bicycle-outline",
          categoria: "Niños"
        },
        {
          id: 5,
          titulo: "Reducción de distracciones",
          descripcion: "Minimizar las distracciones en el entorno, como ruidos o estímulos visuales, puede mejorar la capacidad de atención de los niños.",
          icono: "remove-circle-outline",
          categoria: "Niños"
        },
        // Adultos
        {
          id: 6,
          titulo: "Agendas y listas de tareas",
          descripcion: "Utilizar una agenda o un organizador diario para anotar citas, tareas y recordatorios importantes.",
          icono: "document-text-outline",
          categoria: "Adultos"
        },
        {
          id: 7,
          titulo: "Técnica Pomodoro",
          descripcion: "Dividir las tareas en intervalos de tiempo con descansos cortos para mantener la concentración y evitar el agotamiento.",
          icono: "timer-outline",
          categoria: "Adultos"
        },
        {
          id: 8,
          titulo: "Regla 1-3-5",
          descripcion: "Priorizar las tareas diarias estableciendo una tarea importante, tres intermedias y cinco menores.",
          icono: "checkmark-done-outline",
          categoria: "Adultos"
        },
        {
          id: 9,
          titulo: "Eliminar distracciones",
          descripcion: "Crear un ambiente de trabajo libre de distracciones visuales y auditivas.",
          icono: "eye-off-outline",
          categoria: "Adultos"
        },
        {
          id: 10,
          titulo: "Practicar actividad física de su agrado",
          descripcion: "Practicar ejercicio físico regular que disfrutes ayuda a mejorar la concentración y el bienestar general.",
          icono: "fitness-outline",
          categoria: "Adultos"
        }
      ]
    },
    'Estrés': {
      imagen: require('../images_componentes/estres.png'),
      titulo: 'Estrés',
      subtitulo: 'Estrategias para manejar el estrés diario',
      intro: 'El estrés es parte de la vida, pero aprender a gestionarlo adecuadamente es fundamental para tu bienestar físico y mental.',
      consejos: [
        {
          id: 1,
          titulo: "Aprende a identificar los detonadores de estrés",
          descripcion: "Tómate un tiempo para reconocer los momentos o situaciones que te provocan malestar. Haz un ejercicio de autoconocimiento y consciencia para identificar tus fuentes de estrés. Una vez que las reconozcas, será más fácil tomar medidas para que no te afecten tanto o, si es posible, evitarlas.",
          icono: "search-outline"
        },
        {
          id: 2,
          titulo: "Haz ejercicio",
          descripcion: "El ejercicio ayuda a disminuir el estrés. Incluso caminar durante 15 minutos puede ayudarte a liberar lo que no te deja estar tranquilo. Recuerda que las distracciones pueden ser solo momentáneas, pero el ejercicio regular es clave.",
          icono: "walk-outline"
        },
        {
          id: 3,
          titulo: "Establece tus límites y prioridades",
          descripcion: "Define qué puedes tolerar y qué no. Establecer límites contigo y con los demás te ayuda a evitar situaciones estresantes. Puedes escribir en una hoja tus 'límites' y lo que 'no toleras' en diferentes ámbitos de tu vida para identificarlos mejor.",
          icono: "options-outline"
        },
        {
          id: 4,
          titulo: "Di 'no'",
          descripcion: "No tienes que quedar bien con todos. Negarte de vez en cuando a ayudar a los demás es saludable. Rechazar situaciones que no quieres hacer ayuda a tu salud mental y reduce el estrés y la preocupación.",
          icono: "close-circle-outline"
        },
        {
          id: 5,
          titulo: "Ejercicios de respiración",
          descripcion: "Cuando sientas estrés, realiza ejercicios de respiración: inhala lento por la nariz, sostén por unos 5 segundos y exhala por la boca. Concéntrate en tu respiración para relajarte y reducir pensamientos negativos. Puedes cerrar los ojos y repetir la técnica 2-3 veces.",
          icono: "cloud-outline"
        }
      ]
    },
    'Regulación emocional': {
      imagen: require('../images_componentes/regulacion_emocional.png'),
      titulo: 'Regulación emocional',
      subtitulo: 'Herramientas para gestionar tus emociones',
      intro: 'Reconocer y expresar tus emociones de forma saludable fortalece tu bienestar emocional y mejora tus relaciones.',
      consejos: [
        {
          id: 1,
          titulo: "Entiende tus emociones",
          descripcion: "Tómate un tiempo para reflexionar sobre lo que sientes y por qué reaccionas de cierta manera. Una estrategia útil es llevar un diario emocional: dedica 10-20 minutos antes de dormir para repasar tu día, anotar cómo te sentiste, por qué y qué podrías mejorar. Así aprenderás a gestionar mejor tus emociones en el futuro.",
          icono: "journal-outline"
        },
        {
          id: 2,
          titulo: "Trabaja la autoaceptación",
          descripcion: "Todos podemos equivocarnos, es parte de la vida. Quiérete tal y como eres, así te sentirás menos frustrado y tendrás más paciencia para afrontar los conflictos en tus relaciones diarias.",
          icono: "happy-outline"
        },
        {
          id: 3,
          titulo: "Retírate en el momento adecuado",
          descripcion: "Está bien intentar mantener una actitud positiva, pero a veces el estímulo negativo sigue presente. Si te provocan o la situación te supera, lo mejor es retirarse y marcharse antes de que el conflicto crezca.",
          icono: "exit-outline"
        },
        {
          id: 4,
          titulo: "Adopta una rutina de higiene del sueño",
          descripcion: "Dormir bien te ayuda a equilibrar tus emociones y ser menos vulnerable al estrés y la impulsividad. Establece un horario claro para dormir, asegúrate de descansar lo suficiente y crea un ambiente cómodo y sin ruido.",
          icono: "bed-outline"
        },
        {
          id: 5,
          titulo: "Practica Mindfulness",
          descripcion: "El mindfulness te ayuda a estar en el presente, con una mentalidad no enjuiciadora y una actitud de compasión hacia ti y los demás. Mejora la concentración, reduce el estrés y aumenta la autoconciencia.",
          icono: "infinite-outline"
        }
      ]
    },
    'Habilidades sociales': {
      imagen: require('../images_componentes/habilidad_emocional.png'),
      titulo: 'Habilidades sociales',
      subtitulo: 'Mejora tus relaciones interpersonales',
      intro: 'Mejorar tus habilidades sociales te ayuda a construir relaciones más positivas y seguras, fortaleciendo tu bienestar social.',
      consejos: [
        {
          id: 1,
          titulo: "Escucha activa",
          descripcion: "Escuchar activamente es poner atención plena a lo que la otra persona expresa, comprender y responder sin juicios, desde el respeto. La comunicación no verbal es clave: mantén una postura abierta, contacto ocular y cercanía sin invadir el espacio personal.",
          icono: "ear-outline"
        },
        {
          id: 2,
          titulo: "Regulación emocional",
          descripcion: "Todos podemos tener un mal día y desbordarnos. Aprende a identificar lo que sientes, ponle nombre, localízalo en tu cuerpo y usa estrategias para canalizar la emoción (respira hondo, busca un espacio tranquilo, imagina un lugar agradable, expresa y desahógate).",
          icono: "pulse-outline"
        },
        {
          id: 3,
          titulo: "Técnica del sándwich",
          descripcion: "Cuando debas dar una crítica, hazlo con inteligencia emocional: inicia validando, expón el aspecto negativo y cierra con un aliento o motivación. Así mantienes la asertividad y cuidas la relación.",
          icono: "layers-outline"
        },
        {
          id: 4,
          titulo: "Resolución de conflictos",
          descripcion: "Los desacuerdos son normales y necesarios para crecer. Aprende a gestionarlos de forma constructiva, expresando tus puntos de vista y escuchando los de los demás. El conflicto bien manejado es motor de cambio.",
          icono: "hand-left-outline"
        },
        {
          id: 5,
          titulo: "Seguridad en ti mismo/a",
          descripcion: "Los miedos sociales afectan cómo nos relacionamos. Afróntalos poco a poco con pequeños retos (saludar, proponer un plan, participar en actividades grupales) para fortalecer tu confianza y seguridad.",
          icono: "shield-checkmark-outline"
        }
      ]
    }
  };

  // Obtener los datos del tema actual
  const temaData = consejosData[tema] || consejosData['Ansiedad'];
  const consejos = temaData.consejos;

  const handleAudioPress = async () => {
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const textoCompleto = `Consejos para ${temaData.titulo}: ` + 
        consejos.map(consejo => `${consejo.titulo}. ${consejo.descripcion}`).join('. ');
      setIsPlaying(!await speechfn("es-es-x-eef-local", `Consejos para ${temaData.titulo}`, textoCompleto, ""));
    }
  };

  const handleBackPress = () => {
    if (navigation) {
        Speech.stop();
      navigation.goBack();

    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color="#667eea" />
        </TouchableOpacity>
        
        <View style={styles.headerContent}>
          <Image 
            source={temaData.imagen} 
            style={styles.headerImage}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>{temaData.titulo}</Text>
          <Text style={styles.headerSubtitle}>{temaData.subtitulo}</Text>
        </View>

        <TouchableOpacity style={styles.audioButton} onPress={handleAudioPress}>
          <Icon 
            name={isPlaying ? "pause" : "volume-high"} 
            size={20} 
            color="#667eea" 
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            {temaData.intro}
          </Text>
        </View>

        {/* Sección especial para TDAH con categorías */}
        {tema === 'TDAH' ? (
          <>
            {/* Consejos para Niños */}
            <View style={styles.categoriaContainer}>
              <Text style={styles.categoriaTitle}>👶 Consejos para Niños</Text>
            </View>
            {consejos.filter(consejo => consejo.categoria === 'Niños').map((consejo, index) => (
              <View key={consejo.id} style={styles.consejoContainer}>
                <View style={styles.consejoHeader}>
                  <View style={styles.numeroContainer}>
                    <Text style={styles.numeroText}>{index + 1}</Text>
                  </View>
                  <Icon name={consejo.icono} size={24} color="#667eea" style={styles.emojiIcon} />
                </View>
                
                <View style={styles.consejoContent}>
                  <Text style={styles.consejoTitulo}>{consejo.titulo}</Text>
                  <Text style={styles.consejoDescripcion}>{consejo.descripcion}</Text>
                </View>
              </View>
            ))}

            {/* Consejos para Adultos */}
            <View style={styles.categoriaContainer}>
              <Text style={styles.categoriaTitle}>👨‍💼 Consejos para Adultos</Text>
            </View>
            {consejos.filter(consejo => consejo.categoria === 'Adultos').map((consejo, index) => (
              <View key={consejo.id} style={styles.consejoContainer}>
                <View style={styles.consejoHeader}>
                  <View style={styles.numeroContainer}>
                    <Text style={styles.numeroText}>{index + 1}</Text>
                  </View>
                  <Icon name={consejo.icono} size={24} color="#667eea" style={styles.emojiIcon} />
                </View>
                
                <View style={styles.consejoContent}>
                  <Text style={styles.consejoTitulo}>{consejo.titulo}</Text>
                  <Text style={styles.consejoDescripcion}>{consejo.descripcion}</Text>
                </View>
              </View>
            ))}
          </>
        ) : (
          /* Consejos normales para otros temas */
          consejos.map((consejo, index) => (
            <View key={consejo.id} style={styles.consejoContainer}>
              <View style={styles.consejoHeader}>
                <View style={styles.numeroContainer}>
                  <Text style={styles.numeroText}>{index + 1}</Text>
                </View>
                <Icon name={consejo.icono} size={24} color="#667eea" style={styles.emojiIcon} />
              </View>
              
              <View style={styles.consejoContent}>
                <Text style={styles.consejoTitulo}>{consejo.titulo}</Text>
                <Text style={styles.consejoDescripcion}>{consejo.descripcion}</Text>
              </View>
            </View>
          ))
        )}

        <View style={styles.footerMessage}>
          <Icon name="heart" size={20} color="#667eea" style={styles.heartIcon} />
          <Text style={styles.footerText}>
            Recuerda: está bien pedir ayuda cuando la necesites. Tu bienestar es importante.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#667eea',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 40,
  },
  headerImage: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontWeight: '400',
  },
  audioButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  introContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#667eea',
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  introText: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  consejoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.1)',
  },
  consejoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  numeroContainer: {
    backgroundColor: '#667eea',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  numeroText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emojiIcon: {
    fontSize: 24,
  },
  consejoContent: {
    flex: 1,
  },
  consejoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 10,
    lineHeight: 24,
  },
  consejoDescripcion: {
    fontSize: 15,
    color: '#4a5568',
    lineHeight: 22,
  },
  footerMessage: {
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  heartIcon: {
    marginRight: 10,
  },
  footerText: {
    flex: 1,
    fontSize: 14,
    color: '#667eea',
    fontWeight: '500',
    lineHeight: 20,
  },
  categoriaContainer: {
    backgroundColor: '#667eea',
    borderRadius: 15,
    padding: 15,
    marginVertical: 15,
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  categoriaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
