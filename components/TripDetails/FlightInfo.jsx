import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {
  return (
    <View style={{
        marginTop:20,
       borderWidth:1,
       borderColor:Colors.LIGHT_GRAY,
     
        padding:10,
        borderRadius:15
    }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
        <Text style={{
        fontSize:20
      }}>✈️ Flights</Text>
        <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        padding:5,
        width:100,
        borderRadius:7,
        marginTop:7
      }}>
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
           
        }}>Book Here</Text>
      </TouchableOpacity>
        </View>
     
      <Text style={{
        fontSize:17,
        marginTop:7
      }}>Airline: Delta</Text>
      <Text style={{
        fontSize:17
      }}>Price: {flightData.price}</Text>
     
    </View>
  )
}