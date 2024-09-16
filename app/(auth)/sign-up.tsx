import CustomButton from "@/components/CustomButton";
import FormFiled from "@/components/FormFiled";
import { images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex item-center px-4 my-7">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-psemibold mt-10">
            Sign up
          </Text>
          <FormFiled
            title="Username"
            placeholder="Your unique username"
            containStyle="mt-7"
          />
          <FormFiled
            title="Email"
            placeholder="Your unique email"
            keyboardType="email-address"
            containStyle="mt-7"
          />
          <FormFiled
            title="Password"
            placeholder="Your unique password"
            containStyle="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={() => {}}
            containerStyle="mt-7"
          />
          <Text className="text-gray-100 text-center mt-7 font-pregular text-lg">
            Already have n account?{" "}
            <Link href="/sign-in">
              <Text className="text-secondary-100">Login</Text>
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
