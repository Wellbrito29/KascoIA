import 'react-native-gesture-handler';
import * as Camera from "expo-camera";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { LoadingView } from "./src/LoadingView";
import { ModelView } from "./src/ModelView";
import { useTensorFlowLoaded } from "./src/useTensorFlow";
import PickModelView from "./src/PickModelView";
import { Home } from "./src/Home";

export default function App() {
  const isLoaded = useTensorFlowLoaded();

  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

  const Stack = createStackNavigator();

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return <LoadingView>Camera permission is required to continue</LoadingView>;
  }
  if (!isLoaded) {
    return <LoadingView>Carregando o useTensorFlow</LoadingView>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="ModelCam" component={ModelView} />
        <Stack.Screen name="ModelPhoto" component={PickModelView} />


      </Stack.Navigator>

    </NavigationContainer>
  )
}
