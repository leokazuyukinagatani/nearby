import { Text, View } from "react-native";

import { s } from "./styles";
import { Step } from "../step";
import { steps, stepsTitle } from "@/data";
import { IconMapPin, IconQrcode, IconProps, IconTicket } from "@tabler/icons-react-native";

const iconsMap: Record<string, React.ComponentType<IconProps>> = {
    IconMapPin: IconMapPin,
    IconQrcode: IconQrcode,
    IconTicket: IconTicket,
};
export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>{stepsTitle}</Text>
            {
                steps.map((step, index) => {
                    const IconComponent: React.ComponentType<IconProps> = iconsMap[step.icon];
                    return <Step
                        key={index}
                        icon={IconComponent}
                        title={step.title}
                        description={step.description} />
                })
            }
        </View>
    );
}
