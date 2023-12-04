import {React, useState} from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function Delivery() {
	const [Type , setType] = useState("Delivery")
	return (
		<View style={{ backgroundColor: "#f28aa5", height: 125, zIndex:100, borderBottomEndRadius:30,borderBottomStartRadius:30 }}>
			<View style={{ backgroundColor: "#FCEDCB", height: 50, marginTop: 60, width: "90%", display: "flex", flexDirection: "row", borderRadius: 12, alignSelf:"center" }}>
				<TouchableOpacity onPress={() => { setType("Delivery") }} style={{ backgroundColor: Type === "Delivery" ? "#f28aa5" : "#FCEDCB", width: "50%", height: "100%", borderWidth: 3, borderColor:"#FCEDCB", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 22, fontWeight: "500" }}>Delivery</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { setType("PickUp") }} style={{ backgroundColor: Type === "PickUp" ? "#f28aa5" : "#FCEDCB", width: "50%", height: "100%", borderWidth: 3, borderColor: "#FCEDCB", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>Pick Up</Text>
					<Text style={{ fontSize: 14, fontWeight: "400" }}>Mecca, shawqiah</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}


export default Delivery