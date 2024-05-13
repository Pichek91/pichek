import Slider from '@react-native-community/slider'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            />

            <Text style={styles.title}>20 Caracteres</Text>

            <View style={styles.area}>
                <Slider
                style={{height: 50}}
                minimumValue={6}
                maximumValue={20}
                maximumTrackTintColor="red"
                minimumTrackTintColor='red'
                thumbTintColor='blue'
                />
            </View>

            <TouchableOpacity style={styles.button}>
            <Text styles={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
   } ,
   logo:{
    marginBottom: 60
   },
   area:{
    marginTop: 14,
    marginBottom: 14,
    width:"80%",
    backgroundColor:"blue",
    borderRadius: 8,
    padding: 8,
   },
   button:{
    backgroundColor:"blue",
    width: "80%",
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom:18,
   },
    buttonText:{
    color: "gold",
    fontSize: 20,
    
   }


});
