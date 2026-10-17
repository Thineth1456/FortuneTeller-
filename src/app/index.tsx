import {router } from 'expo-router';
import {Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
return (
<View style={styles.container}>
<Text style={styles.headerText}>FORTUNE TELLER</Text>

<Image
source={{ uri: 'https://cdn-images.threadless.com/~tms/akashashrine/products/3581681/shirt-1716826705-5018c7f182bb8f121ce02c45d956974a.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKYwMDAwMDCTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSpHdlYnBVgKVmb3JjZcKpb25seV9tZXRhwg==&f=mp'}}
style={styles.image}
/>

{/* Practical information section */}
<View style={styles.infoBox}>
<Text style={styles.infoText}>Coding can be tough, but the universe has a plan for your code. Are you about
to face a massive bug, or will your code compile on the first try?
</Text>
</View>

{/* Navigation Button */}
<Button
title="Reveal My Coding Destiny"
color="#0cec5a9b"
onPress={() => router.push('/reveal' as any)}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
padding: 24,
backgroundColor: '#f5f5f5'
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color: '#333'
},
image: {
width: 200,
height: 200,
borderRadius: 100,
marginBottom: 20
},
infoBox: {
backgroundColor: '#ffffff',
padding: 15,
borderRadius: 10,
marginBottom: 25,
shadowColor: '#000',
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 2,
},
infoText: {
fontSize: 16,
textAlign: 'center',
color: '#f70f2a',
lineHeight: 24,
},
});