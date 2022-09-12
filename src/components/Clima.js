
const Clima= ({ loadingData, showData, weather, forecast }) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";


    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
    }

    return (
        <div className="mt-5">

            {
                showData === true ? (

                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                    <p className="card-desc"><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body text-start mt-5">
                                        <h2 className="card-text">Temperatura: {(weather.main.feels_like - 273.15).toFixed(1)}ºC</h2>
                                        <h4 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h4>
                                        <h4 className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h4>
                                        <h4 className="card-text">Humedad: {weather.main.humidity}%</h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                ) : (
                    <h2 className="text-dark">Sin datos</h2>
                )
            }
        </div>
    );
}

export default Clima;