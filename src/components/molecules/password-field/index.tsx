
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'native-base';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import InputField, { InputFieldProps } from '../input-field';

type PasswordFieldProps<T extends FieldValues> = InputFieldProps<T>;

const PasswordField = <T extends FieldValues>({
    name,
    control,
    label,
    ...rest
}: PasswordFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => setShowPassword((prev) => !prev);

    return (
        <InputField
            {...rest}
            name={name}
            control={control}
            label={label}            
            rightIcon={<Icon as={FontAwesome} name={showPassword ? "eye" : "eye-slash"} onPress={toggleVisibility} mr={2} />}
            secureTextEntry={!showPassword}
        />
    )
}

export default PasswordField