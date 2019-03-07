import React, { Component } from 'react';

class Asiakaslista extends Component {

    constructor(props) {
        super(props);

        console.log("Asiakaslista.constructor");
        this.state = { ladattu: false, data: null };
    }

    componentDidMount() {
       
      console.log("Asiakaslista.componentDidMount");
      let komponentti = this;

      fetch('https://localhost:44365/api/asiakkaat')
      .then(response => response.json())
      .then(json => {
       
          console.log("Fetch-kutsu valmis!");
          console.log(json);

          komponentti.setState({ladattu: true, data: json});
          console.log("SetState-rutiinia kutsuttu.");

      });

      console.log("Asiakaslista.componentDidMount: fetch-kutsu tehty");
  }



  render() {
    console.log("Asiakaslista.render");

    if (this.state.ladattu === false) {
        return (
            <div>
                <h1>Odota, ladataan tietoja...</h1>
            </div>
        );
    }
    else
    {

    let asiakkaat = [];
    for (let index = 0; index < this.state.data.length; index++) {
        let nimi = this.state.data[index].companyName
        + "  -  " + this.state.data[index].contactName
        + "  -  " + this.state.data[index].address
        + "  -  " + this.state.data[index].city
        + "  -  " + this.state.data[index].country;
        asiakkaat.push(<h3 style={{color: "orangered"}}>{nimi}</h3>); 
    }


    return (  
    <div>
        {asiakkaat}
    </div>    
    );
  }    
  }
}

export default Asiakaslista;
