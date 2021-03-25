/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-nocheck

import  React, { useState } from "react";
import {
  Heading,
  Flex,
  Button,
  Input,
  SimpleGrid,
  Container,
  FormControl,
FormLabel,
FormHelperText,
Select,
Textarea,
Modal,
ModalOverlay,
ModalContent
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation'
import { jsx } from '@emotion/react'
import { useDisclosure } from "@chakra-ui/react"

 const ContactForm = () => {

  const [formData, setFormData] = useState({})
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure()

  const updateInput = (e: any) => {
    console.log(e)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log('sdfsd',formData)

  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    sendEmail()
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      inquiryType: ''
    })
    onClose()
  }
  const sendEmail = () => {
    fetch('/api/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: formData.firstName + ' ' + formData.lastName , email: formData.email, inquiry: formData.inquiryType, message: formData.message, time: new Date() })
});

  }

  const contents = [t('contactForm.contents.document'), t('contactForm.contents.online'), t('contactForm.contents.visit'), t('contactForm.contents.other')]



  return(
    <>
    <Button variant="careerButton" mt="10" px="3" onClick={onOpen}>
      {t('button.contactUs')}
    </Button>

    <Modal
    isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent color="black">
    <Container maxWidth="70vw" my="30px">
    <SimpleGrid w="100%" spacingY="20px" spacingX="20px">
    <Heading textAlign="center">{t('contact.contactUs')}</Heading>

      <Flex>
        <FormControl id="firstname"  colorScheme="green" marginRight="10px" name="firstName" isRequired>
          <FormLabel>{t('contact.firstName')}</FormLabel>
          <Input placeholder={t('contact.firstName')} onChange={updateInput}  name="firstName" />
        </FormControl>


        <FormControl id="last-name" marginLeft="10px" isRequired>
          <FormLabel>{t('contact.lastName')}</FormLabel>
          <Input placeholder={t('contact.lastName')}  onChange={updateInput}  name="lastName"/>
        </FormControl>
      </Flex>
        <Flex>
          <FormControl id="email" marginRight="10px"  >
            <FormLabel>{t('contact.email')}</FormLabel>
            <Input type="email" name="email" onChange={updateInput} placeholder={t('contact.email')}/>
            <FormHelperText>{t('contactForm.helperText')}</FormHelperText>
          </FormControl>


        <FormControl id="country" marginLeft="10px">
          <FormLabel>{t('contactForm.inquiry')}</FormLabel>
          <Select placeholder={t('contactForm.selectContent')} onChange={updateInput} name="inquiryType">
            {
              contents.map((content) => {
                return (
                  <option value={content}    name="inquiryType">{content}</option>
                )
              })
            }

          </Select>
        </FormControl>

        </Flex>
        <Textarea
        placeholder={t('contactForm.detail')}
        size="sm"
        name="message"
        onChange={updateInput}
      />
      <Button onClick={(e) => handleSubmit(e)}>{t('contactForm.contactUs')}</Button>



    </SimpleGrid>
    </Container>
    </ModalContent>
  </Modal>
</>
  );

};

export default ContactForm;
