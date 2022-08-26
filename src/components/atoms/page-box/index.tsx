import { Box } from 'native-base';
import { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box';
import React from 'react';

type PageBoxProps = InterfaceBoxProps & {

}

const PageBox = ({
    ...rest
}: PageBoxProps) => {
    return (
        <Box {...rest} safeArea p={3} />
    )
}

export default PageBox