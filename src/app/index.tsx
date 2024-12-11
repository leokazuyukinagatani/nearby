import { Button } from "@/components/button";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  function handleHomeNavigation() {
    router.navigate("/home");
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        gap: 24
      }}
    >
      <Welcome />
      <Steps />
      <Button onPress={handleHomeNavigation}>
        <Button.Title>
          Começar
        </Button.Title>
      </Button>
    </View>
  )
}
