import React from "react"
import {Link} from "react-router-dom"
import lupinstudios from "../assets/Logo_Brand.png"
import NavbarBlog from "../components/NavbarBlog"
import "../sass/sections/_blogDetail.scss"
import fondo from "../assets/Hero_Section2.png";

export default function Detalle() {
	const backgroundImage = {
		backgroundImage: `url(
			"https://cdn.banklesstimes.com/tr:fo-auto,f-auto,w-1024,h-496/uploads/2022/04/1650880526-nft%20astronaut.jpg"
		)`,
	}
	return (
		<>
			<img className="imgFondo" src={fondo} style={{width:"100%", position:"absolute", top:"0", left:"0"}} alt="" />
			<NavbarBlog />
			<div className="home">
				<div className="card-principal">
					<Link to="/">
						<div className="d-flex">
							<svg
								width="29"
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
							<p className="mx-3">Volver</p>
						</div>
					</Link>
					<div className="content col">
						<h1 className="title">¿Qué es un NFT?</h1>
						<div
							className="imagen_principal_blog my-4"
							style={backgroundImage}></div>
						<div className="d-flex logo_edit">
							<div className="container_imagen_logo d-flex align-items-end"></div>
						</div>
						<div className="">
							<div className="d-flex justify-content-center row">
								<div className="mx-4 col-md-2 text-end">
									<img
										height={100}
										width={100}
										className="img-fluid rounded-circle w-50"
										src={lupinstudios}
										alt="First slide"
									/>
								</div>
								<div className="col-md-8 d-flex flex-column justify-content-end">
									<h3 className="text-start title">Lupin Studios</h3>
									<p className="text-start">19/07/2022 Tiempo lectura: 1 min</p>
								</div>
							</div>
							<div className="d-flex justify-content-center row">
								<div className="col-md-2 mx-4"></div>
								<div className="col-md-8">
									<div className="my-4 w-75">
										<p className="text_edit">
											Los NFT o Token No Fungible son un tipo de activo digital
											que puede ser adquirido o traspasado a cambio de
											criptomonedas. Como su nombre indica, es un activo no
											fungible, lo que quiere decir que es un activo único que
											no puede ser reemplazado por otro. Por ejemplo, un
											criptoactivo tradicional como sería el bitcoin (BTC) opera
											de forma similar al dinero, 1 BTC puede ser reemplazo por
											otro BTC sin mayor problema. Sin embargo, un NFT no puede
											ser reemplazado por otro NFT. Con ello, surge el valor de
											los NFT como activos únicos o piezas de arte digital
											coleccionables. Estas piezas tienen un certificado de
											autenticidad en la blockchain, donde toda la red valida la
											creación y la propiedad del activo digital, con lo cual se
											asegura que su propietario tenga derecho a monetizar este
											artículo.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
