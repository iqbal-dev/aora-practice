import CustomButton from "@/components/CustomButton";
import FormFiled from "@/components/FormFiled";
import { images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full item-center px-4 my-7">
          <Image
            source={images.logo}
            className="h-[35px] w-[115px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Login to Aora
          </Text>
          <FormFiled
            title="Email"
            placeholder="Enter Your Email"
            keyboardType="email-address"
            containStyle="mt-7"
          />
          <FormFiled
            title="Password"
            placeholder="Enter Your Password"
            containStyle="mt-7"
          />
          <Text className="text-gray-100 font-pregular text-lg text-right mt-7">
            Forgot Password
          </Text>
          <CustomButton
            title="Sign In"
            handlePress={() => {}}
            containerStyle="mt-7"
          />
          <Text className="text-gray-100 text-center mt-7 font-pregular text-lg">
            Don’t have an account?{" "}
            <Link href="/sign-up">
              <Text className="text-secondary-100">Signup</Text>
            </Link>
          </Text>
        </View>
        {/* Add sign-in form */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
