
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, StyleSheet ,GestureResponderEvent, Modal,Text} from 'react-native';
import { TabBarIcon } from '@/components/TabBarIcon';
import index from '../(tabs)/index';
import TimeLine from '../(tabs)/TimeLine';
import oilPrice from '../(tabs)/oilPrice';
import carProfile from './carProfile';
import AddFuel from '../(tabs)/addFuel';
import AddCarProfile from './addCarProfile';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import NotFoundScreen from '../+not-found';




// Stack Navigator สำหรับควบคุมหน้าจอแบบ Stack
const Stack = createNativeStackNavigator();

// Bottom Tab Navigator สำหรับควบคุมแท็บ
const Tab = createBottomTabNavigator();

// ฟังก์ชัน Custom Tab Button
interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

// const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ children, onPress }) => (
//   <TouchableOpacity style={styles.customButton} onPress={onPress ? onPress : undefined}>
//     <View style={styles.circle}>{children}</View>
//   </TouchableOpacity>
// );
// Tab Navigator

type NavigationProps = {
  three: undefined;
  addExpense: undefined;
  addFuel : undefined
  // add other screen names as needed
};


const CustomTabBarButton : React.FC<CustomTabBarButtonProps>  = ({ children, onPress }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<NavigationProps>>();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleNavigation = (screen: keyof NavigationProps) => {
    toggleModal(); // Close modal
    navigation.navigate(screen);
  };
  return (
    <>
      <TouchableOpacity style={styles.customButton} onPress={toggleModal}>
        <View style={styles.circle}>{children}</View>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={toggleModal}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton}  onPress={() => handleNavigation('addFuel')} >
              <FontAwesome5 name="gas-pump" size={24} color="#3B577D" />
              <Text style ={{paddingLeft : 10}}>บันทึกเติมน้ำมัน</Text>
              
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <MaterialIcons name="attach-money" size={24} color="#3B577D" />
              <Text style = {{paddingLeft : 10}}>บันทึกค่าใช้จ่าย</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#3B577D',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#d3d3d3',
    }}
  >
    <Tab.Screen
      name="index"
      component={index}
      options={{
        title: 'หน้าหลัก',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen 
    name="ไทม์ไลน์" 
  
    component={TimeLine} 
    options=
    {{ 
      tabBarIcon: ({ color, focused }) => (
        <MaterialIcons name="timeline" size={32} color="white" />
      )
    }} />
    <Tab.Screen
      name="carProfile"
      component={carProfile}
      options={{
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            style={styles.circle2}
            name={focused ? 'add' : 'add'}
            size={32}
            color={color}
          />
        ),
        tabBarLabel: '',
        headerShown: false,
      }}
    />
    <Tab.Screen name="oilPrice" component={oilPrice}
     options={{ title: 'ราคาน้ำมัน' ,headerShown : false,
      tabBarIcon: ({ color, focused }) => (
        <FontAwesome5 name="gas-pump" size={32} color="white" />
      )


     }}
     
      />
    <Tab.Screen name="โปรไฟล์" component={NotFoundScreen} 
    options={{ 
      tabBarIcon: ({ color, focused }) => (
        <Ionicons name="person-circle-outline" size={32} color="white" />
      )
     }} 
    />
  </Tab.Navigator>
);

// Stack Navigator ที่ครอบ TabNavigator และเพิ่มหน้าจอ AddCarProfile
const App = () => (
  <Stack.Navigator>
    {/* Tab Navigator */}
    <Stack.Screen
      name="HomeTabs"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    {/* หน้าจอ AddCarProfile */}
    <Stack.Screen
      name="addCarProfile"
      component={AddCarProfile}
      options={{
        title: 'โปรไฟล์รถ',
        headerStyle: { backgroundColor: '#3B577D' },
        headerTintColor: '#ffffff',
      }}
    />

<Stack.Screen
      name="carProfile"
      component={carProfile}
      options={{
        title: 'เพิ่มโปรไฟล์รถ',
        headerStyle: { backgroundColor: '#3B577D' },
        headerTintColor: '#ffffff',
      }}
    />

<Stack.Screen
      name="addFuel"
      component={AddFuel}
      options={{
        title: 'บันทึกเติมน้ำมัน',
        headerStyle: { backgroundColor: '#3B577D' },
        headerTintColor: '#ffffff',
      }}
    />


    
  </Stack.Navigator>
);

// สไตล์
const styles = StyleSheet.create({
   // ... existing styles ...
   modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButtonText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#3B577D',
  },
  customButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#44679F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    paddingRight: 1,
    alignItems: 'center',
  },
});

export default App;
