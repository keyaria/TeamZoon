import { Flex, FlexProps, Heading, Text, Box, Link } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'


export const Footer = ( props: FlexProps) => {

const { t } = useTranslation('common');


return(
  <Flex as="footer"{...props} w="100%"   bg="#0D0D0D" mt="36px" flexWrap="wrap" px="10px">
    <Box  flex="1 1 0" p="10px" >
    <Heading >TeamZoon</Heading>
    <Text>{t('footer.rights')}</Text>

    </Box>
    <Box flex="1 1 0" p="10px" >
    <Heading size="md">
    {t('footer.office.osaka.title')}
    </Heading>
    <Text pb="5px">
  {t('footer.office.osaka.address')}
</Text>
<Heading size="md">
  {t('footer.office.thailand.title')}
</Heading>
<Text>
  {t('footer.office.thailand.address')}
</Text>
    </Box>
    <Box  flex="1 1 0" p="10px" >
    <Heading size="md" fontStyles="mono"><Link href="/career" >Career</Link></Heading>

    </Box>

  </Flex>
)


}
