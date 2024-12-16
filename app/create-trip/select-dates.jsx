import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";
export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select Start and End Date", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate.diff(startDate, "days");
    console.log(totalNoOfDays + 1);
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });

    router.push("/create-trip/select-budget");
  };
  return (
    <View>
      <Text>Travel Dates</Text>

      <View>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          // selectedRangeStyle={{
          //     backgroundColor:Colors.PRIMARY
          // }}
          // selectedDayTextStyle={{
          //     color:Colors.WHITE
          // }}
        />
      </View>

      <TouchableOpacity onPress={OnDateSelectionContinue}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
