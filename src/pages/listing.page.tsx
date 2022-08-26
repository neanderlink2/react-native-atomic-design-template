import axios from 'axios';
import { Button, Spinner } from 'native-base';
import React from 'react';
import useSWRInfinite from 'swr/infinite';
import List from '../components/molecules/list';
import AnimeCard from '../components/organisms/anime-card';
import ListingTemplate from '../components/templates/listing.template';

type Response<T> = {
    data: T[];
    pagination: {
        has_next_page: boolean;
    }
}

type Anime = {
    title: string;
    episodes: number;
    synopsis: string;
    season: string;
    year: number;
    images: {
        jpg: {
            image_url: string;
        }
    }
}

const ListingPage = () => {
    const { data, isValidating, setSize, size } = useSWRInfinite<Response<Anime>>(
        (index) => `https://api.jikan.moe/v4/anime?page=${index + 1}&limit=50`,
        async (url) => {
            const response = await axios.get<Response<Anime>>(url);
            return response.data;
        });

    return (
        <ListingTemplate
            canGoBack
            listHeader='Animes'
            list={(
                <>
                    {isValidating && <Spinner />}
                    {data && <List
                        data={data.flatMap(x => x.data)}
                        renderItem={(item) => (
                            <AnimeCard
                                title={item.title}
                                image={item.images.jpg.image_url}
                                synopsis={item.synopsis}
                            />
                        )} />}
                </>
            )}
            endOfList={<Button onPress={() => setSize(size + 1)} isLoading={isValidating}>Carregar mais</Button>}
        />
    )
}

export default ListingPage