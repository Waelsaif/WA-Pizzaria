import Icon from "react-native-vector-icons/FontAwesome5"
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Item({ name, price, img, desc }) {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.navigate("ShowItem", { name, price, img, desc })} style={{ width: "90%", height: 280, alignSelf: "center", marginBottom: 20, borderRadius: 20, backgroundColor: "#FFF" }}>
				<Image style={{ width: "100%", height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, objectFit:"fill" }} source={{ uri: img, }}></Image>
				<View style={{ flexDirection: "row", marginTop: 8, marginLeft: 10, alignItems: "baseline", flexWrap:"wrap" }}>
					<Text style={{ fontSize: 22, fontWeight: "700", paddingRight: 5 }}>{name}</Text>
					<Text>667 Cal</Text>
					<Icon name='fire' style={{ color: "red", fontWeight: "700", paddingLeft: 5 }} />
				</View>
				<View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "baseline", marginRight: 14, }}>
					<Text style={{ fontSize: 24, fontWeight: "700", color: "#f28aa5", marginRight: 3 }}>{price}</Text>
					<Text >SR</Text>
				</View>
			</TouchableOpacity>

		</View>

	)
}

export default Item