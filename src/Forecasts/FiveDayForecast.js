          <section className='five-day-forecast'>
            <h3>Five-Day Forecast</h3>
            {weekToDay.slice(0, 5).map((fc) => {
              return (
                <WeatherCard
                  key={fc.time}
                  weatherObj={fc}
                />
              )
            })}
          </section>