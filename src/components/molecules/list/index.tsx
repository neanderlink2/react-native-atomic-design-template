import { FlashList } from '@shopify/flash-list';
import React from 'react';

type ListProps<T> = {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactElement;
    estimatedItemSize?: number;
    onEndReached?: () => void | Promise<void>;
}

const List = <T extends object>({
    data,
    renderItem,
    estimatedItemSize,
    onEndReached
}: ListProps<T>) => {
    return (
        <FlashList
            data={data}
            renderItem={({ item, index }) => renderItem(item, index)}
            estimatedItemSize={estimatedItemSize ?? 200}
            onEndReached={onEndReached}
        />
    )
}

export default List