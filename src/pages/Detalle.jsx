import React from "react"
import Gallery from "../components/Gallery"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import release1 from "../assets/release1.png"
import Image04 from "../assets/Image04.png"
import Image05 from "../assets/Image05.png"
import Image06 from "../assets/Image06.png"

export default function Detalle() {
	return (
		<>
			<div className="home">
				<div className="container card-principal">
					<div className="content col">
						<h1 className="title">Detalle del NFT</h1>
						<h5 className="title">
							Esta obra digital nace como el primer trabajo de Lutin Studios y
							se basa en la vida misma, donde podemos encontrar la gloria y la
							derrota. Esta obra busca representar el tremendo poder que han
							tenido los influencers de redes sociales en el mundo.
						</h5>
						<h5 className="title">
							La creación de este NFT se inspira en la carrera deportiva que ha
							tenido la estrella digital y youtuber Jeake Paul, así como otras
							estrellas de la era digital que han tenido éxito en diversos
							campos y han logrado influir en la vida de muchas personas
							alrededor del mundo.
						</h5>
						<Link to="/detalle">
							<Button className="btn-verNFT">Comprar en OpenSea</Button>
						</Link>
					</div>
					<div className="image">
						<img
							height={400}
							width={400}
							className="d-block w-100"
							src={release1}
							alt="First slide"
						/>
					</div>
					<div className="image">
						<img
							height={856}
							width={400}
							className="d-block w-100"
							src={Image04}
							alt="First slide"
						/>
					</div>
					<div className="image">
						<img
							height={416}
							width={416}
							className="d-block w-100"
							src={Image05}
							alt="First slide"
						/>
						<hr />
						<div className="image">
							<img
								height={416}
								width={416}
								className="d-block w-100"
								src={Image06}
								alt="First slide"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
