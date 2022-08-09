import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PrepareOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{

    setTimeout(()=>{
        navigation.navigate("Delivery")
    },4000)

  },[])
  return (
    <SafeAreaView className="bg-[#2394B0] flex-1  items-center">
      <Animatable.Image
        source={require("../assets/giffer.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={40} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
