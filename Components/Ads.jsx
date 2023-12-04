import {React, useEffect, useState} from 'react'
import { View, Image} from 'react-native';

function Ads() {
	const Pics = ["https://www.bbcgoodfoodme.com/wp-content/uploads/2021/02/VIBES.jpg", "https://image.khaleejtimes.com/?uuid=25cea6ab-cb1e-5c3a-953c-f3720bcb6656&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.60811&width=1200&height=675&x=1.0E-5&y=0.07973", "https://www.dubaireview.ae/wp-content/uploads/listing-uploads/gallery/2021/06/slide2-db902c3ae8.jpg"];
	const [pic, setPic] = useState(Pics[0]);
	let currentPicIndex = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			currentPicIndex = (currentPicIndex + 1) % Pics.length;
			setPic(Pics[currentPicIndex]);
		}, 3000); 

		return () => clearInterval(interval); 
	}, []);
  return (
	  <View style={{ width: "90%", height: 160, alignSelf: "center", backgroundColor: "white", marginTop: 20, borderRadius: 16 }}>
		  <Image style={{ width: "100%", height: "100%", borderRadius: 16, objectFit:"cover" }} source={{ uri: pic, }}></Image>
	  </View>
  )
}

export default Ads