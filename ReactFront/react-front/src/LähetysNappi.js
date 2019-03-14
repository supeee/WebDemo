import React, { Component } from 'react';

class LähetysNappi extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }



  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }




  lisääAsiakas() {

    let data =
    {
      "customerId": "testo",
      "companyName": "React-demon kautta!",
      "contactName": "mottonen",
      "contactTitle": "Tirehtööri",
      "address": "Web-devauspolku 1",
      "city": "Oulu"
    };

    let url = "https://localhost:44365/api/asiakkaat/";
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    alert("Fetch-pyyntö lähetetty!");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <p></p>
        <button onClick={this.lisääAsiakas} type="button" className="btn btn-primary">Lisää uusi asiakas tietokantaan</button>
        <p></p>
      </div>
    );
  }
}

export default LähetysNappi;