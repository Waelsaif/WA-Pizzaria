import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FoodItem from './FoodItem'
import data from "../Data/items.json"
function OrderItem() {
	return (
		<View style={{ backgroundColor: "#FFF", width: "90%", borderRadius: 16, marginBottom: 20, alignSelf: "center", padding: 12 }}>
			<View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
				<Text style={{ width: "50%", fontSize: 18 }}>
					Alshoqiah (Dr. koshak street)
				</Text>
				<View style={{ alignItems: "center" }}>
					<Text style={{ color: "#aaaaaa" }}>
						Order 3293203
					</Text>
					<Text style={{ color: "#aaaaaa" }}>
						2023/10/20 5:21 PM
					</Text>
				</View>
			</View>

			<FoodItem data={data} />

			<TouchableOpacity style={{ alignSelf: "center", width: "90%", marginVertical: 12, padding: 12, backgroundColor: "#f28aa5", borderRadius: 16 }}>
				<Text style={{ alignSelf: "center", fontSize: 22 }}>
					Reorder
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default OrderItem