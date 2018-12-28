import React from 'react';
import { Card } from '@material-ui/core';

export default function MovieCard(props) {
	return (
		<Card>
			<img src={'https://image.tmdb.org/t/p/w185' + props.imgSrc} />
			<p>{props.title}</p>
			<p>rating: {props.rating} / 10</p>
		</Card>
	);
}
