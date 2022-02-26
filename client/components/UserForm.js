import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { updateUser } from '../services/UserServices';
import { AntDesign } from '@expo/vector-icons'; 


const UserForm = ({user, setUpdatedUser, closeModal}) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password
        }
    });
    const onSubmit = data => updateUser(data).then(data => {setUpdatedUser(data); closeModal()});

    return (
        <View>
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="username"
            />
            {errors.userName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="lastName"
            />
            {errors.lastName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="phoneNumber"
            />
            {errors.phoneNumber && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="email"
            />
            {errors.email && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                />
                )}
                name="password"
            />
            {errors.password && <Text>This is required.</Text>}

            <View style={styles.button_container}>
                <AntDesign style={{paddingRight:10}} name="checkcircleo" size={30} color="#f5c517" onPress={handleSubmit(onSubmit)}/>
                <AntDesign style={{paddingLeft:10}} name="closecircleo" size={30} color="#5799ef" onPress={() => closeModal()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: '#10161d',
      color: 'white',
      height: 32,
      padding: 10,
      marginVertical: 3,
      borderRadius: 7,
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10    }
  });

export default UserForm;