import * as speech from 'expo-speech';

const speechfn = (voz, texto_principal, texto_secundario, concejo) => {
  return new Promise((resolve) => {
    speech.speak(texto_principal, {
      voice: voz,
      onDone: () => {
        speech.speak(texto_secundario + concejo, {
          voice: voz,
          onDone: () => {
            resolve(true);
          }
        });
      }
    });
  });
};

export default speechfn;
