// Complete the Index page component here
// Use chakra-ui
import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const numGroups = 5;
    let newCircles = [];
    for (let i = 0; i < numGroups; i++) {
      const numCircles = Math.floor(Math.random() * 5) + 1; // 1 to 5 circles per group
      for (let j = 0; j < numCircles; j++) {
        newCircles.push({
          id: `${i}-${j}`,
          x: Math.random() * 1000,
          y: Math.random() * 1000,
        });
      }
    }
    setCircles(newCircles);
  }, []);

  const handleMouseOver = (id) => {
    setCircles(
      circles.map((circle) => {
        if (circle.id === id) {
          const angle = Math.random() * 2 * Math.PI; // Random angle
          const distance = Math.random() * 70 + 30;
          return {
            ...circle,
            x: circle.x + Math.cos(angle) * distance,
            y: circle.y + Math.sin(angle) * distance,
          };
        }
        return circle;
      }),
    );
  };

  return (
    <Flex wrap="wrap" justifyContent="center" alignItems="center" height="100vh">
      {circles.map((circle) => (
        <Box key={circle.id} onMouseOver={() => handleMouseOver(circle.id)} position="absolute" top={circle.y} left={circle.x} width="20px" height="20px" borderRadius="50%" backgroundColor="blue" cursor="pointer" />
      ))}
    </Flex>
  );
};

export default Index;
