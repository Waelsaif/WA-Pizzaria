import {React, useState} from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';

function Delivery() {
	const [Type , setType] = useState("Delivery")
	return (
		<View style={{ zIndex:100, flexDirection:"row", justifyContent:"space-around", marginBottom:16, marginTop:60, width:"90%", alignItems:"center", alignSelf:"center"}}>
			{/* <View style={{ backgroundColor: "#e2e2e2", borderWidth: 3, borderColor:"#f28aa5" , height: 55, marginTop: 55, width: "90%", display: "flex", flexDirection: "row", borderRadius: "8%", alignSelf:"center" }}>
				<TouchableOpacity onPress={() => { setType("Delivery") }} style={{ backgroundColor: Type === "Delivery" ? "#626567" : "#e2e2e2", width: "50%", height: "100%", borderWidth: 2, borderColor:"#e2e2e2", borderRadius: "8%", display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 22, fontWeight: "500" }}>Delivery</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { setType("PickUp") }} style={{ backgroundColor: Type === "PickUp" ? "#f28aa5" : "#e2e2e2", width: "50%", height: "100%", borderWidth: 2, borderColor: "#e2e2e2", borderRadius: "8%", display: "flex", alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 18, fontWeight: "500" }}>Pick Up</Text>
					<Text style={{ fontSize: 14, fontWeight: "400" }}>Mecca, shawqiah</Text>
				</TouchableOpacity>
			</View> */}
			
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={() => { setType("Delivery") }} style={{ borderRadius: "50%", width: 60, height: 60, borderWidth: 2, padding: 6, borderColor: Type === "Delivery" ? "#A93226" : "#626567",  }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/delivery.png")}></Image>
				</TouchableOpacity>
				<Text>Delivery</Text>
			</View>
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={() => { setType("PickUp") }} style={{ borderRadius: "50%", width: 60, height: 60, borderWidth: 2, padding: 6, borderColor: Type === "PickUp" ? "#A93226" : "#626567", }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/delivery-man.png")}></Image>
				</TouchableOpacity>
				<Text>PickUp</Text>
			</View>
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={() => { setType("DineIn") }} style={{ borderRadius: "50%", width: 60, height: 60, borderWidth: 2, padding: 6, borderColor: Type === "DineIn" ? "#A93226" : "#626567", }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/dinning-table.png")}></Image>
				</TouchableOpacity>
				<Text >Dine in</Text>
			</View>
			
			

		</View>
	)
}


export default Delivery