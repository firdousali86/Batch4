import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {movieActions} from '../../features/movie/movieSlicer';
import {kApiGetPopularMovies} from '../../config/WebService';
import {useDispatch, useSelector} from 'react-redux';

const {request} = movieActions;

const TestSSLPinning = () => {
  const movies = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(request({url: kApiGetPopularMovies}));
  }, []);

  return (
    <View>
      <FlatList
        data={movies?.data}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 5, backgroundColor: 'pink'}}>
              <Text>{item.title}</Text>
              <Text>{item.original_title}</Text>
              <Text>{item.overview}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestSSLPinning;

const styles = StyleSheet.create({});
