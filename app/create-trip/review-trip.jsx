import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useContext } from "react";
import { CreateTripContext } from "./../../context/CreateTripContext";
import moment from "moment";
export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  // 📍📆🗓️🚌💰
  return (
    <View>
      <Text>Review your trip</Text>

      <View>
        <Text>Before generating your trip , please review your selection</Text>

        {/* Destination Info  */}
        <View>
          <Text>📍</Text>
          <View>
            <Text>Destination</Text>
            <Text>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>

        {/* Date Selected Info  */}
        <View>
          <Text>🗓️</Text>
          <View>
            <Text>Travel Date</Text>
            <Text>
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData.endDate).format("DD MMM") +
                "   "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* Travel Info  */}
        <View>
          <Text>🚌</Text>
          <View>
            <Text>Who is Traveling</Text>
            <Text>{tripData?.traveler?.title}</Text>
          </View>
        </View>

        {/* Budget Info  */}
        <View>
          <Text>💰</Text>
          <View>
            <Text>Budget</Text>
            <Text>{tripData?.budget}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.replace("/create-trip/generate-trip")}
      >
        <Text>Build My trip</Text>
      </TouchableOpacity>
    </View>
  );
}
