import React from "react";
import NavBar from './Navbar.js'
import Jumbotron from './Jumbotron.js'
import Card from './Card.js'
import Footer from './Footer.js'

//create your first component
const Home = () => {
	return (
		<div className="container-fluid g-0">
			<NavBar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className='row gx-5'>
					<Card
					title="Card title"
					imageUrl="http://via.placeholder.com/500x325"
					buttonUrl = "#"
					buttonLabel = "Find Out More!"
					description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					/>
					<Card
					title="Card title"
					imageUrl="http://via.placeholder.com/500x325"
					buttonUrl = "#"
					buttonLabel = "Find Out More!"
					description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
					/>
					<Card
					title="Card title"
					imageUrl="http://via.placeholder.com/500x325"
					buttonUrl = "#"
					buttonLabel = "Find Out More!"
					description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque."
					/>
					<Card
					title="Card title"
					imageUrl="http://via.placeholder.com/500x325"
					buttonUrl = "#"
					buttonLabel = "Find Out More!"
					description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
