import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation, useRouter } from "expo-router";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "./../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";
export default function SelectBudget() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
      return;
    }

    router.push("/create-trip/review-trip");
  };
  return (
    <View>
      <Text>Budget</Text>

      <View>
        <Text>Choose sepending habits for your trip</Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity onPress={() => onClickContinue()}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
