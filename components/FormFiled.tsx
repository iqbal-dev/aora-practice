import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
type TFormField = {
  title: string;
  placeholder: string;
  containStyle?: string;
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
};
const FormFiled = ({
  title,
  placeholder,
  keyboardType = "default",
  containStyle,
}: TFormField) => {
  const [isView, setIsView] = useState(true);
  const isPassword = title.toLocaleLowerCase() === "password";
  return (
    <View className={`space-y-2 ${containStyle}`}>
      <Text className="text-gray-100 text-lg font-pregular">{title}</Text>
      <View className="w-full px-4 bg-black-100 h-16 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-gray-100 font-pregular text-lg"
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          keyboardType={keyboardType}
          secureTextEntry={isPassword && isView}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsView((prevState) => !prevState)}
          >
            <View className="w-[25px] h-[25px] flex align-middle">
              <Image
                className="w-full h-full"
                source={isView ? icons.eye : icons.eyeHide}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFiled;
