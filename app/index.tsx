import LoginScreen from "@/screens/LoginScreen";
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "@/components/Login";
import Tabs from "@/screens/Tabs/Tabs";
import Notification from "@/screens/Notification";
import AdminTabs from '../screens/Admin/AdminTabs'
export default function Page() {

  const Stack = createStackNavigator();
  return (
    // <View style={{ flex: 1}}>
    //   <LoginScreen />
    // </View>
    <SafeAreaView  style={{ flex: 1}}>
        <Stack.Navigator initialRouteName="AdminTabs" screenOptions={{
        headerTransparent: true,
        headerTitle: "",
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} />

      </Stack.Navigator>
    </SafeAreaView>
    
    
  );
}

