import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
	const [weight, setWeight] = useState(0.0);
	const [height, setHeight] = useState(0);
	const [result, setResult] = useState(0.0);
	const [errorMessage, setErrorMessage] = useState("");

	function calculateBMI() {
		const bmi = weight / (height * height);
		checkBMI(bmi);
		setWeight(0);
		setHeight(0);
	}

	function checkBMI(bmi) {
		if (bmi > 25) {
			setErrorMessage("Túl nagy a testtömegindex!");
		} else if (bmi < 18) {
			setErrorMessage("Túl kicsi a testtömegindex!");
		} else if (bmi > 18 && bmi < 25) {
			setErrorMessage("");
			setResult(bmi.toFixed(2));
			return;
		} else {
			setErrorMessage("A testtömegindexet nem sikerült kiszámítani!");
		}

		setResult("Hiba!");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Testtömegindex Számolása</Text>
			<View>
				<View style={styles.containerBorder}>
					<Text style={styles.inputTitle}>Testtömeg (kg)</Text>
					<TextInput
						value={weight}
						onChangeText={setWeight}
						style={styles.input}
					/>
					<Text style={styles.inputTitle}>Testmagasság (méter)</Text>
					<TextInput
						value={height}
						onChangeText={setHeight}
						style={styles.input}
					/>
				</View>
				<Pressable style={styles.button} onPress={calculateBMI}>
					<Text style={styles.buttonText}>Számítás</Text>
				</Pressable>
				<View style={styles.containerBorder}>
					<Text style={styles.inputTitle}>Testtömegindex</Text>
					<TextInput style={styles.input} value={result} editable={false} />
					<Text style={styles.errorMessage}>{errorMessage}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
		padding: 20,
	},
	containerBorder: {
		alignItems: "center",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		shadowColor: "#aaa",
		shadowOffset: {
			width: 4,
			height: 4,
		},
		shadowRadius: 12,
	},
	title: {
		fontSize: 30,
		textAlign: "center",
		marginBottom: 20,
	},
	inputTitle: {
		fontSize: 20,
	},
	input: {
		backgroundColor: "#e8e8e8",
		fontSize: 15,
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		width: 200,
	},
	button: {
		width: "100%",
		height: 40,
		backgroundColor: "white",
		alignSelf: "center",
		justifyContent: "center",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		marginVertical: 15,
	},
	buttonText: {
		fontSize: 18,
		textAlign: "center",
	},
	errorMessage: {
		fontSize: 15,
		color: "red",
		textAlign: "center",
	},
});
