import React, { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';

import Api from '../../Api';

import SignInput from "../../components/SignInput";
import SignInput2 from "../../components/SignInput2";
//import auth from '@react-native-firebase/auth';
export default () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
// //auth()
//   .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });

    const handleSignClick = () =>{
        console.log(email,password)
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name:'SignUp'}]
        });
    } 

    return (
        <Container>
            <Image width="100%" height="160" source={require("../../assets/Logo4.png")}/>

            <InputArea>
                <SignInput onChangetext1={setEmail}/>
                <SignInput2 onChangetext2={setPassword}/>

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}