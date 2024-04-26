import { Box, Flex, Heading, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import { FaCalendarDay, FaNewspaper, FaEdit } from "react-icons/fa";

const newsItems = [
  { id: 1, title: "City Council Approves New Park", summary: "The city council has approved the construction of a new park in the downtown area.", icon: FaNewspaper },
  { id: 2, title: "Local School Wins Robotics Competition", summary: "A local high school has won the national robotics competition.", icon: FaNewspaper },
  { id: 3, title: "New Library to Open Next Month", summary: "The new downtown library is set to open next month with state-of-the-art facilities.", icon: FaNewspaper },
];

const editorialItems = [
  { id: 1, title: "The Importance of Community Spaces", summary: "Community spaces play a vital role in urban development and public well-being.", icon: FaEdit },
  { id: 2, title: "Education in the Digital Age", summary: "How digital tools are transforming traditional educational methods.", icon: FaEdit },
];

const eventItems = [
  { id: 1, date: "2023-10-05", event: "Jazz Concert in the Park", icon: FaCalendarDay },
  { id: 2, date: "2023-10-12", event: "Art Exhibition Opening", icon: FaCalendarDay },
];

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl" textAlign="center">Local News Portal</Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Latest News</Heading>
          {newsItems.map(news => (
            <Flex key={news.id} align="center" mt={4}>
              <Box as={news.icon} w={10} h={10} mr={2} />
              <Box>
                <Text fontWeight="bold">{news.title}</Text>
                <Text fontSize="sm">{news.summary}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Editorials</Heading>
          {editorialItems.map(editorial => (
            <Flex key={editorial.id} align="center" mt={4}>
              <Box as={editorial.icon} w={10} h={10} mr={2} />
              <Box>
                <Text fontWeight="bold">{editorial.title}</Text>
                <Text fontSize="sm">{editorial.summary}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading size="md">Community Events</Heading>
          {eventItems.map(event => (
            <Flex key={event.id} align="center" mt={4}>
              <Box as={event.icon} w={10} h={10} mr={2} />
              <Box>
                <Text fontWeight="bold">{event.event}</Text>
                <Text fontSize="sm">{event.date}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Index;