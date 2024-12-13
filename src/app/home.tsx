import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { Href, router } from "expo-router";

type MarketProps = PlaceProps & {
    latitude: number,
    longitude: number
}

const currentLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494
}

export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [category, setCategory] = useState("");
    const [markets, setMarkets] = useState<MarketProps[]>([]);

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories");
            setCategories(data);
            setCategory(data[0].id);
        } catch (error) {
            console.error(error);
            Alert.alert("Categorias", "Não foi possível carregar as categorias.");
        }
    }

    async function fetchMarkets() {
        try {
            if (!category) {
                return;
            }
            const { data } = await api.get(`/markets/category/${category}`)
            setMarkets(data);
        } catch (error) {
            console.error(error);
            Alert.alert("Locais", "Não foi possível carregar os locais.")
        }
    }

    async function getCurrentLocation() {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (granted) {
                const location = Location.getCurrentPositionAsync();
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleNavigate(id: string) {
        const url = `/market/${id}`;
        router.navigate(url as Href);
    }


    useEffect(() => {
        fetchCategories();
        getCurrentLocation();
    }, []);

    useEffect(() => {
        fetchMarkets();
    }, [category]);
    
    return (
        <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
            <Categories
                data={categories}
                onSelect={setCategory}
                selected={category}
            />
            <MapView style={{ flex: 1 }}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
                <Marker
                    identifier="current"
                    coordinate={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude
                    }}
                    image={require("@/assets/location.png")}
                />

                {
                    markets.map((item) => 
                        (
                            <Marker
                                key={item.id}
                                identifier={item.id}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                }}
                                image={require("@/assets/pin.png")}
                        >
                            <Callout onPress={() => handleNavigate(item.id)}>
                                <View>
                                    <Text style={{
                                        fontSize: 14,
                                        color: colors.gray[600],
                                        fontFamily: fontFamily.medium
                                        
                                    }}>{item.name}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: colors.gray[600],
                                        fontFamily: fontFamily.regular
                                        
                                    }}>{item.address}</Text>
                                </View>
                            </Callout>
                            </Marker>
                        )
                    )
                }
            </MapView>
            <Places data={markets} />
        </View>)
}
