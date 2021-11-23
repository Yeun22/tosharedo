import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button as CustomButton } from "react-native-elements";
import Task from "../Components/Task";

const Dashboard = () => {
	return (
		<View style={styles.container}>
			<CustomButton
				icon={{
					name: "checkmark-circle-outline",
					type: "ionicon",
					color: "white",
				}}
			/>
			<Text>Hello les BG vous êtes connectés ! </Text>

			<Task />
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
	},
});
