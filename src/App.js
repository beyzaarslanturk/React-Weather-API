import axios from "axios"
import { useEffect, useState } from "react"
import './App.css';
import City from "./City";

function App() {
  const key = "8c29e00762000d22729faf7548ef2c09";
  const [search, setSearch] = useState("istanbul");
  const [city, setCity] = useState();
  const [background, setBackground] = useState('');


  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);

        if (response.data.main.temp < 10) {
          setBackground('rgb(115 115 115)');
        } else if (response.data.main.temp < 20) {
          setBackground('rgb(251 146 60)');
        } else {
          setBackground('rgb(194 65 12)');
        }
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);



return (

  <div className="flex items-center h-screen" style={{ backgroundColor: background }}>
    <div className="weather-app bg-orange-50 flex flex-col justify-center items-center h-96 max-h-full gap-y-16 w-screen mx-20">
      <div className="weather-input">
        <input type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Please enter city"
          className="font-mono py-3 px-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-sm border-2 border-orange-300 shadow outline-none focus:outline-none w-60"
        />
      </div>
      <div className="weather-city">
        <City city={city} />
      </div>

    </div>
  </div>


);
}

export default App;
