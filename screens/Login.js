import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { authenticate } from "../api/login";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigation = useNavigation();

	const handleChange = (name, value) => {
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleLogin = () => {
		const result = axios
			.get(
				"https://127.0.0.1:8002/api/users?page=1&email=" +
					formData["email"]
			)
			.then((response) => {
				console.log(response.data);

				// if (!json) {
				// 	return [];
				// }
				// return Object.keys(json).map((key) => {
				// 	return { ...json[key], id: key };
				// });
			});
		console.log(result);
		navigation.navigate("Dashboard");
	};

	return (
		<View style={styles.container}>
			<Text>Coucou Mélanie La beauté, Tu es magnifique ce soir :)</Text>
			<TextInput
				onChangeText={(text) => handleChange("email", text)}
				placeholder="adresse@mail.com"
				keyboardType="email-address"
			/>
			<TextInput
				onChangeText={(text) => handleChange("password", text)}
				placeholder="mot de passe ..."
				secureTextEntry={true}
			/>
			<Button title="Connexion" onPress={handleLogin} />
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
		color: "red",
	},
});
