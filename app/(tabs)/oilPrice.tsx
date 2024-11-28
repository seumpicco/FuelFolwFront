import React, { useState, useEffect} from "react";
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Image,TouchableOpacity
} from "react-native";

// กำหนดประเภทของข้อมูลน้ำมัน
interface OilPrice {
  name: string;
  price: string;
}
type OilData = {
  [key: string]: { [key: string]: OilPrice };
};


const App = () => {
  const  [date,setDate] = useState<String>("");

  
  const [oilData, setOilData] = useState<OilData>({});
  const [pttStation, setPttStation] = useState<any[]>([]);
  const [bangStation, setBangStation] = useState<any[]>([]);
  const [selectedStation, setSelectedStation] = useState<string>("ptt");
  const [stationPrices, setStationPrices] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOilPrices = async () => {
      try {
        const response = await fetch(
          "https://api.chnwt.dev/thai-oil-api/latest"
        );
        const data = await response.json();
        setDate(data.response.date);
      
        setOilData(data.response.stations)
        console.log(oilData)

        // กำหนดให้ pttStationData เป็นอ็อบเจ็กต์ที่มี key เป็น string และ value เป็น OilPrice
        const pttStationData = data.response.stations.ptt as {
          [key: string]: OilPrice;
        };

        // แปลงข้อมูลให้เป็นอาร์เรย์ของ object
        const pttData = Object.entries(pttStationData).map(([key, value]) => ({
          id: key,
          name: value.name,
          price: value.price,
        }));

        setPttStation(pttData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching oil prices:", error);
        setLoading(false);
      }
    };

    fetchOilPrices();
  }, []);


  useEffect(() => {
    if (selectedStation && oilData[selectedStation]) {
      const selectedData = Object.entries(oilData[selectedStation]).map(
        ([key, value]) => ({
          id: key,
          name: value.name,
          price: value.price,
        })
      );
      console.log(selectedData)
      console.log("222")
      setStationPrices(selectedData);
    }
  }, [selectedStation, oilData]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FUELFLOW</Text>
      </View>

      <View style={styles.header2}>
        <View style = {styles.item}>
      <TouchableOpacity onPress={() => setSelectedStation("ptt")}>
          <Image
            source={require("@/assets/images/ptt.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
        <View style = {styles.item}>
        <TouchableOpacity onPress={() => setSelectedStation("bcp")}>
          <Image
            source={require("@/assets/images/bang.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
        <View style = {styles.item}>
        <TouchableOpacity onPress={() => setSelectedStation("shell")}>
          <Image
            source={require("@/assets/images/shell.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
        <View style = {styles.item}>
        <TouchableOpacity onPress={() => setSelectedStation("esso")}>
          <Image
            source={require("@/assets/images/esso.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
      </View>
   <View
  style={{
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  }}
>
  {/* ส่วนหัวคอลัมน์ */}
  <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom : 1 }}>วันที่: {date}</Text>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 10,
    }}
  >
  
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>ประเภทน้ำมัน</Text>
    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>บาท</Text>
  </View>

  {/* รายการ */}




  <FlatList
    data={stationPrices}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 1,
          paddingVertical: 8, // เพิ่มช่องไฟระหว่างแถว
          borderBottomWidth: 1,
          borderBottomColor: '#f0f0f0', // เส้นแบ่งแถว
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
        <Text style={{ fontSize: 14 }}>{item.price} </Text>
      </View>
    )}
  />
</View>

 
    
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 40,
    marginBottom: 10, // ช่องว่างระหว่างไอคอนกับข้อความม
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // พื้นหลังของกรอบ
    borderWidth: 1, // ความหนาของกรอบ
    borderColor: "#007bff", // สีของกรอบ
    borderRadius: 10, // มุมมนของกรอบ
    padding: 1,
    paddingTop: 5,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10, // ระยะห่างระหว่างช่องแนวนอน
  },
  header2: {
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    padding: 1,
    flexDirection: "row", // แนวตั้ง
    justifyContent: "flex-start", // เริ่มต้นที่ขอบซ้าย
    alignItems: "flex-start", // จัดแนวตั้งให้เริ่มจากขอบบน
  },
  textStyle: {
    flexDirection: "row",
    fontSize: 16,
  },
  iconStyle: {
    marginRight: 20,
    color: "#000000",
  },
  carIcon: {
    flexDirection: "row",

    width: "auto",
    height: 60,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",

    paddingRight: 69,
    paddingLeft: 69,
  },
  header: {
    backgroundColor: "#44679F", // Header background color
    padding: 50,
    borderRadius: 10,

    alignItems: "center",
  },
  container: { flex: 1, backgroundColor: "#C0E9E5" },
  headerTitle: {
    marginTop: -25,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1, // Ensures the ScrollView expands to fit content
    padding: 20, // Optional padding for aesthetics
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
  },
});

export default App;
