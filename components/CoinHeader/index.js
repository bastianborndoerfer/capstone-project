import Image from "next/image"

export default function CoinHeader({image, symbol, name, price}){
    return (
        <header>
            <Image src={image} alt={name} height={25} width={25} />
            <p>{symbol}</p>
            <p>{price} $</p>
        </header>

    )
}