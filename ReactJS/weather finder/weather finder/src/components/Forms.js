import React from 'react';


const Form = props => (
            <div onSubmit={props.getWeather}>
            <form>
                <input type="text" name="city" placeholder="City.." />
                <input type="text" name="country" placeholder="Country.." />
                <button>Get weather</button>
            </form>

            </div>
        )

export default Form