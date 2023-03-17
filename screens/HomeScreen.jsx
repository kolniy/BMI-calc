import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import Modal from "react-native-modal";
import Constants from "expo-constants"
import calculateBmi from "../utitlities/calculateBmi";
import determineBmiDescription from "../utitlities/determineBmiDescription"

const HomeScreen = () => {

  const [ weight, setWeight ] = useState("")
  const [ height, setHeight ] = useState("")
  const [ bmi, setBmi ] = useState("")
  const [ description, setDescription ] = useState("")

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const handleCalculateBMIButtonClick = () => {
    const bmiValue = calculateBmi(weight, height)
    const descriptionData = determineBmiDescription(bmiValue)
    setBmi(bmiValue)
    setDescription(descriptionData)
    handleModal()
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BMI calculator</Text>
      </View>
      <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={(text) => setWeight(text)}
              placeholder="Weight in kg"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.input}
              value={height}
              onChangeText={(text) => setHeight(text)}
              placeholder="Height in cm"
              keyboardType="numeric"
            />
            <TouchableOpacity 
            style={styles.button}
            onPress={handleCalculateBMIButtonClick}
            >
              <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
        </View>
    </View>
    <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor:"#ffffff" }}>
        <View style={styles.resultView}>
          <Text style={styles.result}>{bmi}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={handleModal}
            >
              <Text style={styles.buttonText}>Close Modal</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  title: {
    backgroundColor: "#f8f4f4",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 55,
    margin: 15,
    borderRadius: 25,
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#f8f4f4"
  },
  button: {
    height: 45,
    margin: 15,
    borderWidth: 0.34,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0073',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  resultView: {
    margin: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    fontSize: 30,
    color: '#ff0073',
    fontWeight: 'bold',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
})
