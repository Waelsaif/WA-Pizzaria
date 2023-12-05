import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';
import { useOrderItems } from "../Zustand/States"


function Tabs() {
	const navigation = useNavigation();
	const numItems = useOrderItems((state) => state.numItems)
	return (
		<View style={{ position: 'absolute', bottom: 0, height: 80, width: "100%", backgroundColor: "#f28aa5", borderTopLeftRadius: 25, borderTopRightRadius: 25, zIndex: 100 }}>
			<View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 15, height: "100%" }}>
				<TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: "center" }} >
					<Icon name='home-outline' style={{ fontSize: 28, color: "#FCEDCB" }} />
					<Text style={{ color: "#FCEDCB" }} >Home</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Orders')} style={{ alignItems: "center" }}>
					{numItems > 0 && <View style={{ position: "absolute", height: 18, width: 18, borderRadius: "50%", backgroundColor: "#FCEDCB", right: -2, top: -5, justifyContent:"center", alignItems:"center" }}>
						<Text>{numItems}</Text>
					</View>}
					<Icon name='cart-outline' style={{ fontSize: 28, color: "#FCEDCB" }} />
					<Text style={{ color: "#FCEDCB" }} >Orders</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ alignItems: "center" }}>
					<Icon name='dots-horizontal' style={{ fontSize: 28, color: "#FCEDCB" }} />
					<Text style={{ color: "#FCEDCB" }} >Settings</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Tabs