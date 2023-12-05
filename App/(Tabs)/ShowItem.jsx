import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import { useOrderItems } from "../../Zustand/States"

function ShowItem({ route }) {
	const navigation = useNavigation();
	const [checked1, setChecked1] = useState(false)
	const [checked2, setChecked2] = useState(false)
	const [checked3, setChecked3] = useState(false)
	const [count, setCount] = useState(1)
	const { addItem } = useOrderItems();

	const handleAddItem = () => {
		addItem({ name, price, img, desc, numberOfItems: count });
	};
	const { name, price, img, desc } = route.params
	
	return (
		<ScrollView style={{ backgroundColor: "#e2e2e2", flex: 1,  }}>
			<View style={{ backgroundColor: "#fff", width: "92%", marginTop: 70, marginBottom: 100, paddingBottom: 20, borderRadius: 18,  alignSelf:"center" }}>
				<TouchableOpacity onPress={()=> navigation.goBack()} style={{ position: "absolute", zIndex: 200, margin:10 }}>
					<Icon name='arrow-back-circle' style={{ fontSize: 40, color: "#f28aa5", fontWeight: "700" }}></Icon>
				</TouchableOpacity>
				<Image style={{ width: "100%", height: 250, borderTopRightRadius: 18, borderTopLeftRadius: 18, objectFit: "fill" }} source={{ uri: img }}></Image>
				<View style={{ width: "90%", alignSelf: "center", }}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, alignItems: "center", flexWrap: "wrap" }}>
						<Text style={{ fontSize: 28, fontWeight: "700", width:"80%" }}>{name}</Text>
						<Text style={{ fontSize: 22, fontWeight: "700" }}>{price} SR</Text>
					</View>
					<Text style={{ fontSize: 22, marginTop: 10 }}>{desc}</Text>
					<View style={{ flexDirection: 'row', gap: 10, alignItems: "center", marginTop: 10 }}>
						<TouchableOpacity onPress={() => setChecked1(!checked1)} style={{ backgroundColor: checked1 ? "#f28aa5" : "#E2E2E2", width: 30, height: 30, borderRadius: 8 }}>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, fontWeight: "500" }} >Ranch Sauce</Text>
					</View>
					<View style={{ flexDirection: 'row', gap: 10, alignItems: "center", marginTop: 10 }}>
						<TouchableOpacity onPress={() => setChecked2(!checked2)} style={{ backgroundColor: checked2 ? "#f28aa5" : "#E2E2E2", width: 30, height: 30, borderRadius: 8 }}>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, fontWeight: "500" }} >Jalapeno</Text>
					</View>
					<View style={{ flexDirection: 'row', gap: 10, alignItems: "center", marginTop: 10 }}>
						<TouchableOpacity onPress={() => setChecked3(!checked3)} style={{ backgroundColor: checked3 ? "#f28aa5" : "#E2E2E2", width: 30, height: 30, borderRadius: 8 }}>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, fontWeight: "500" }} >Olive Oil</Text>
					</View>
					<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
						<TextInput multiline={true}
							numberOfLines={4} placeholder='Add Your Custom Notes' style={{ width: "100%", marginTop: 20, height: 120, backgroundColor: "#e3e3e3", borderRadius: 18, paddingHorizontal: 20, paddingTop: 20, fontSize: 20 }} />
					</KeyboardAvoidingView>
					<View style={{ flexDirection: 'row', gap: 10, alignItems: "center", marginTop: 18 }}>
						<View style={{ flexDirection: 'row', gap: 5, borderWidth: 2, borderColor:"#FCEDCB", alignItems: "center", backgroundColor: "#f28aa5", borderRadius: 12 }}>
							<TouchableOpacity onPress={() => setCount(prev => prev + 1)} style={{ backgroundColor: "#f28aa5",  paddingHorizontal:8, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
								<Text style={{ fontSize: 28, color: "#FCEDCB" }}>+</Text>
							</TouchableOpacity>
							<Text style={{ fontSize: 24, color: "#FCEDCB" }}>{count}</Text>
							<TouchableOpacity onPress={() => setCount(prev => prev === 1 ? prev : prev - 1)} style={{ backgroundColor: "#f28aa5", paddingHorizontal: 8, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
								<Text style={{ fontSize: 28, color: count === 1 ? "#e2e2e2" : "#FCEDCB" }}>-</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={handleAddItem} style={{ flex: 1, backgroundColor: "#f28aa5", borderRadius: 8, paddingVertical: 3, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#FCEDCB", }}>
							<Text style={{ fontSize: 24, color: "#FCEDCB" }}>Add</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

export default ShowItem