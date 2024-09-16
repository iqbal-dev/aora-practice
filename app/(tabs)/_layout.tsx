import TabIcon from "@/components/TabIcon";
import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                name="Home"
                color={color}
                icon={icons.home}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                name="Profile"
                color={color}
                icon={icons.profile}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                name="Create"
                color={color}
                icon={icons.plus}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                name="Saved"
                color={color}
                icon={icons.bookmark}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
