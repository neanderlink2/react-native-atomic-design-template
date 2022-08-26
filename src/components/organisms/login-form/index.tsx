import { Button, VStack } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../molecules/input-field';
import PasswordField from '../../molecules/password-field';

type Credentials = {
    email: string;
    password: string;
}

type LoginFormProps = {
    onLogin: (credentials: Credentials) => Promise<void>;
}

const LoginForm = ({
    onLogin
}: LoginFormProps) => {
    const { control, formState: { errors }, handleSubmit } = useForm<Credentials>();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const handleLoginClick = async (data: Credentials) => {
        setIsLoggingIn(true);
        await onLogin(data);
        setIsLoggingIn(false);
    }
    
    return (
        <VStack width={250}>
            <InputField
                name="email"
                label="E-mail"
                control={control}
                formErrors={errors}
                containerStyle={{ m: 1 }}
                rules={{
                    required: {
                        value: true,
                        message: 'Deve preencher o e-mail'
                    },
                    max: {
                        message: 'Máximo de 30 caracteres',
                        value: 30
                    }
                }}
            />
            <PasswordField
                label="Senha"
                control={control}
                formErrors={errors}
                name="password"                
                containerStyle={{ m: 1 }}
                rules={{
                    required: {
                        value: true,
                        message: 'Deve preencher a senha'
                    },
                    min: {
                        value: 6,
                        message: 'Mínimo de 6 caracteres'
                    }
                }}
            />

            <Button m={1} isLoading={isLoggingIn} onPress={handleSubmit(handleLoginClick)}>Acessar</Button>
        </VStack>
    )
}

export default LoginForm