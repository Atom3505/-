import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert, TextInput, Modal, View, Image } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleTextPress = () => console.log('Text pressed');
  const handleButtonPress = () => Alert.alert("itProger", "Main message", [
    { text: "Да", onPress: () => console.log('Yes button pressed') },
    { text: "Отмена", onPress: () => console.log('No button pressed') },
  ]);

  const handleButtonPress2 = () => setModalVisible(true);

  const handleModalClose = () => {
    setModalVisible(false);
    console.log('Modal closed with input:', inputText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.Text} onPress={handleTextPress}>
        Автор {'\n'} Алексей
      </Text>
      <Button title={'Нажми на меня'} color="red" onPress={handleButtonPress} />
      <Button title={'Кнопка 2'} color="black" onPress={handleButtonPress2} />


      
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <Text>Main message</Text>
          <TextInput
            placeholder="Введите текст"
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <Button title="Да" onPress={handleModalClose} />
          <Button title="Отмена" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Image source={{
        width: 200,
        height: 150,
        uri: "https://i.ytimg.com/vi/NaT-bKi3PH0/maxresdefault.jpg"
      }}/>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


