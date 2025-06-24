import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';

export default function Contenedores_temas({ imagen, texto_principal, texto_secundario }) {
  return (
    <TouchableOpacity style={styles.container}>
       <Image
          style={styles.image}
          source={imagen}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.textoPrincipal}>{texto_principal}</Text>
          <Text style={styles.textoSecundario}>{texto_secundario}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(102, 126, 234, 0.1)',
    minHeight: 140,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 20,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 15,
    padding: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 8,
    lineHeight: 24,
  },
  textoSecundario: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
});