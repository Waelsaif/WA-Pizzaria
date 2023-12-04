import React from 'react' 
import { ScrollView } from 'react-native'
import OrderItem from './OrderItem'

function OrderHistory() {
  return (
	  <ScrollView style={{ marginTop: 30, marginBottom: 90, width: "90%", alignSelf: "center" }}>
		  <OrderItem />
		  <OrderItem />
	  </ScrollView>
  )
}

export default OrderHistory