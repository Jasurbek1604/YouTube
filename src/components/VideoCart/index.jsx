import React from "react";
import { Container } from "./style";

const Index = ({
  value: {
    id,
    title,
    channel,
    views,
    postedAt,
    duration,
    thumbnailUrl,
    videoUrl,
  },
}) => {
  return (
    <Container>
      <h1>Jasurbek Otelbayev</h1>
    </Container>
  );
};

export default Index;
