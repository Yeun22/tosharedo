import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	NavigationContainer,
	useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

const Stack = createNativeStackNavigator();
export default function App() {
	const navigationRef = useNavigationContainerRef();

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
