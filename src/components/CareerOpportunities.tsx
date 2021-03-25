import { Container, Heading, Button, ButtonGroup} from "@chakra-ui/react"
import {
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react"
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation'

export default function CareerOpportunities() {
  const [id, setId] = useState("ALL");
  const { t } = useTranslation('common')

  let careerClick = (idValue: any) => {
    setId(idValue);
  }

  const categories = [t('career.category.all'), t('career.category.pd'), t('career.category.hr'), t('career.category.sales'), t('career.category.accounting')]

  const all =
  [
    {category: t('career.category.pd'), title: t('career.title.pm')},
    {category: t('career.category.pd'), title: t('career.title.developer')},
    {category: t('career.category.hr'), title: t('career.title.generalAffairsManager')},
    {category: t('career.category.hr'), title: t('career.title.generalAffair')},
    {category: t('career.category.sales'), title: t('career.title.sr')},
    {category: t('career.category.sales'), title: t('career.title.sa')},
    {category: t('career.category.accounting'), title: t('career.title.accountManager')},
    {category: t('career.category.accounting'), title: t('career.title.associateInAccounting')}
  ]

  let CareerTable = () => {
    let selectedJob = all.filter((j) => {
      if (id === "ALL")
        return all
      else
        return j.category === id
    })
    return (
      <Table variant="simple" colorScheme="gray">
        <Tbody>
            {
              selectedJob.map((i) => {
                return (
                  <Tr>
                    <Td color={{base: "white", md: "black"}}>{i.title}</Td>
                    <Td textAlign="right"><Button variant="careerButton">{t('button.apply')}</Button></Td>
                  </Tr>
                )
              })
            }
        </Tbody>
      </Table>
    )
  }

  return (

    <Container width="100%" position="relative" color="black" maxW="70%" top={{base: "-1000px", md: "-500px"}}>
      <Heading textAlign="center" my="50px">{t('career.section3.header')}</Heading>
      <ButtonGroup mb="20px" display="flex" flexWrap="wrap" justifyContent="center">
       {categories.map((category) => {
          return(
          <Button onClick={() => careerClick(category)} variant={id === category ? "solid" : "careerButton" }  mb="10px"> {category} </Button>
          )
        })}
      </ButtonGroup>
      <CareerTable />
    </Container>
  )
}
