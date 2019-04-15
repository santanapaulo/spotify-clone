import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto ouve um bom rock.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
