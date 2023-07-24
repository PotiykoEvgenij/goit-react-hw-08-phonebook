import React from 'react'
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center" p="4rem">
      <Heading as="h1" size="xl" color="blue.500" mb="2rem">
        Welcome to the Phonebook!
      </Heading>
    </Box>
  )
};
