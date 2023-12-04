import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';

import {View, TouchableOpacity, Text } from 'react-native';

function Tabs() {
const navigation = useNavigation();
  return (
	  <View style={{ position: 'absolute', bottom: 0, height: 85, width: "100%", backgroundColor: "#f28aa5", borderTopLeftRadius: 30, borderTopRightRadius: 30, zIndex: 100 }}>
		  <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15, height: "100%" }}>
			  <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: "center" }} >
				  <Icon name='home-outline' style={{ fontSize: 36, color: "#FCEDCB" }} />
				  <Text style={{ color:"#FCEDCB"}} >Home</Text>
			  </TouchableOpacity>
		  <TouchableOpacity onPress={() => navigation.navigate('Orders')} style={{ alignItems: "center" }}>
				  <Icon name='cart-outline' style={{ fontSize: 36, color:"#FCEDCB" }} />
				  <Text style={{ color: "#FCEDCB"}} >Orders</Text>
			  </TouchableOpacity>
			  <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ alignItems: "center" }}>
				  <Icon name='dots-horizontal' style={{ fontSize: 36, color:"#FCEDCB"}} />
				  <Text style={{ color:"#FCEDCB" }} >Settings</Text>

			  </TouchableOpacity>
		  </View>
	  </View>
  )
}

export default Tabs