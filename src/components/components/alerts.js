function Alerts() {
    return (
      <div className="alerts">
        <div className="alerts_header">
          <h1>Price Alert</h1>
        </div>
        <div className="alerts_form">
          <div className="alerts_form-leftSide">
            <div className="alerts_form-leftSide__phrase">
              Get notified when a coin goes above or below a price target
            </div>
            <div className="alerts_form-leftSide__management">
              <div>
                Send me an email <input type="email" placeholder="Email" /> as
                soon as
              </div>
              <div>
                <select>
                  <option>BTC</option>
                  <option></option>
                  <option></option>
                </select>
                goes
                <select>
                  <option>BTC</option>
                  <option></option>
                  <option></option>
                </select>
                the price of
                <input type="email" placeholder="0.00$" />
              </div>
            </div>
            <div className="alerts_form-leftSide__button">
              <a href="#">
                <i className="far fa-bell"></i>Set Alert
              </a>
            </div>
          </div>
  
          <div className="alerts_form-picture">
              
          </div>
        </div>
      </div>
    );
  }
  
  export default Alerts;
  