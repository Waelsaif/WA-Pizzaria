import React from 'react'
import { View } from 'react-native'
import OrderHistory from '../../OrdersComponents/OrderHistory'
import NewOrder from '../../OrdersComponents/NewOrder'
import OrdersPages from '../../OrdersComponents/OrdersPages'
import { createStackNavigator } from '@react-navigation/stack'


function Orders() {
	const Order = createStackNavigator()
	return (
		<View style={{  flex: 1 }}>
			<OrdersPages />
			<Order.Navigator screenOptions={{
				headerShown: false
			}}>
				<Order.Screen name="NewOrder" component={NewOrder} />
				<Order.Screen name="OrderHistory" component={OrderHistory} />
			</Order.Navigator>
		</View>
	)
}

export default Orders