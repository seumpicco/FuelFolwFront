import { Image, StyleSheet, Platform ,View,ScrollView,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { TabBarIcon } from '@/components/TabBarIcon';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router';


// interface CarData {
//   carName: string;
//   licensePlate: string;
//   initial: string;
//   fuel: string;
//   image : string;
// }

// interface ImageData {
//   uri: string | undefined;
//   type: string;
//   name: string;
// }

export default function TabTwoScreen()  {

//   console.log(imageUri)
// console.log("1111111111111111")
const [carName, setCarName] = useState<string | undefined>("");
const [licensePlate,setLicensePlate ] = useState<string | undefined>("");
const [initial,setInitial ] = useState<string | undefined>("");
const [fuel,setFuelType ] = useState<string | undefined>("");
const [imageUri, setImageUri] = useState<string | undefined>();
const datatoApi = async () => {
  try {
    const data = new FormData();
    data.append('carName', carName ?? '');
    data.append('licensePlate', licensePlate ?? '');
    data.append('initial', initial ?? '');
    data.append('fuel', fuel ?? '');
    data.append('vehicleImage', {
      uri: imageUri,
      type: 'image/jpeg', 
      name: 'vehicle_image.jpg',
    } as any);

    // const response = await fetch('http://www.mywebsite.com/search.php', {
    //   method: 'POST',
    //   body: data
    // });

  
   
    

    console.log(data)
    
    // const responseData = await response.json();
    console.log('Fetch Success==================');
    // console.log(responseData);
  } catch (error) {
    console.error('Error:', error);
  }
};

  const [selectedValue, setSelectedValue] = useState<string>('java');
  

  const deleteImage = ()=>{
    setImageUri('')
  }
  const handlePickImage =  async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.All,
      allowsEditing : true,
      aspect : [1,1],
      quality : 1
    })

    if(!result.canceled){
      setImageUri(result.assets[0].uri)
    };

          // console.log(ImagePicker.PermissionStatus)
          

  };
  const [unitDistance, setUnitDistance] = useState(null);
  const [unitFuel, setUnitFuel] = useState(null);
  const [usageRate, setUsageRate] = useState(null);
  const unitDistanceItems = [
    { label: 'กิโลเมตร', value: 'km' },
    { label: 'ไมล์', value: 'mile' },
  ];

  const unitFuelItems = [
    { label: 'ลิตร', value: 'liters' },
    { label: 'แก๊ส', value: 'gas' },
  ];

  const usageRateItems = [
    { label: 'ลิตร/100km', value: 'liters_per_100km' },
    { label: 'ไมล์/แก๊ส', value: 'miles_per_gas' },
  ];
  
  return (
    <View style={styles.container}>
    {/* Header Section */}
    {/* <View style={styles.header}>
    

  <View style = {styles.hearder2}>
    <Text style = {styles.textStyle} >เพิ่มโปรไฟล์รถ</Text>
      </View>
    </View> */}
    {/* Scrollable Content */}
    <ScrollView 
      contentContainerStyle={styles.scrollContainer}  
      showsVerticalScrollIndicator={false}
    >
  
      {imageUri ? (<View>
      <Image source={{ uri: imageUri }} style={styles.carImage} />
      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={styles.roundButton} onPress={handlePickImage}>
          <TabBarIcon name="images" color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
    
  ) : (
    <View style={styles.emptyFrame}>
      {/* Optional: Add text like 'No Image Selected' */}
      <Text style={styles.placeholderText}>NO IMAGE</Text>
      <View style ={styles.buttonContainer}>
      <TouchableOpacity style={styles.roundButton} onPress={handlePickImage} >
        <TabBarIcon name = "images" color='#FFFFFF'/>
    </TouchableOpacity>
      </View>
    </View>
  )}

<View style={styles.container2}>
  <Text style={styles.textStyle2}>ชื่อยานพาหนะ</Text>
  <TextInput
    style={styles.input}
    placeholder="เพิ่มชื่อ"
    placeholderTextColor="#888"
    onChangeText={(text) => setCarName(text)
    
    } // ฟังก์ชันสำหรับรับค่าที่ผู้ใช้ป้อน
  />
  <Text style={styles.textStyle2}>เลขทะเบียน</Text>
  <TextInput
    style={styles.input}
    placeholder="เลขทะเบียน"
    placeholderTextColor="#888"
    onChangeText={(text) => setLicensePlate(text)} // ฟังก์ชันสำหรับรับค่าที่ผู้ใช้ป้อน
  />

<Text style={styles.textStyle2}>ไมล์ทั้งหมด</Text>
  <TextInput
    style={styles.input}
    placeholder="ไมล์ทั้งหมด"
    placeholderTextColor="#888"
    onChangeText={(text) => setInitial(text)} // ฟังก์ชันสำหรับรับค่าที่ผู้ใช้ป้อน
  />

<Text style={styles.textStyle2}>ประเภทน้ำมัน</Text>
  <TextInput
    style={styles.input}
    placeholder="ประเภทน้ำมัน"
    placeholderTextColor="#888"
    onChangeText={(text) => setFuelType(text)} // ฟังก์ชันสำหรับรับค่าที่ผู้ใช้ป้อน
  />



<Text style={styles.textStyle2}>หน่วย</Text>

<View style={styles.unit}>
  <View style={styles.contianer3}>
    <View style={styles.leftContent}>
      <Text>หน่วยวัดระยะทาง</Text>
    </View>
    <View style={styles.rightContent}>
      <Picker
        selectedValue={unitDistance}
        onValueChange={(itemValue, itemIndex) => setUnitDistance(itemValue)}
        style={styles.picker}
        itemStyle={{ textAlign: 'right' }}>
        <Picker.Item label="กิโลเมตร" value="KM" />
        <Picker.Item label="ไมล์" value="M" />
      </Picker>
    </View>
  </View>

  <View style={styles.contianer3}>
    <View style={styles.leftContent}>
      <Text>หน่วยวัดปริมาณเชื้อเพลิง</Text>
    </View>
    <View style={styles.rightContent}>
      <Picker
        selectedValue={unitFuel}
        onValueChange={(itemValue, itemIndex) => setUnitFuel(itemValue)}
        style={styles.picker}
        itemStyle={{ textAlign: 'right' }}>
        <Picker.Item label="ลิตร" value="liters" />
        <Picker.Item label="แก๊ส" value="gas" />
      </Picker>
    </View>
  </View>

  <View style={styles.contianer3}>
    <View style={styles.leftContent}>
      <Text>อัตราการใช้งาน</Text>
    </View>
    <View style={styles.rightContent}>
      <Picker
        selectedValue={usageRate}
        onValueChange={(itemValue, itemIndex) => setUsageRate(itemValue)}
        style={styles.picker}
        itemStyle={{ textAlign: 'right' }}>
        <Picker.Item label="ลิตร/100km" value="liters_per_100km" />
        <Picker.Item label="ไมล์/แก๊ส" value="miles_per_gas" />
      </Picker>
    </View>
  </View>
</View>
<View style ={styles.buttonOk}>
<Button   title="บันทึก" onPress={() => datatoApi()} />

</View>
</View>




  

</ScrollView>
  
  </View>


  
  );
}


const styles = StyleSheet.create({
  buttonOk :{
    marginTop : 15 , width : 250,borderRadius :30 
    ,alignSelf: 'center'
    
  },
  leftContent: {
    flex: 1.,
  },
  rightContent: {
    flex: 1,
  },

  contianer3:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

  },



  picker: {
    textAlign: 'right',
    width: '100%'
  },
  textLeft: {
    fontSize: 15, // ขนาดตัวอักษร
    textAlign: 'left', // จัดข้อความให้อยู่ทางซ้าย
    flex: 1, // ขยายข้อความให้เต็มพื้นที่
  },
  textRight: {
    fontSize: 15, // ขนาดตัวอักษร
    textAlign: 'right', // จัดข้อความให้อยู่ทางขวา
    flex: 1, // ขยายข้อความให้เต็มพื้นที่
  },
  row: {
    flexDirection: 'row', // จัดข้อความในแนวนอน
    justifyContent: 'space-between', // กระจายข้อความในแถว
    marginBottom: 10, // เพิ่มระยะห่างระหว่างแถว
  },
 
 
  input: {
    height: 40,
    width: 350,
    borderWidth: 2, // ความหนาของขอบ
    borderColor: '#FFFFFF', // สีของขอบ (สามารถปรับเปลี่ยนได้)
    borderRadius: 10, // ทำมุมโค้งมน
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F9F9F9', // สีพื้นหลังของ input
    shadowColor: '#000', // สีของเงา
    shadowOffset: { width: 0, height: 2 }, // ตำแหน่งเงา
    shadowOpacity: 0.2, // ความโปร่งใสของเงา
    shadowRadius: 5, // ขนาดของเงา
    elevation: 10, // เพิ่มความลึกของเงาใน Android
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "#C0E9E5"
    
  },
  container2: {
    marginTop :-30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer2:{
    marginBottom : -10,
    elevation: 20,
    position: 'absolute',
    bottom: 10, 
    right: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  roundButton: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: '#007BFF', 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, 
  },
  buttonContainer: {
    marginBottom : -30,
    elevation: 20,
    position: 'absolute',
    bottom: 10, 
    right: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  placeholderText: {
    color: '#ccc', 
    fontSize: 16,
  },
  emptyFrame: {
    width:"auto",
    height: 160,
    borderWidth: 0.2,
    // borderColor: '#', 
    backgroundColor: '#FFFFFF', // สีพื้นหลัง
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius : 20,
   
  },
  unit: {
    width: 350,
    height: 160,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F9F9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    
 
  },

  carImage: {
    width: "auto",
    height: 170,
    // resizeMode: 'contain',
    borderRadius: 20,
    marginBottom: 20,
  },
  hearder2:{
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    width: '100%', 
    paddingLeft: 5, 
  },
  textStyle: {
 flexDirection: 'row',
 fontSize : 20,
color : '#FFFFFF'
 
  }
  ,  textStyle2: {

    marginStart : -250,
 flexDirection: 'row',
 fontSize : 17,
color : '#000000'
 
  }
  ,
   iconStyle :{
    marginRight: 20,
  color : '#000000'
   },
  carIcon : {
  flexDirection: 'row',
    paddingHorizontal:70, 
    paddingVertical: 10, 
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  header: {
    backgroundColor: '#44679F', // Header background color
    padding:50,
    borderRadius : 10,
width : '100%',
  
    alignItems: 'center',
  },

  headerTitle: {
    marginTop : -25,
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
