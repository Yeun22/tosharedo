import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Button, Card, ListItem, Switch } from "react-native-elements";

export default function Task() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Aller au casino",
			author: "Yeun",
			assignTo: "Melanie",
			done: false,
		},
		{
			id: 2,
			text: "Tonte de la pelouse",
			author: "Melanie",
			assignTo: "Melanie",
			done: true,
		},
		{
			id: 3,
			text: "Faire à manger",
			author: "Yeun",
			assignTo: "Yeun",
			done: false,
		},
	]);

	const [text, setText] = useState("");

	const createTask = (text) => {
		setTasks([
			...tasks,
			{
				id: Date.now(),
				text: text,
				done: false,
				author:
					parseInt(Math.random() * 100) % 2 === 0
						? "Melanie"
						: "Yeun",
				assignTo:
					parseInt(Math.random() * 100) % 2 === 0
						? "Melanie"
						: "Yeun",
			},
		]);
		setText("");
	};

	const changeTaskStatus = (id) => {
		// 0 Créer une copie des tasks pour ne pas bosser direct sur le state
		const updatedTasks = [...tasks];
		//1 récupérer l'index de la tache qui a cet id
		const index = updatedTasks.findIndex((t) => t.id === id);
		//2 Inverser la valeur de done pour cette tache
		updatedTasks[index].done = !updatedTasks[index].done;
		//3 Renvoyer le state mis à jour
		setTasks(updatedTasks);
	};

	const deleteTask = (id) => {
		// 1 Nouveau tableau filtrer sans la tache à supprimer
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				{tasks.map((t, i) => (
					<Card
						containerStyle={
							t.assignTo === "Yeun" ? styles.me : styles.other
						}
					>
						<ListItem key={t.id} bottomDivider>
							<Text>
								<ListItem.Content>
									<Switch
										value={t.done ? true : false}
										color={
											t.assignTo === "Yeun"
												? "#1fb9e0"
												: "orange"
										}
										onChange={() => changeTaskStatus(t.id)}
									/>
									<Button
										title="X"
										onPress={() => deleteTask(t.id)}
									/>
									<ListItem.Title>{t.text}</ListItem.Title>
									<ListItem.Subtitle>
										Créer par {t.author} assigné à{" "}
										{t.assignTo}
									</ListItem.Subtitle>
								</ListItem.Content>
							</Text>
						</ListItem>
					</Card>
				))}

				<TextInput
					onSubmitEditing={() => createTask(text)}
					onChangeText={(text) => setText(text)}
					placeholder="Ecrire une Tache"
					value={text}
					style={styles.input}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	me: {
		backgroundColor: "#1fb9e0",
	},
	other: {
		backgroundColor: "orange",
	},
	input: {
		padding: 6,
		backgroundColor: "grey",
		marginTop: 15,
	},
});
