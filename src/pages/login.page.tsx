import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, Heading } from 'native-base'
import React from 'react'
import LoginForm from '../components/organisms/login-form'
import LoginTemplate from '../components/templates/login.template'
import { RootStackParamList } from '../routes'

type LoginPageNavigationProp = NativeStackNavigationProp<RootStackParamList, '/login'>;

const LoginPage = () => {
    const navigation = useNavigation<LoginPageNavigationProp>();
    return (
        <LoginTemplate
            header={<Heading>Seja bem-vindo</Heading>}
            form={(
                <LoginForm
                    onLogin={async (data) => {
                        await new Promise((resolve) => setInterval(resolve, 2000));
                        console.log('data => ', data);
                        navigation.navigate("/listing");
                    }}
                />
            )}
            bottomInformation={<Button variant="link">Esqueceu sua senha?</Button>}
        />
    )
}

export default LoginPage