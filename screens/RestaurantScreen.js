import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import DishRow from "../components/DishRow";
import { setRestaurant } from "../features/restaurantSlice";
import { urlFor } from "../sanity";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon />
      <SafeAreaView className="bg-black">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          className="bg-white"
          showsVerticalScrollIndicator={false}
        >
          <View className="relative">
            <Image
              source={{
                uri: urlFor(imgUrl).url(),
              }}
              className="w-full h-52 bg-gray-300 p-4"
            />
            <TouchableOpacity
              onPress={navigation.goBack}
              className="absolute top-6 left-5 bg-gray-100 p-2 rounded-full"
            >
              <ArrowLeftIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
          </View>
          <View className="bg-white">
            <View className="px-4 pt-4 ">
              <Text className="text-3xl font-bold">{title}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon color="#00CCBB" opacity={0.5} size={22} />
                  <Text className="text-xs text-gray-500">
                    <Text className="text-[#00CCBB]">{rating}</Text> . {genre}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                  <Text className="text-xs text-gray-500">
                    Nearby . {address.substring(0, 20)}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2 pb-4">
                {short_description}
              </Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={0.4} size={20} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a food allergy?
              </Text>
              <ChevronRightIcon color="#00CCBB" />
            </TouchableOpacity>
          </View>
          <View className="bg-gray-100">
            <Text className="px-4 pt-6 font-bold text-xl mb-2">Menu</Text>
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RestaurantScreen;
