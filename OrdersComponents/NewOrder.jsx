import React from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import OrderItem from './OrderItem'
import AddToOrder from './AddToOrder'
import data from '../Data/items.json'

function NewOrder() {
	const items = data.slice(6,12)
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30, marginBottom: 90, width:"90%", alignSelf:"center" }}>
			<OrderItem />
			<Text style={{fontSize:18, marginBottom:8}}>Add To Your order</Text>
				<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', alignSelf: "center" }}>
					{items.map((item)=> {
						return <AddToOrder key={item.name} name={item.name} price={item.price} img={item.img} />
					})}
				</ScrollView>
				<View style={{flexDirection:"row"}}>
					<TextInput p></TextInput>
				</View>
		</ScrollView>
	)
}

export default NewOrder