import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text, View } from "react-native";
import HomeScreen from "../../screens/home-screens";
import BookmarkScreen from "../../screens/bookmark-screens";
import HomeIcon from "./bottom-tab-icons/home-icon";
import BookingIcon from "./bottom-tab-icons/booking-icon";
import MessageIcon from "./bottom-tab-icons/message-icon";
import ProfileIcon from "./bottom-tab-icons/profile-icon";

export default function MyTabs() {
  const Tab = createBottomTabNavigator();

  const renderTabBar = ({ state, descriptors, navigation }: any) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        {state.routes.map((route: { key: string | number; name: any; }, index: React.Key | null | undefined) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(route.name)}
              style={{ justifyContent:"space-between", flex: 1, alignItems: "center"}}
            >
              <View>
                {options.tabBarIcon({ color: isFocused ? "black" : "gray", size: 24, focused: isFocused })}
              </View>
              <Text style={{ color: isFocused ? "black" : "gray" }}>{label}</Text>
              {isFocused && <View style={{ width: 8, height: 8, backgroundColor: "black", borderRadius: 5, marginTop: 3 }} />}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={props => <View style={{ height: 70, backgroundColor: "white", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>{renderTabBar(props)}</View>}>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size,  focused }) => <HomeIcon size={size}  isFocused={focused} />,
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({  size, focused }) => <BookingIcon size={size} isFocused={focused} />,
        }}
        name="Bookings"
        component={BookmarkScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({  size , focused}) => <MessageIcon size={size} isFocused={focused}/>,
        }}
        name="Messages"
        component={BookmarkScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({  size, focused}) => <ProfileIcon size={size} isFocused={focused}/>,
        }}
        name="Profile"
        component={BookmarkScreen}
      />
    </Tab.Navigator>
  );
}
