import { Image, ImageSourcePropType, Text, View } from "react-native";
type TabIconProps = {
  color: string;
  focused: boolean;
  icon: ImageSourcePropType;
  name: string;
};

const TabIcon: React.FC<TabIconProps> = ({ color, focused, icon, name }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
