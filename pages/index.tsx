import { Heading, Center, Text } from '@chakra-ui/react';
import { PageWrap } from '../components/PageWrap';

const IndexPage: React.FC = () => (
  <PageWrap>
    <Center h="100vh" flexDirection="column">
      <Heading as="h1">Hi! I'm Luisetelo 👋🏻 and this is my website ☕️</Heading>
      <Text>(It is still under construction 😅)</Text>
    </Center>
  </PageWrap>
);

export default IndexPage;
