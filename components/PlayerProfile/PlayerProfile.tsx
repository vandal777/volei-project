import React from 'react';
import { Container, Content, Root, Text, Thumbnail, Header } from 'native-base';
import { playerList } from '../../mocks/rankingList';
const PlayerProfile = ({ route }) => {
  const {
    playerId,
    name,
    description,
    points,
    profileImg,
    rankingPosition,
  } = playerList.filter((item) => item.playerId === route.params.playerId)[0];

  return (
    <Root>
      <Container>
        <Content>
          <Thumbnail
            style={{
              marginTop: 20,
              alignSelf: 'center',
              width: 200,
              height: 200,
            }}
            source={{ uri: profileImg }}
          />
          <Text>{playerId}</Text>
        </Content>
      </Container>
    </Root>
  );
};

export default PlayerProfile;
