import React from "react"
import eth2 from "../assets/eth2.png"
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
								src={eth2}
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
							Si bien adquirir un NFT es tan simple como conseguir
							criptomonedas, buscar un NFT y comprarlo, en un comienzo puede ser
							complejo ya que implica entender todo este nuevo ecosistema. Por
							ello, resumimos los pasos generales que debes seguir para que no
							te pierdas en el camino a adquirir ese anhelado activo digital que
							buscas:
						</h5>
						<h5 className="title">
							1. Crea una cuenta en un exchange o broker cripto para adquirir
							tus criptomonedas. Los Exchange más conocidos son: Coinbase y
							Binance. En estas plataformas puedes adquirir tus criptomonedas
							con depósitos desde tu banco, tarjeta de débito/crédito o incluso
							puedes intercambiarlas con otros usuarios.
						</h5>
						<h5 className="title">
							2. Adquiere criptomonedas dentro de tu exchange. Una decisión
							importante es elegir cuál de las distintas criptomonedas vas a
							utilizar. La más reconocida en el mundo de los NFT es Etherum,
							pero adolece de elevados costos de transacción (gas-price). Como
							alternativa puedes adquirir Polygon o Solana, las cuales tienen
							costos de transacción mucho más bajos, pero debes tener presente
							que la criptomoneda a utilizar dependerá de la red (blockchain) en
							la que se encuentre el NFT que quieras adquirir.
						</h5>
						<h5 className="title">
							3. Abre una billetera cripto. Te recomendamos utilizar Metamask
							(para Etherum o Polygon) o bien usar Panthom (la billetera de
							Solana). Estas billeteras te permiten conectarte con las
							plataformas donde se transan los NFT. Para poder utilizar tu
							billetera debes transferir las criptomonedas desde tu Exchange a
							la dirección de tu billetera para que cuentes con fondos.
						</h5>
						<h5 className="title">
							4. Conecta tu billetera al marketpalce de NFT que prefieras. Un
							Marketplace de NFTs es básicamente donde se compran y venden estos
							activos digitales, facilitando la adquisición de estos. Lo que
							debes hacer es conectar tu billetera cripto con tus credenciales.
							Esto es similar a iniciar sesión con tu cuenta de usuario y
							password, pero el inicio de sesión se realiza en tu billetera, la
							cual se conectará automáticamente con el marketplace.
						</h5>
						<h5 className="title">
							5. Compra tu NFT. Para comprar un NFT puedes hacerlo por medio de
							una subasta, un método habitual para adquirir NFTs, o bien
							realizar la compra de manera directa con el vendedor, si tienes
							fondos suficientes en tu billetera podrás adquirir los NFTs.
						</h5>
					</div>
				</div>
			</div>
		</>
	)
}
