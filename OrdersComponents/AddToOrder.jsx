import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useOrderItems } from "../Zustand/States"

function AddToOrder({ name, price, img, desc }) {
	const { addItem } = useOrderItems();
	const handleAddItem = () => {
		addItem({ name, price, img, desc, numberOfItems: 1 });
	};
	return (
		<View style={{ width: 130, marginRight: 12, backgroundColor: "#FFF", borderRadius: 6, borderWidth: 3, borderColor: "#e2e2e2", justifyContent: "center" }}>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 5 }}>
				<Text style={{ fontSize: 12, }}>{name}</Text>
			</View>
			<Image style={{ width: "80%", height: 80, marginBottom: 10, objectFit: "cover", borderRadius: 6, alignSelf: "center", }} source={{ uri: img }}></Image>
			<TouchableOpacity onPress={handleAddItem} style={{ flexDirection: "row", paddingHorizontal:6, justifyContent: "space-between", alignItems: "center", backgroundColor: "#f28aa5" }}>
				<Text style={{ fontSize: 24, fontWeight: "600", color: "#FCEDCB" }}>+</Text>
				<Text style={{ fontSize: 16, fontWeight: "600", color: "#FCEDCB", }}>{price} SR</Text>
			</TouchableOpacity>
		</View>
	)
}

export default AddToOrder