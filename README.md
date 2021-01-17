
<img src="https://www.maddieg.ca/shoppies/static/media/logo.698e2c2a.png"  width="700" >

Hey there - welcome to *The Shoppies*, built with love by Maddie G!

You can see my app online here: **[www.maddieg.ca/shoppies.](www.maddieg.ca/shoppies)**

And read more about me here: [www.maddieg.ca/shopify.](www.maddieg.ca/shopify)

### What I Did
I built [The Shoppies](www.maddieg.ca/shoppies)  for the 2021 Shopify Front-End Developer Intern Challenge. It's an app to help manage movie nominations for the upcoming Shoppies awards!

*The Shoppies* allows a user to...

Search the [OMDB](http://www.omdbapi.com/) for movies:
<img src="https://www.maddieg.ca/shopify/assets/img/portfolio/shop/1.png"  width="650" >

Nominate their favourite films, view their nomination list, and remove nominations if they change their mind:
<img src="https://www.maddieg.ca/shopify/assets/img/portfolio/shop/2.png"  width="650" >

Once they've selected 5 nominees, they're notified with a super-cool alert! 
<img src="https://www.maddieg.ca/shopify/assets/img/portfolio/shop/3.png"  width="650" >

### How I Did It
<i>The Shoppies</i>  is a React app. I took advantage of the [Material-UI](https://material-ui.com/) framework for some nifty UI components. To keep things simple, I used the [React Context API](https://reactjs.org/docs/context.html) to store the user's nomination data in this format:

    [
	    {
		    "imdb": "tt0095016",
		    "title": "Die Hard",
		    "year": "1988",
		    "poster": "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
	    },
	    {
		    "imdb": "tt0099423",
		    "title": "Die Hard 2",
		    "year": "1990",
		    "poster": "https://m.media-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
	    },
	    {
		    "imdb": "tt0112864",
		    "title": "Die Hard with a Vengeance",
		    "year": "1995",
		    "poster": "https://m.media-amazon.com/images/M/MV5BZjI0ZWFiMmQtMjRlZi00ZmFhLWI4NmYtMjQ5YmY0MzIyMzRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
	    }
    ]

### The Future of The Shoppies!
To glow up The Shoppies, I would...
- Include more information about each movie by hitting the OMDB API again. I noticed that if you search using a movie's specific IMDB ID, you can retrieve more details about the film like the cast, plot description, ratings, and more!
- Make user nominations persistent by taking advantage of the browser's local storage, or by using Redux to enable state persistence.
