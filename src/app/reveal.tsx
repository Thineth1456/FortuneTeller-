import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RevealScreen() {
return (
<View style={styles.container}>
<Text style={styles.headerText}>Here is your Fortune !</Text>

<Image
source={{uri:'https://i.pinimg.com/200x150/54/98/c8/5498c80e8a188bee2fb257cfc3c66f78.jpg'}}
style={styles.image}
/>
<View style={styles.fortuneBox}>
<Text style={styles.fortuneText}> 
"You will solve a bug today by randomly deleting a single line of code that you didn't even write."
</Text>
</View>

<Button
title="Go Back"
color="#06f706"
onPress={() => router.back()}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
padding: 15,
backgroundColor: '#e0f7fa'
},
headerText: {
fontSize: 22,
fontWeight: 'bold',
marginBottom: 20,
color: '#0335fb'
},
image: {
width: 250,
height: 250,
borderRadius: 150,
marginBottom: 40,
marginTop: 10
},
fortuneBox: {
backgroundColor: '#ffffff',
padding: 20,
borderRadius: 12,
borderWidth: 2,
borderColor: '#f9052e',
marginBottom: 30,
},
fortuneText: {
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
color: '#00838f',
fontStyle: 'italic'
},
});