import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "./../../context/CreateTripContext";
export default function SearchPlace() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    console.log(tripData);
  }),
    [tripData];

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onFail={(error) => console.log(error)}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
      />
    </View>
  );
}
