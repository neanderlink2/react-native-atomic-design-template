import { zodResolver } from '@hookform/resolvers/zod';
import { Button, VStack } from 'native-base';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../molecules/input-field';
import PasswordField from '../../molecules/password-field';
import { LoginCredentials, loginCredentialsSchema } from './login-credentials.model';

type LoginFormProps = {
    onLogin: (credentials: LoginCredentials) => Promise<void>;
}

const LoginForm = ({
    onLogin
}: LoginFormProps) => {
    const { control, formState: { errors }, handleSubmit } = useForm<LoginCredentials>({
        resolver: zodResolver(loginCredentialsSchema)
    });
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const handleLoginClick = async (data: LoginCredentials) => {
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
            />
            <PasswordField
                label="Senha"
                control={control}
                formErrors={errors}
                name="password"
                containerStyle={{ m: 1 }}
            />

            <Button m={1} isLoading={isLoggingIn} onPress={handleSubmit(handleLoginClick)}>Acessar</Button>
        </VStack>
    )
}

export default LoginForm