import { Flex, IFlexProps, useColorModeValue } from 'native-base';

const Card = ({
    ...rest
}: IFlexProps) => {
    const bgColor = useColorModeValue("gray.100", "gray.900");
    
    return (
        <Flex p={3} borderRadius="md" bg={bgColor} shadow="2" {...rest} />
    )
}

export default Card