import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coin from './component/coinitem/Coin';

function App() {
  // read state and write state into empty array
  const [coins, setCoins] = useState([]);
  // search state
  const [search, setSearch] = useState("");

  useEffect(() => {
    // get information from coingecko api
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then((res) => {
           setCoins(res.data);
           console.log(res.data);
         })
         .catch((error) => console.error(error));
  }, []);

  // changes search
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLocaleLowerCase()));

  return (
    <div>
      <div className="header">
        <h1 className="brand">Coin<i className="fas fa-rocket"/>2Moon</h1>
        <form>
          <input className="inputField" 
                 type="text" 
                 onChange={handleChange} 
                 placeholder="search a coin"
          />
        </form>
      </div>
      <div className="coinsContainer">
        {filterCoins.map((coin) => {
          return (
            <Coin 
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
