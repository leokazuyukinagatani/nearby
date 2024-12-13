import { useRef } from "react";
import {
  Text,
  useWindowDimensions,
} from "react-native";

import { s } from "./styles";
import { Place, PlaceProps } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Href, router } from "expo-router";

type Props = {
    data: PlaceProps[];
};

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = {
        min: 278,
        max: dimensions.height - 128,
    };

    function handleNavigate(id: string) {
        const url = `/market/${id}`;
        router.navigate(url as Href);
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Place data={item} onPress={() => handleNavigate(item.id)} />}
                contentContainerStyle={s.container}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>
                )}
            />
        </BottomSheet>
    );
}
