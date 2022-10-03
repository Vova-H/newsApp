import ScreenNews from "./components/screens/ScreenNews";
import ScreenNewDetails from "./components/screens/ScreenNewDetails";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenSearchSettings from "./components/screens/ScreenSearchSettings";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={ScreenNews}  />
                <Stack.Screen name="Details" component={ScreenNewDetails} />
                <Stack.Screen name="SearchSetting" component={ScreenSearchSettings}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

