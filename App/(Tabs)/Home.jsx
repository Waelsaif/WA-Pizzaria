import { StyleSheet, View, ScrollView } from 'react-native';
import { React, useState } from 'react'
import data from '../../Data/items.json'
import Delivery from '../../Components/Delivery';
import Item from '../../Components/Item';
import Categories from '../../Components/Categories';
import Ads from '../../Components/Ads';

export default function LayoutApp() {
	const items = data
	  const filteredItems = items.filter(item => Categorie === item.type);

	const [Categorie, setCategorie] = useState("pizza")
	return (
		<View style={styles.container}>
			<Delivery />
			<ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} style={{}}>
				<Ads />
				<Categories setCategorie={setCategorie} selectedCategorie={Categorie} />
				<View style={{ marginBottom: 90 }}>
					{items.map((item) => {
						if (Categorie == item.type) {
							return <Item key={item.name} name={item.name} price={item.price} img={item.img} desc={item.desc} />
						}
					})
					}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FCEDCB",
	},
})
