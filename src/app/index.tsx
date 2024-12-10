import { Welcome } from "@/components/welcome";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        gap: 24
      }}
    >
      <Welcome/>
    </View>
  )
}
