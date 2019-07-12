import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

export default class RadioButtons extends Component {
	state = {
		value: null,
	};

	render() {
		const { options } = this.props;
		const { value } = this.state;

		return (
            <View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							<Text style={styles.text}>{item.text}</Text>
							<TouchableOpacity
								style={styles.circle}
								onPress={() => {
									this.setState({
										value: item.key,
									});
								}}
							>
								{value === item.key && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
						</View>
					);
				})}
			</View>			
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#808080'
    },
    text: {
        fontWeight:'bold'
    },
	circle: {
		height: 30,
		width: 30,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#42b549',
		alignItems: 'center',
		justifyContent: 'center',
	},
  
	checkedCircle: {
		width: 25,
		height: 25,
		borderRadius: 12,
		backgroundColor: '#42b549',
	},
});