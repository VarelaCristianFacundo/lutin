import React from "react"
import eth1 from "../assets/eth1.png"
import lupinstudios from "../assets/lupinstudios.png"

export default function Detalle() {
	return (
		<>
			<div className="home">
				<div className="container card-principal">
					<div className="content col">
						<h1 className="title">¿Qué es un NFT?</h1>
						<div className="image">
							<img
								height={400}
								width={400}
								className="d-block w-100"
								src={eth1}
								alt="First slide"
							/>
						</div>
						<div className="image">
							<img
								height={120}
								width={400}
								className="d-block w-100"
								src={lupinstudios}
								alt="First slide"
							/>
						</div>
						<h5 className="title">
							Los NFT o Token No Fungible son un tipo de activo digital que
							puede ser adquirido o traspasado a cambio de criptomonedas. Como
							su nombre indica, es un activo no fungible, lo que quiere decir
							que es un activo único que no puede ser reemplazado por otro. Por
							ejemplo, un criptoactivo tradicional como sería el bitcoin (BTC)
							opera de forma similar al dinero, 1 BTC puede ser reemplazo por
							otro BTC sin mayor problema. Sin embargo, un NFT no puede ser
							reemplazado por otro NFT. Con ello, surge el valor de los NFT como
							activos únicos o piezas de arte digital coleccionables. Estas
							piezas tienen un certificado de autenticidad en la blockchain,
							donde toda la red valida la creación y la propiedad del activo
							digital, con lo cual se asegura que su propietario tenga derecho a
							monetizar este artículo.
						</h5>
					</div>
				</div>
			</div>
		</>
	)
}
