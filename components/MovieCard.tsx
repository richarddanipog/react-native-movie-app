import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import { Link } from 'expo-router';

const MovieCard: FC<Movie> = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/FFFFFF.png',
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
