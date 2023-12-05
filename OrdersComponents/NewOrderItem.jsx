import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FoodItem from './FoodItem'
import { useOrderItems } from "../Zustand/States"
import { useOrderTypeState } from "../Zustand/States"
function OrderItem() {
	const orderType = useOrderTypeState((state) => state.orderType)
	const data = useOrderItems((state) => state.items)
	return (
		<View style={{ backgroundColor: "#FFF", width: "100%", borderRadius: 16, marginBottom: 20, alignSelf: "center", padding: 12 }}>
			<View style={{ flexDirection: "row", gap: 10, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
				<Text style={{ width: "50%", fontSize: 18 }}>
					Alshoqiah (Dr. koshak street)
				</Text>
				<View style={{ alignItems: "center" }}>
					<Text style={{ color: "#aaaaaa" }}>
						{orderType}
					</Text>
					<Text style={{ color: "#aaaaaa" }}>
						35 Min
					</Text>
				</View>
			</View>

			<FoodItem data={data} />

			
		</View>
	)
}

export default OrderItem