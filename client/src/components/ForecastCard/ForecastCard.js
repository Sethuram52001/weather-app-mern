import React from 'react';

const ForecastCard = (key, temp, month, day, hour) => {
    return ( 
        <div className="card">
            <h3 className="card-title">Forecast Card</h3>
            <p className="card-text">month: </p>
        </div>
     );
}
 
export default ForecastCard;

/*
<div class="container">
  <div class="card-columns d-flex justify-content-center">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a longer card with shorter text.</p>
      </div>
    </div>
  </div>
</div>
*/