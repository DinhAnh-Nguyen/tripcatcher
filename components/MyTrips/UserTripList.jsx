import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";
export default function UserTripList({ userTrips }) {
  const LatestTrip = JSON.parse(userTrips[0].tripData);
  const router = useRouter();

  return (
    userTrips && (
      <View>
        <View>
          {LatestTrip.locationInfo?.photoRef ? (
            <Image
              source={{
                uri:
                  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                  LatestTrip.locationInfo?.photoRef +
                  "&key=" +
                  process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
              }}
            />
          ) : (
            <View>
              <Text>{userTrips[0]?.tripPlan?.travelPlan?.location}</Text>
              <View>
                <Text>
                  {moment(LatestTrip.startDate).format("DD MMM yyyy")}
                </Text>

                <Text>🚌 {LatestTrip.traveler.title}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/trip-details",
                    params: {
                      trip: JSON.stringify(userTrips[0]),
                    },
                  })
                }
              >
                <Text>See your plan</Text>
              </TouchableOpacity>
            </View>
          )}

          {userTrips.map((trip, index) => (
            <UserTripCard trip={trip} key={index} />
          ))}
        </View>
      </View>
    )
  );
}
