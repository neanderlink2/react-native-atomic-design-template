import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box } from "native-base";
import { useWindowDimensions } from "react-native";
import ListingPage from "./pages/listing.page";
import LoginPage from "./pages/login.page";

export type RootStackParamList = {
    '/login': undefined;
    '/listing': undefined;
    '/details': { animeId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
    const dimensions = useWindowDimensions();
    return (
        <Box w={dimensions.width} h={dimensions.height} flex={1}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="/login">
                    <Stack.Screen name="/login" component={LoginPage} options={{ title: 'Login', headerShown: false }} />
                    <Stack.Screen name="/listing" component={ListingPage} options={{ title: `Listing`, headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Box>
    );
}

export default Routes;