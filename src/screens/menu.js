import React from 'react';
import profile from '../../assets/profile.jpg';
import arrow from '../../assets/arrow.png';
import search from '../../assets/search.png';
import girl from '../../assets/girl.jpg';
import disk from '../../assets/disk.jpg';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const Menu = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>
        <Image style={styles.profile} source={profile} />
      </View>
      <View style={styles.inputWrap}>
        <Image source={search} style={styles.search} />
        <Image source={arrow} style={styles.find} />
        <TextInput style={styles.input} placeholder="Search artworks" placeholderTextColor= '#adabab' />
      </View>
      <View style={styles.Wrapper}>
        <Text style={styles.subHeading}>Top</Text>
        <View style={styles.span}>
          <Text style={styles.subHeading2}>popular</Text>
          <Image source={arrow} style={styles.arrow} />
        </View>
      </View>
      <View style={styles.Wrapper}>
        <Text style={styles.subHeading}>In</Text>
        <View style={styles.span}>
          <Text style={styles.subHeading2}>1 day </Text>
          <Image source={arrow} style={styles.arrow} />
        </View>
      </View>
      <View style={styles.imageWrap}>
        <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
          <Image source={girl} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Acid Hippie</Text>
          <Text style={styles.eth}>
            10 <Text style={styles.sub}>ETH</Text>
          </Text>
        </View>
      </View>
      <View style={styles.imageWrap}>
        <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
          <Image source={disk} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>Art Galaxy</Text>
          <Text style={styles.eth}>
            24 <Text style={styles.sub}>ETH</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    borderRadius: 5,
  },
  menuText: {
    color: '#5235b1',
    fontSize: 15,
  },
  profile: {
    width: 55,
    height: 50,
    borderRadius: 5,
  },
  inputWrap: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#faf8f8',
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    position: 'relative',
    zIndex: -20,
    color: 'black'
  },
  search: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 30,
    left: 20,
  },
  find: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  subHeading: {
    fontSize: 45,
    color: 'black',
  },
  subHeading2: {
    fontSize: 45,
    color: '#5235b1',
  },
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  span: {
    borderBottomWidth: 2,
    borderBottomColor: '#9e95ba',
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  arrow: {
    width: 25,
    height: 25,
    marginLeft: 40,
    marginTop: 20,
  },
  imageWrap: {
    borderColor: '#fdfdfd',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 325,
    height: 160,
    borderRadius: 5,
  },
  eth: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 15,
  },
});
