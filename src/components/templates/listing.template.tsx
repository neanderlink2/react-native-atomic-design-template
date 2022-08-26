import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Flex, Heading, HStack, Icon } from "native-base";
import PageBox from "../atoms/page-box";

type ListingTemplateProps = {
    canGoBack?: boolean;
    listHeader: string;
    list: React.ReactElement;
    endOfList: React.ReactElement;
}

const ListingTemplate = ({
    listHeader,
    list,
    endOfList,
    canGoBack
}: ListingTemplateProps) => {
    const navigation = useNavigation();

    return (
        <PageBox display="flex" flex={1}>
            <HStack alignItems="center">
                {canGoBack && <Icon as={FontAwesome} name="arrow-left" onPress={() => navigation.goBack()} m={2} />}
                <Heading>{listHeader}</Heading>
            </HStack>
            <Flex flex={1}>{list}</Flex>
            <Flex>{endOfList}</Flex>
        </PageBox>
    )
}

export default ListingTemplate