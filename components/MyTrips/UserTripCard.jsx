import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { useRouter } from "expo-router";
export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/trip-details",
          params: {
            trip: JSON.stringify(trip),
          },
        })
      }
    >
      <Image
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(trip.tripData).locationInfo?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
      />
      <View>
        <Text>{trip.tripPlan?.travelPlan?.location}</Text>
        <Text>
          {moment(formatData(trip.tripData).startDate).format("DD MMM yyyy")}
        </Text>
        <Text>Traveling: {formatData(trip.tripData).traveler.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
