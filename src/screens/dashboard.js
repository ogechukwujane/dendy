import React from 'react';
import glass from '../../assets/glass.png';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const DashBoard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrap}>
          <Image source={glass} style={styles.image} />
          <Text style={styles.text}>Congratulations!</Text>
          <Text style={styles.text}>Your order is accepted</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Track your order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  contentWrap: {
    marginVertical: 220,
  },
  image: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
