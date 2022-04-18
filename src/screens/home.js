import React from 'react';
import bg from '../../assets/bg.jpg';
import man from '../../assets/man.png';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrap}>
          <Image style={styles.man} source={man} />
          <Image style={styles.image} source={bg} />
        </View>
        <View style={styles.body}>
          <Text style={styles.heading}>Dendy</Text>
          <Text style={styles.text}>
            Buy, sell and collect NFTs on our Market
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>Let's go</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrap: {
    position: 'relative',
  },
  image: {
    height: 520,
    zIndex: -20,
  },
  man: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.8,
    height: 400,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: 'white',
    color: 'black',
  },
  heading: {
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 50,
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
