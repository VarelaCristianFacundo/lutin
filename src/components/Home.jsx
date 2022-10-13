import React from "react"
import release1 from "../assets/release1.png"
import Image05 from "../assets/Image05.png"
import Image06 from "../assets/Image06.png"
import {Button, Carousel} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function Home() {
	return (
		<div className="home">
			<div className="container card-principal">
				<div className="content col">
					<h1 className="title">Conoce nuestro primer lanzamiento</h1>
					<Link to="/detalle">
						<Button className="btn-verNFT">Ver NFT</Button>
					</Link>
				</div>
				<div className="image-container">
					<div className="image">
						<Carousel>
							<Carousel.Item>
								<img
									height={400}
									width={"auto"}
									className="d-block w-100"
									src={release1}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									height={400}
									width={"auto"}
									className="d-block w-100"
									src={Image05}
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									height={400}
									width={"auto"}
									className="d-block w-100"
									src={Image06}
									alt="Second slide"
								/>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
				<Link to="/detalle">
					<Button className="btn-mobile">Ver NFT</Button>
				</Link>
			</div>
		</div>
	)
}
