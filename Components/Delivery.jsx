import {React, useState} from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useOrderTypeState } from "../Zustand/States"

function Delivery() {
	const orderType = useOrderTypeState((state) => state.orderType)

	return (
		<View style={{ zIndex: 100, flexDirection: "row", justifyContent: "space-around", paddingBottom: 10, marginBottom:16, paddingTop: 58, width: "100%", alignItems: "center", alignSelf: "center", backgroundColor: "#f28aa5" }}>
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={useOrderTypeState((state) => state.toDelivery)} style={{ borderRadius: "50%", width: 50, height: 50, borderWidth: 2, padding: 8, borderColor: orderType === "Delivery" ? "#FCEDCB" : "#626567",  }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/delivery.png")}></Image>
				</TouchableOpacity>
				<Text style={{ color: orderType === "Delivery" ? "#FCEDCB" : "#626567", }}>Delivery</Text>
			</View>
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={useOrderTypeState((state) => state.toPickUp)} style={{ borderRadius: "50%", width: 50, height: 50, borderWidth: 2, padding: 8, borderColor: orderType === "Pick Up" ? "#FCEDCB" : "#626567", }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/delivery-man.png")}></Image>
				</TouchableOpacity>
				<Text tyle={{ color: orderType === "Pick Up" ? "#FCEDCB" : "#626567", }}>PickUp</Text>
			</View>
			<View style={{  alignItems:"center" }}>
				<TouchableOpacity onPress={useOrderTypeState((state) => state.toDineIn)} style={{ borderRadius: "50%", width: 50, height: 50, borderWidth: 2, padding: 8, borderColor: orderType === "Dine In" ? "#FCEDCB" : "#626567", }}>
					<Image style={{ width: "100%", height: "100%", objectFit: "cover" }} source={require("../assets/dinning-table.png")}></Image>
				</TouchableOpacity>
				<Text style={{ color: orderType === "Dine In" ? "#FCEDCB" : "#626567", }} >Dine in</Text>
			</View>
			
			

		</View>
	)
}


export default Delivery