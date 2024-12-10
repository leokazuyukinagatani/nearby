import { Text, View } from "react-native";

import { s } from "./styles";
import { Step } from "../step";
import { steps, stepsTitle } from "@/data";
export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>{stepsTitle}</Text>
            {
                steps.map(step => {
                    return <Step
                        title={step.title}
                        description={step.description} />
                })
            }
        </View>
    );
}
