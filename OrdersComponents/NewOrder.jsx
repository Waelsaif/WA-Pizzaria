import React from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import OrderItem from './OrderItem'
import data from '../Data/items.json'

function NewOrder() {
	// const items = data.slice(7,11)
	return (
		<ScrollView style={{ marginTop: 30, marginBottom: 90 }}>
			<OrderItem />
			<ScrollView horizontal={true} style={{ backgroundColor: "#e2e2e2", padding: 10, width: '100%', alignSelf: "center" }}>
				<View style={{ width: 130, height: 150, backgroundColor: "#FFF", borderRadius: 6 }}>
					<Text style={{ alignSelf: "center", fontSize: 24 }}>pasta</Text>
					<Image style={{ width: 90, height: 90, objectFit: "scale-down", alignSelf: "center" }} source={{ uri: "https://hungerstation.com/_next/image?url=https%3A%2F%2Fimages.deliveryhero.io%2Fimage%2Fhungerstation%2Fmenus%2Fmenuitem%2Fhsimg-22000260%3Fwidth%3D222&w=256&q=75" }}></Image>
					<View style={{ flexDirection: "row", alignItems: 'baseline', justifyContent: "space-between" }}>
						{/* <View style={{ backgroundColor: "#e2e2e2", width: 30, height: 30, justifyContent: "center", alignItems: "center" }}>
						  <Text style={{ fontSize: 24 }}>+</Text>
					  </View> */}
						<TouchableOpacity style={{ backgroundColor: "red", width: 30, height: 30, }}>
							<Text style={{ fontSize: 24 }}>
								+
							</Text>
						</TouchableOpacity>
						<View>
							<Text style={{ fontSize: 16, marginRight: 3 }}>29 SR</Text>
						</View>
					</View>
					{/* <View style={{flexDirection:"row", alignItems:'baseline', justifyContent:"space-between"}}>
					  <View style={{ backgroundColor:"#e2e2e2", width:30,height:30, justifyContent:"center", alignItems:"center"}}>
						<Text style={{fontSize:24}}>+</Text>
					</View>
					<View>
						  <Text style={{ fontSize: 16, marginRight:3 }}>29 SR</Text>
					</View>
				  </View> */}
				</View>

			</ScrollView>
		</ScrollView>
	)
}

export default NewOrder