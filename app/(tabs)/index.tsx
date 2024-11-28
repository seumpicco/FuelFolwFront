import { Image, StyleSheet, Platform ,View,Text,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {TabBarIcon} from '@/components/TabBarIcon';
import { Link } from 'expo-router';

import { useRouter } from 'expo-router';
export default function HomeScreen() {

  const router = useRouter();
  return (
    
       <View style={styles.container}>
    {/* Header Section */}
    <View style={styles.header}>
      <Text style={styles.headerTitle}>FUELFLOW</Text>
      <TouchableOpacity
        style={{ paddingTop: 30 }}
        onPress={() => {try {
          router.push('/addCarProfile')
          console.log("can push")
        } catch (error) {
          console.log(error)
        }}}  // ใช้ navigation เพื่อไปยังหน้า
      >
      <View  style= {styles.carIcon} >
      <TabBarIcon  style ={styles.iconStyle} name='car'  size={30} />
    <Text style = {styles.textStyle} >Toyota Yaris Ative</Text>
      
      </View>
      </TouchableOpacity>
   
      
    </View>

    {/* Scrollable Content */}
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}  
      showsVerticalScrollIndicator={false}
    >
     

      <View>
    
      </View>
    </ScrollView>
  </View>
  );
}



const styles = StyleSheet.create({
  textStyle: {
    flexDirection: 'row',
    fontSize : 16
     },
      iconStyle :{
       marginRight: 20,
     color : '#000000'
      },
     carIcon : {
      flexDirection: 'row',
   
width : 'auto',
    height : 60,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
   
    paddingRight : 69,
    paddingLeft : 69
     },
     header: {
       backgroundColor: '#44679F', // Header background color
       padding:50,
       borderRadius : 10,
     
       alignItems: 'center',
     },
     container : { flex: 1 ,backgroundColor : "#C0E9E5"},
     headerTitle: {
       marginTop : 20,
       fontSize: 30,
       fontWeight: 'bold',
       color: '#FFFFFF',
     },
     scrollContainer: {
       flexGrow: 1, // Ensures the ScrollView expands to fit content
       padding: 20, // Optional padding for aesthetics
     },
     titleContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       gap: 8,
     },
     stepContainer: {
       gap: 8,
       marginBottom: 8,
     },
     reactLogo: {
       height: 178,
       width: 290,
       bottom: 0,
       left: 0,
       position: 'absolute',
     },
});
