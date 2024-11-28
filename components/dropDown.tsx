// import React, { useState } from 'react';
// import { View, Text, StyleSheet,ScrollView } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

// const MyComponent: React.FC = () => {
//   // สเตตัสสำหรับค่าที่เลือก
//   const [unitDistance, setUnitDistance] = useState<string | null>(null);
//   const [unitFuel, setUnitFuel] = useState<string | null>(null);
//   const [usageRate, setUsageRate] = useState<string | null>(null);

//   const unitDistanceItems = [
//     { label: 'กิโลเมตร', value: 'km' },
//     { label: 'ไมล์', value: 'mile' },
//   ];

//   const unitFuelItems = [
//     { label: 'ลิตร', value: 'liters' },
//     { label: 'แก๊ส', value: 'gas' },
//   ];

//   const usageRateItems = [
//     { label: 'ลิตร/100km', value: 'liters_per_100km' },
//     { label: 'ไมล์/แก๊ส', value: 'miles_per_gas' },
//   ];

//   return (
   
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <Text style={styles.textLeft}>หน่วยวัดระยะทาง</Text>
        
//         <RNPickerSelect
//           onValueChange={(value) => setUnitDistance(value)}
//           items={unitDistanceItems}
//           value={unitDistance}
//           style={pickerSelectStyles}
//         />
      
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.textLeft}>หน่วยวัดปริมาณเชื้อเพลิง</Text>
//         <RNPickerSelect
//           onValueChange={(value) => setUnitFuel(value)}
//           items={unitFuelItems}
//           value={unitFuel}
//           style={pickerSelectStyles}
//         />
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.textLeft}>อัตราการใช้งาน</Text>
//         <RNPickerSelect
//           onValueChange={(value) => setUsageRate(value)}
//           items={usageRateItems}
//           value={usageRate}
//           style={pickerSelectStyles}
//         />
//       </View>
//     </View>
   
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//     //   paddingHorizontal: 20, // กำหนด padding ซ้าย-ขวาให้สม่ำเสมอ
//     //   paddingVertical: 30,   // กำหนด padding ด้านบน-ล่างให้ดูสมดุล
//     marginTop :-30

//     },
//     row: {
//       flexDirection: 'row',             // จัด row ให้มีแนวนอน
//       justifyContent: 'space-between',  // เว้นระยะระหว่าง Text กับ Picker
//       alignItems: 'center',             // จัดให้ Text และ Picker อยู่ในแนวเดียวกัน
//       marginBottom: -35,      
//                  // เว้นระยะห่างระหว่าง row
//     },
//     textLeft: {
//       fontSize: 15,        // กำหนดขนาดตัวอักษร
//       color: '#333',       // สีข้อความให้ดูอ่านง่าย
//       flexShrink: 1, // ใช้ flexShrink แทน            // กำหนด flex ให้ Text ใช้พื้นที่อัตโนมัติ
//     },
//   });
  

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     color: 'black',
//     fontSize: 16,
//     width: 150,
//      zIndex: 10, // เพิ่ม zIndex
//   },
//   inputAndroid: {
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     color: 'black',
//     fontSize: 14,
//     width: 120,
//     zIndex: 10, // เพิ่ม zIndex
    
//   },
// });

// export default MyComponent;
