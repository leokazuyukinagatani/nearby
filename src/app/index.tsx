import { Step } from "@/components/step";
import { Steps } from "@/components/steps";
import { Welcome } from "@/components/welcome";
import { View } from "react-native";

export default function Index() {
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
    </View>
  )
}
