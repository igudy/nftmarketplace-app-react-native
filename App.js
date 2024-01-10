import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Details from "./screens/Details";
import Home from "./screens/Home";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  const Stack = createStackNavigator();

  const [loaded] = useFonts({
    InterBold: require("./assets/icons/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/icons/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/icons/Inter-Medium.ttf"),
    InterRegular: require("./assets/icons/Inter-Regular.ttf"),
    InterLight: require("./assets/icons/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
