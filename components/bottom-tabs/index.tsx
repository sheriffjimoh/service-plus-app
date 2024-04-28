import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/home-screens";
import BookmarkScreen from "../../screens/bookmark-screens";
import HomeIcon from "./bottom-tab-icons/home-icon";
import BookingIcon from "./bottom-tab-icons/booking-icon";
import MessageIcon from "./bottom-tab-icons/message-icon";
import ProfileIcon from "./bottom-tab-icons/profile-icon";

export default function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <HomeIcon size={size} />,
          headerShown: false,
    
        }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => <BookingIcon size={size} />,
        }}
        name="Bookings"
        component={BookmarkScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => <MessageIcon size={size} />,
        }}
        name="Messages"
        component={BookmarkScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <ProfileIcon size={size} />,
        }}
        name="Profile"
        component={BookmarkScreen}
      />
    </Tab.Navigator>
  );
}
