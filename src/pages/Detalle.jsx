import React from "react"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import release1 from "../assets/release1.png"
import Image04 from "../assets/Image04.png"
import Image05 from "../assets/Image05.png"
import Image06 from "../assets/Image06.png"
import NavbarDetalle from "../components/NavbarDetalle"
import fondo from "../assets/Hero_Section2.png"
import { OPENSEA_URL } from "../const"

export default function Detalle() {
	return (
		<>
			<img
				className="imgFondo"
				src={fondo}
				style={{width: "100%", position: "absolute", top: "0", left: "0"}}
				alt=""
			/>
			<NavbarDetalle />
			<div className="home">
				<div className="container card-principal">
					<div className="col">
						<div className="">
							<Link to="/">
								<div className="d-flex align-items-center">
									<svg
										width="20"
										height="20"
										viewBox="0 0 29 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M29.0001 10C29.0001 9.73483 28.8947 9.48047 28.7072 9.29294C28.5196 9.1054 28.2653 9.00004 28.0001 9.00004H4.41408L10.7081 2.70804C10.8011 2.61507 10.8748 2.50469 10.9251 2.38321C10.9754 2.26173 11.0013 2.13153 11.0013 2.00004C11.0013 1.86855 10.9754 1.73835 10.9251 1.61688C10.8748 1.4954 10.8011 1.38502 10.7081 1.29204C10.6151 1.19907 10.5047 1.12531 10.3832 1.075C10.2618 1.02468 10.1316 0.998779 10.0001 0.998779C9.86859 0.998779 9.73839 1.02468 9.61691 1.075C9.49543 1.12531 9.38505 1.19907 9.29208 1.29204L1.29208 9.29204C1.19895 9.38493 1.12507 9.49529 1.07465 9.61678C1.02424 9.73827 0.998291 9.86851 0.998291 10C0.998291 10.1316 1.02424 10.2618 1.07465 10.3833C1.12507 10.5048 1.19895 10.6152 1.29208 10.708L9.29208 18.708C9.38505 18.801 9.49543 18.8748 9.61691 18.9251C9.73839 18.9754 9.86859 19.0013 10.0001 19.0013C10.1316 19.0013 10.2618 18.9754 10.3832 18.9251C10.5047 18.8748 10.6151 18.801 10.7081 18.708C10.8011 18.6151 10.8748 18.5047 10.9251 18.3832C10.9754 18.2617 11.0013 18.1315 11.0013 18C11.0013 17.8686 10.9754 17.7384 10.9251 17.6169C10.8748 17.4954 10.8011 17.385 10.7081 17.292L4.41408 11H28.0001C28.2653 11 28.5196 10.8947 28.7072 10.7071C28.8947 10.5196 29.0001 10.2653 29.0001 10Z"
											fill="#B9BFBF"
										/>
									</svg>
									<p className="mx-3 m-0 volver">Volver</p>
								</div>
							</Link>
						</div>
						<h1 className="title">Detalle del NFT</h1>
						<div className="pe-3">
							<h5 className="title tamanioTexto">
								Esta obra digital nace como el primer trabajo de Lutin Studios y
								se basa en la vida misma, donde podemos encontrar la gloria y la
								derrota. Esta obra busca representar el tremendo poder que han
								tenido los influencers de redes sociales en el mundo.
							</h5>
							<h5 className="title tamanioTexto mt-4">
								La creación de este NFT se inspira en la carrera deportiva que
								ha tenido la estrella digital y youtuber Jeake Paul, así como
								otras estrellas de la era digital que han tenido éxito en
								diversos campos y han logrado influir en la vida de muchas
								personas alrededor del mundo.
							</h5>
						</div>
						
						<Button target="blank" href={OPENSEA_URL} className="btn-verNFT mt-4">Comprar en OpenSea</Button>
						
					</div>
					<div className="tamanioImage">
						<img
							className="d-block tamanioImage"
							src={release1}
							alt="First slide"
						/>
					</div>
					<div className="image">
						<img
							height={856}
							width={400}
							className="d-block w-100 my-4"
							src={Image04}
							alt="First slide"
						/>
					</div>
					<div className="image">
						<img
							height={416}
							width={416}
							className="d-block w-100 my-4"
							src={Image05}
							alt="First slide"
						/>
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
