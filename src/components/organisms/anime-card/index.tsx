import { Avatar, Box, Text } from 'native-base';
import React from 'react';
import Card from '../../atoms/card';

type AnimeCardProps = {
    image: string;
    title: string;
    synopsis: string;
}

const AnimeCard = ({
    image,
    synopsis,
    title
}: AnimeCardProps) => {
    return (
        <Card m={4}>
            <Avatar
                source={{ uri: image }}
                rounded="lg"
            />
            <Box>
                <Text fontWeight="bold">{title}</Text>
                <Text fontSize="sm" noOfLines={5}>{synopsis}</Text>
            </Box>
        </Card>
    )
}

export default React.memo(AnimeCard);