import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
// import Login from './../components/Login'
// import {auth} from './../configs/FirebaseConfig.js'
// import Redirect from "expo-router"

export default function Index() {
    // const user = auth.currentUser;
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* {user ? 
                <Redirect href={'/mytrip'}></Redirect>};
            <Login></Login>} */}
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold'
            }}
            > Hello World</Text>
        </View>
    )
}