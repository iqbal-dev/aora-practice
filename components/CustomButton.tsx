import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
type TCustomButtonProps = {
  handlePress: () => void;
  title: string;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
};
export default function CustomButton({
  handlePress,
  title,
  containerStyle,
  textStyle,
  isLoading,
}: TCustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[60px] flex flex-row justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
}
