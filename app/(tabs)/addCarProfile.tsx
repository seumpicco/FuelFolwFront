import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TabBarIcon } from "@/components/TabBarIcon";
import { Link } from "expo-router";
// import AddCarProfile from './addCarProfile';
import { useRouter } from "expo-router";
import { WebView } from 'react-native-webview';
export default function AddCarProfile() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={{ marginTop: 30 }}>
              {/* <WebView 
          source={{ uri: 'https://www.pttor.com/oil_price_board?lang=th' }}
          style={styles.webview}
          startInLoadingState={true} // แสดง loading ขณะโหลด
        /> */}

                <TouchableOpacity
                    style={{ paddingTop: 30 }}
                    onPress={() => {try {
                        router.push('/carProfile')
                        console.log("can push2")
                      } catch (error) {
                        console.log(error)
                      }}}   // ใช้ navigation เพื่อไปยังหน้า
                >
                    <View style={styles.carIcon}>
                        <TabBarIcon style={styles.iconStyle} name="add-circle" size={30} />
                        <Text style={styles.textStyle}>เพิ่มโปรไฟล์รถ</Text>

                    </View>
                </TouchableOpacity>
            </View>

            {/* Scrollable Content */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
              
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    webview: {
        flex: 1, // ใช้ flex เพื่อให้ WebView ใช้พื้นที่เต็มที่
        marginBottom: 20, // เพิ่มระยะห่างจากปุ่ม
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

        width: 320,
        height: 60,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        backgroundColor: "#f9f9f9",
        alignItems: "center",

        paddingRight: -59,
        paddingLeft: 69,
    },

    container: {
        flex: 1, backgroundColor: "#C0E9E5",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        marginTop: 50,
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
