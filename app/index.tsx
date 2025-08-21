import Elynne from "@/assets/images/Elynne.jpg";
import { Stack } from "expo-router";
import { View } from "react-native";
import Perfil from "./components/Perfil";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "Perfil",
        }}
      />
      <Perfil
        nome="Elynne Silva"
        idade="18 anos"
        minibio="Faço sistemas para Internet e trabalho com marketing"
        url={Elynne}
      />
    </View>
  );
}
