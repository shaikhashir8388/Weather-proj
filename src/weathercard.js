import React from 'react';

const Weathercard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  // Function to format time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  // Function to format date
  const formatDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={'wi wi-day-sunny'}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}24&deg;</span>
          </div>
          <div className='description'>
            <div className='dition'>{weathermood}</div>
            <div className='place'>
              {name} {country}
            </div>
          </div>
          <div className='date'>{formatDate()}</div>
        </div>

        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftside'>{formatTime(sunset)}</p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftside'>{humidity}</p>
            </div>
          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftside'>{pressure}</p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftside'>{speed}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
