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
            <ScrollView>
            <View>
				{options.map(item => {
					return (
						<View key={item.id} style={styles.buttonContainer}>
							<Text style={styles.text}>{item.categoryName}</Text>
							<TouchableOpacity
								style={styles.circle}
								onPress={() => {
									this.setState({
										value: item.id,
									});
								}}
							>
								{value === item.id && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
            </ScrollView>
			
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
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#42b549',
	},
});