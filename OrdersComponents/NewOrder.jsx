import { ScrollView, View, Image, Text, TouchableOpacity, TextInput, } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NewOrderItem from './NewOrderItem'
import Icon from "react-native-vector-icons/FontAwesome5"
import AddToOrder from './AddToOrder'
import data from '../Data/items.json'
import { useOrderTypeState } from "../Zustand/States"
import { useOrderItems } from "../Zustand/States"
import { useEffect, useState } from 'react'

function NewOrder() {
	const items = data.slice(6, 12)
	const [coupon, setCoupon] = useState(false)
	const [couponCode, setCouponCode] = useState("")
	const orderType = useOrderTypeState((state) => state.orderType)
	const subTotal = useOrderItems((state) => state.price)
	const total = orderType === "Delivery" ? (subTotal + 12) : subTotal
	const [totalPrice, setTotalPrice] = useState(total)
	const handleCoupon = () => {
		if (couponCode == "AB" || couponCode == "Wael") {
			setCoupon(true)
			setTotalPrice((prev) => prev - (0.10 * prev))
		} else {
			setCoupon(false)
			setTotalPrice(total)
		}
	}
	useEffect(() => {
		setTotalPrice(total)
		handleCoupon()
	}, [subTotal])

	return (
		<KeyboardAwareScrollView extraHeight={130}>
			<ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30, marginBottom: 90, width: "90%", alignSelf: "center" }}>
				<NewOrderItem />
				<Text style={{ fontSize: 18, marginBottom: 8 }}>Add To Your order</Text>
				<ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: '100%', alignSelf: "center" }}>
					{items.map((item) => {
						return <AddToOrder key={item.name} name={item.name} price={item.price} img={item.img} desc={item.desc} />
					})}
				</ScrollView>
				<View style={{ flexDirection: "row", borderWidth: 2, borderColor: "#f28aa5", alignItems: "center", marginTop: 18, backgroundColor: "#E5E7E9", borderRadius: 12, }}>
					<TextInput onChangeText={(code) => setCouponCode(code)} placeholder='Coupon' style={{ paddingVertical: 3, flex: 1, margin: 8, fontSize: 20 }}></TextInput>
					<TouchableOpacity onPress={handleCoupon} style={{ flexDirection: "row", height: "100%", justifyContent: "center", alignItems: "center", gap: 8, paddingVertical: 8, paddingHorizontal: 12, borderTopRightRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#FFF" }}><Text style={{ fontSize: 24 }}>Apply</Text><Icon style={{ fontSize: 22 }} name='percentage'></Icon></TouchableOpacity>
				</View>
				<View style={{ backgroundColor: "#FFF", flex: 1, marginTop: 18, borderRadius: 10, padding: 18 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
						<Text style={{ fontSize: 18 }}>Sub Total</Text>
						<Text style={{ fontWeight: "700", fontSize: 18 }}>{subTotal} SR</Text>
					</View>
					{orderType === "Delivery" && <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
						<Text style={{ fontSize: 18 }}>delivery fee</Text>
						<Text style={{ fontWeight: "700", fontSize: 18 }}>12 SR</Text>
					</View>}
					{coupon && <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
						<Text style={{ fontSize: 18 }}>discount </Text>
						<Text style={{ fontWeight: "700", fontSize: 18, color: "red" }}>-{(total * 0.10).toFixed(2)}</Text>
					</View>}
					<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 22 }}>
						<Text style={{ fontSize: 18 }}>Total</Text>
						<Text style={{ fontWeight: "700", fontSize: 18 }}>{(totalPrice).toFixed(2)} SR</Text>
					</View>
					<Text style={{ color: "#F08080" }}>Includes 15% VAT {(totalPrice * 0.15).toFixed(2)} </Text>
				</View>
			</ScrollView>
		</KeyboardAwareScrollView>

	)
}

export default NewOrder