import {React, useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Delivery() {
	const [Type , setType] = useState("NewOrder")
	const navigation = useNavigation();
	return (
		<View style={{ height: 100, zIndex:100,  }}>
			<View style={{ height: 50, marginTop: 55, width: "90%", display: "flex", flexDirection: "row", borderRadius: 12, alignSelf: "center", backgroundColor: "#FFF", borderWidth: 2, borderColor:"#f28aa5" }}>
				<TouchableOpacity onPress={() => { setType("NewOrder"); navigation.navigate("NewOrder") }} style={{ backgroundColor: Type === "NewOrder" ? "#f28aa5" : "#FFF", width: "50%", height: "100%", borderRadius: 12, display: "flex", borderWidth: 3, borderColor: "#FFF", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 20, fontWeight: "500" }}>New Order</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { setType("OrderHistory"); navigation.navigate("OrderHistory")  }} style={{ backgroundColor: Type === "OrderHistory" ? "#f28aa5" : "#FFF", width: "50%", height: "100%", borderWidth:3, borderColor:"#FFF",  borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 20, fontWeight: "500" }}>Orders History</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}


export default Delivery