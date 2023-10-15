import React,{useState} from "react"
import { View,Text} from "react-native"
import Geolocation from "@react-native-community/geolocation"
 const Latitude =()=> {
    const [info ,setInfo] = useState(0)
    Geolocation.getCurrentPosition(data=>{
        setInfo(data.coords.latitude)
    })
    console.warn("Geolocation")
    return(
        <View>
            <Text style={{fontSize : 70}}>Latitude Longitude , {info}</Text>
        </View>
    )
 }
 export default Latitude;