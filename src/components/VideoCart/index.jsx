import React from "react";
import {
  Container,
  A,
  Poster,
  Title,
  Logo,
  Bottom,
  Span,
  None,
  Words,
} from "./style";
import { formatTimeAgo } from "../../utils/timeFormat";

const Index = ({
  value: { title, channel, views, postedAt, thumbnailUrl, videoUrl },
}) => {
  console.log(postedAt);
  return (
    <Container>
      <A href={videoUrl}>
        <Poster src={thumbnailUrl} />
        <Words>
          <Logo src={channel.profileUrl} />
          <None>
            <Title>{title}</Title>
            <Span>{channel.name}</Span>
            <Bottom>
              <Span>{views}</Span>
              <Span>{formatTimeAgo(postedAt)}</Span>
            </Bottom>
          </None>
        </Words>
      </A>
    </Container>
  );
};

export default Index;
