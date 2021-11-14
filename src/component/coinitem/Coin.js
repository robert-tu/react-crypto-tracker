import React from 'react'
import "./Coin.css"

const Coin = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
    return (
        <div className="cryptoCoin">
            <img src={image} alt={ "$(name)" } className="coinlogo"/>
            <div className="coinNameWrap">
                <h1 className="coinName">{name}</h1>
                <p className="coinSymbols">{symbol}</p>
            </div>
            <p className="coinPrice">${price.toLocaleString()}</p>
            <p className="coinMarketCap">${marketcap.toLocaleString()}</p>
            <p className="coinVolume">${volume.toLocaleString()}</p>
            {priceChange < 0 ?
                    (
                    <div className="priceContainerDown">
                        <i className="fas fa-angle-down fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div>
                    ) 
                : 
                    (
                    <div className="priceContainerUp">
                        <i className="fas fa-angle-up fa-2x"></i>
                        <p className="priceChange">{priceChange.toFixed(2)}%</p>
                    </div>
                    )
            }
        </div>
    )
}

export default Coin
