import React from 'react'
import { Text, View, Image } from 'react-native'

function FoodItem({ data }) {
	const num1 = Math.floor(Math.random() * (11 - 5 + 1) + 5)
	const num2 = Math.floor(Math.random() * (11 - 5 + 1) + 5)
	let items;
	if (num1 < num2 ){
		items = data.slice(num1, num2+1);
	}else{
		items = data.slice(num2, num1+1);
	}
	return (
		<View>
			{items.map((item, index)=>{
				return (
					<View key={index} style={{ marginTop: 12, flexDirection: "row", gap: 12, alignItems: 'center' }}>
						<View style={{ alignItems: "center" }}>
							<Image style={{ objectFit: "contain", borderRadius: 12 }} source={{ uri: item.img, width: 100, height: 80 }}></Image>
							<Text style={{ fontSize: 14 }}>
								{Math.ceil(Math.random() * (6 - 1 + 1) + 0)}x{item.price} SR
							</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ color: "#aaaaaa", fontWeight: "700", flex: 1, width: "100%", flexWrap: "wrap" }}>
									{item.desc}
								</Text>
							</View>
						</View>
					</View>
				)
			})}
		</View>
	
		
	)
}

export default FoodItem