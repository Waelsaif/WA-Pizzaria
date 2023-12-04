import { React, useState } from 'react'
import Home from './Home'
import Tabs from '../../Components/Tabs'
import Orders from './Orders'
import Settings from './Settings'
import ShowItem from './ShowItem'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Layout() {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Orders" component={Orders} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="ShowItem" component={ShowItem} />
			</Stack.Navigator>
			<Tabs />
		</NavigationContainer>
	)
}

export default Layout