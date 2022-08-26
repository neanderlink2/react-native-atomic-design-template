import { Box, Center } from "native-base";
import Card from "../atoms/card";
import PageBox from "../atoms/page-box";

type LoginTemplateProps = {
    header: React.ReactElement;
    form: React.ReactElement;
    bottomInformation: React.ReactElement;
}

const LoginTemplate = ({
    header,
    form,
    bottomInformation
}: LoginTemplateProps) => {
    return (
        <PageBox>
            <Card>
                <Center>
                    <Box p={4} mb={2}>
                        {header}
                    </Box>
                    <Center p={4} width={500}>
                        {form}
                    </Center>
                    <Box p={4} mt={2}>
                        {bottomInformation}
                    </Box>
                </Center>
            </Card>
        </PageBox>
    )
}

export default LoginTemplate