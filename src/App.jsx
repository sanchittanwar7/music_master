import React, { Component } from 'react';
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Profile from './Profile'
import TopTracks from './TopTracks'
import TopAlbums from './TopAlbums'
import SimilarArtists from './SimilarArtists'
import TopCountryArtists from './TopCountryArtists'
import TopCountryTracks from './TopCountryTracks'
import TopGlobalTracks from './TopGlobalTracks'
import TopGlobalArtist from './TopGlobalArtist'
import { bake_cookie, read_cookie} from 'sfcookies';

class App extends Component {
	constructor(props){
		super(props);
		// let countryName;

		this.state = {
			query: '',
			artist: null,
			stats: null,
			bio: null,
			tracks: [],
			images: [],
			albums: [],
			similars: [],
			top_artists: [],
			top_tracks: [], 
			top_country_artists: [],
			top_country_tracks: [],
			countryName: '',
			regionName: ''
		}


	}

	// defaultSearch(){
	// 	const TOP_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + this.state.countryName + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
	// 	const TOP_TRACKS_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=' + this.state.countryName + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
	// 	console.log (TOP_TRACKS_URL);
	// 	fetch(TOP_ARTIST_URL, {
	// 		method: 'GET'
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		const top_artists = json.topartists;
	// 		this.setState ({top_artists: top_artists.artist});
	// 	})

	// 	fetch(TOP_TRACKS_URL, {
	// 		method: 'GET'
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		const top_tracks = json.tracks;
	// 		this.setState({top_tracks: top_tracks.track});
	// 	})
	// }

	search(){
		// console.log('this.state', this.state.query);
		let BASE_URL = 'http://ws.audioscrobbler.com/2.0/?method=' ;
		let artist = read_cookie('artist');

		let FETCH_URL = BASE_URL + 'artist.getinfo&artist=' + artist + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json';
		// console.log('FETCH_URL', FETCH_URL);
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			const artist = json.artist;
			// console.log('artist', artist);
			this.setState({artist, stats: artist.stats, bio: artist.bio, images: artist.image});
		});

		FETCH_URL = BASE_URL + 'artist.gettoptracks&artist=' + artist + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=10'
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			// console.log('top album', json);
			const tracks = json.toptracks;
			this.setState({tracks: tracks.track});
		});

		FETCH_URL = BASE_URL + 'artist.gettopalbums&artist=' + artist + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=10'
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			const albums = json.topalbums;
			this.setState({albums: albums.album});
		});

		FETCH_URL = BASE_URL + 'artist.getsimilar&artist=' + artist + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
		fetch(FETCH_URL, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => {
			// console.log('related artist', json);
			const similar = json.similarartists;
			this.setState({similars: similar.artist});
		});
	}

	changeArtist(similarArtist) {
		bake_cookie('artist', similarArtist);
		this.search();
		// this.setState({query: similarArtist}, function(){
		// 			this.search();

		// });
	}

	// componentDidMount() {
		
	// 	// if (this.state.countryName !== '')
	// 		this.defaultSearch(); 
		

	// }

	componentWillMount(){
		var url = 'https://freegeoip.net/json/';
	    fetch(url)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        // console.log(responseJson);
	        this.setState({
	          countryName: responseJson.country_name
	          
	        }, function(){
	        	const TOP_GLOBAL_ARTISTS_URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
	        	const TOP_GLOBAL_TRACKS_URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
	        	const TOP_COUNTRY_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + this.state.countryName + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
				const TOP_COUNTRY_TRACKS_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=' + this.state.countryName + '&api_key=4d83aea4aa7a08a5affb90aa7dcf37a6&format=json&limit=5'
				// console.log (TOP_TRACKS_URL);
				fetch(TOP_GLOBAL_ARTISTS_URL, {
					method: 'GET'
				})
				.then(response => response.json())
				.then(json => {
					// console.log(json);
					const top_artists = json.artists;
					this.setState ({top_artists: top_artists.artist});
				})

				fetch(TOP_GLOBAL_TRACKS_URL, {
					method: 'GET'
				})
				.then(response => response.json())
				.then(json => {
					// console.log(json);
					const top_tracks = json.tracks;
					this.setState ({top_tracks: top_tracks.track});
				})

				fetch(TOP_COUNTRY_ARTIST_URL, {
					method: 'GET'
				})
				.then(response => response.json())
				.then(json => {
					// console.log(json);
					const top_artists = json.topartists;
					this.setState ({top_country_artists: top_artists.artist});
				})

				fetch(TOP_COUNTRY_TRACKS_URL, {
					method: 'GET'
				})
				.then(response => response.json())
				.then(json => {
					const top_tracks = json.tracks;
					this.setState({top_country_tracks: top_tracks.track});
				})
	        });
	      })
	      .catch((error) => {
	       //console.error(error);
	      });

	    console.log(this.state.countryName)
	    this.search();
	}

	render() {
		return (
			<div className = "App">
				<div className = "App-title" onClick = {event => {this.setState({artist: null, query: ''});
														bake_cookie('artist', '')}}>Music Master</div>
				<FormGroup>
					<InputGroup>
						<FormControl
							type = "text"
							placeholder = "Search for an artist"
							value = {this.state.query}
							onChange = {event => {this.setState({query: event.target.value});
						                           bake_cookie('artist', event.target.value)}}
							onKeyPress = { event => {
								if(event.key === 'Enter'){
									this.search();
								}
							}}
						/>
						<InputGroup.Addon className =  "searchButton" onClick = {() => this.search()}>
							<Glyphicon glyph = "search"></Glyphicon>
						</InputGroup.Addon>
					</InputGroup>
				</FormGroup>
				{
					this.state.artist !== null
					?
						<div>
							<Profile
								artist = {this.state.artist}
								stats = {this.state.stats}
								bio = {this.state.bio}
								tracks = {this.state.tracks}
								images = {this.state.images}
							/>
							<TopTracks
								tracks = {this.state.tracks}
							/>
							<TopAlbums
								albums = {this.state.albums}
							/>
							<SimilarArtists
								similars = {this.state.similars}
								editArtist = {this.changeArtist.bind(this)}
							/>
						</div>
					:	<div>
							<TopCountryArtists
								countryName = {this.state.countryName}
								artists = {this.state.top_country_artists}
								editArtist = {this.changeArtist.bind(this)}
							/>
							<TopCountryTracks 
								countryName = {this.state.countryName}
								countryTracks = {this.state.top_country_tracks}
							/>
							<TopGlobalArtist
								artists = {this.state.top_artists}
								editArtist = {this.changeArtist.bind(this)}
							/>
							<TopGlobalTracks 
								globalTracks = {this.state.top_tracks}
							/>
						</div>
				}


			</div>
		)
	}
}

export default App;
