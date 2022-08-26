
import { FormControl, IFormControlProps, IInputProps, Input, Stack, WarningOutlineIcon } from 'native-base';
import { useMemo } from 'react';
import { Control, Controller, FieldErrorsImpl, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export type InputFieldProps<T extends FieldValues> = IInputProps & {
    control: Control<T>;
    name: Path<T>;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    label?: string;
    formErrors?: FieldErrorsImpl<T>;
    helperText?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    containerStyle?: IFormControlProps;
}

const InputField = <T extends FieldValues>({
    name,
    control,
    rules,
    label,
    formErrors,
    helperText,
    leftIcon,
    rightIcon,
    containerStyle,
    ...rest
}: InputFieldProps<T>) => {
    const error = useMemo(() => formErrors?.[name]?.message, [name, formErrors]);
    const isRequired = useMemo(() => !!rules?.required, [rules]);
    return (
        <FormControl {...containerStyle} isInvalid={!!error} isRequired={isRequired}>
            <Stack mx="4">
                {label && <FormControl.Label>{label}</FormControl.Label>}
                <Controller
                    control={control}
                    name={name}
                    rules={rules}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            {...rest}
                            InputLeftElement={leftIcon}
                            InputRightElement={rightIcon}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}
                />
                {helperText && <FormControl.HelperText pl={2}>
                    {helperText}
                </FormControl.HelperText>}
                {error && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {error}
                </FormControl.ErrorMessage>}
            </Stack>
        </FormControl>
    )
}

export default InputField