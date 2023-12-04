import {React, useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Delivery() {
	const [Type , setType] = useState("NewOrder")
	const navigation = useNavigation();
	return (
		<View style={{ backgroundColor: "#f28aa5", height: 125, zIndex:100, borderBottomEndRadius:30,borderBottomStartRadius:30 }}>
			<View style={{ backgroundColor: "#FCEDCB", height: 50, marginTop: 60, width: "90%", display: "flex", flexDirection: "row", borderRadius: 12, alignSelf:"center" }}>
				<TouchableOpacity onPress={() => { setType("NewOrder"); navigation.navigate("NewOrder") }} style={{ backgroundColor: Type === "NewOrder" ? "#f28aa5" : "#FCEDCB", width: "50%", height: "100%", borderWidth: 3, borderColor:"#FCEDCB", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 22, fontWeight: "500" }}>New Order</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { setType("OrderHistory"); navigation.navigate("OrderHistory")  }} style={{ backgroundColor: Type === "OrderHistory" ? "#f28aa5" : "#FCEDCB", width: "50%", height: "100%", borderWidth: 3, borderColor: "#FCEDCB", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 22, fontWeight: "500" }}>Orders History</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}


export default Delivery