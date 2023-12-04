import {React, useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

function Categories({ setCategorie, selectedCategorie }) {
	const categories = ["pizza", "pasta", "sides", "desserts"];

  return (
	  <View style={{ flexDirection: "row", paddingVertical: 18, alignItems: "center", width: "90%", alignSelf: "center", backgroundColor:"#FCEDCB" }}>
		  <View style={{ marginRight: 15 }}>
			  <Icon name='search' style={{ fontSize: 25 }} />
		  </View>
		  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
			  <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
				  {categories.map((category) => (
					  <TouchableOpacity
						  key={category}
						  onPress={() => setCategorie(category)}
						  style={{
							  backgroundColor: selectedCategorie === category ? "#f28aa5" : "#FFF",
							  
							  borderRadius: 20,
							  paddingHorizontal: 14,
							  paddingVertical: 8,
						  }}
					  >
						  <Text style={{ fontSize: 18, fontWeight: "600", color: selectedCategorie === category ? "#FCEDCB" : "black", textTransform:"capitalize" }}>{category}</Text>
					  </TouchableOpacity>
				  ))}
			  </View>
		  </ScrollView>
	  </View>
  )
}

export default Categories