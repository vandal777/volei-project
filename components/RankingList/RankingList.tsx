import React from 'react';
import { playerList, IPlayer } from '../../mocks/rankingList';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Root,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';

const RankingList = () => {
  const navigation = useNavigation();

  return (
    <Root>
      <Container>
        <Content>
          <List>
            {playerList.map(
              ({
                name,
                profileImg,
                rankingPosition,
                points,
                playerId,
              }: IPlayer) => (
                <ListItem
                  thumbnail
                  key={rankingPosition + name}
                  onPress={() =>
                    navigation.navigate('PlayerProfile', {
                      playerId,
                    })
                  }
                >
                  <Left>
                    <Thumbnail square source={{ uri: profileImg }} />
                  </Left>
                  <Body>
                    <Text>{name}</Text>
                    <Text note numberOfLines={1}>
                      {points}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>{rankingPosition}</Text>
                    </Button>
                  </Right>
                </ListItem>
              )
            )}
          </List>
        </Content>
      </Container>
    </Root>
  );
};

export default RankingList;
