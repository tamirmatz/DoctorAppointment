import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { closeCommonModal } from '../store/slices/commonSlice';

interface ModalErrorProps {
	isVisible?: boolean;
	onPressBtnModal?: () => void;
	text: {
		title: string;
		subTitle?: string;
		btn: string;
	};
}

const { width: SW } = Dimensions.get('window');

export const ModalError: React.FC<ModalErrorProps> = ({
	isVisible = false,
	onPressBtnModal = () => {},
	text,
}) => {
	const theme = useTheme();
    const dispatch = useDispatch<AppDispatch>();

    const onCloseModal = () => {
        dispatch(closeCommonModal())
    }

	return (
		<Modal
			style={styles.modalStyle}
			isVisible={isVisible}
			animationOutTiming={700}
			animationInTiming={1000}
			useNativeDriver={true}
		>
			<View style={styles.container}>
				<View style={[styles.modal, { backgroundColor: theme.colors.background }]}>
					<View style={styles.contentContainer}>
						<Text style={{textAlign: 'center', color: '#B00020', fontSize: 20, fontWeight: '600'}} >
							{text.title}
						</Text>
						{text.subTitle ? (
							<Text
                                style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.54)', fontSize: 17, fontWeight: '500', paddingTop: 5}} 
							>
								{text.subTitle}
							</Text>
						) : null}
					</View>
					<TouchableOpacity style={styles.button} onPress={onCloseModal}>
						<Text
							 style={{color: 'rgba(0, 0, 0, 0.87)', fontSize: 16, fontWeight: 'bold'}} 
						>
							{text.btn}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.iconContainer, { backgroundColor: '#B00020' }]}>
                    <Image source={require('../assets/faildIcon.png')} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		width: SW * 0.8,
		aspectRatio: 296 / 174,
		alignItems: 'flex-start',
	},
	modal: {
		width: SW * 0.8,
		aspectRatio: 296 / 145,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 19 },
		shadowOpacity: 0.3,
		shadowRadius: 38,
		borderRadius: 5,
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'space-around',
        padding: 10
	},
	contentContainer: {
		height: '50%',
		aspectRatio: 260 / 54,
		marginTop: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {

	},
	iconContainer: {
		position: 'absolute',
		alignSelf: 'center',
		flexDirection: 'row',
		width: SW * 0.155,
		height: SW * 0.155,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: SW * 0.155 / 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 7 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 3,
	},
});

export default memo(ModalError);