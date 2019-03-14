import React, { Component } from 'react';
import Navigaatio from './Navigaatio';

class TuoteLista extends Component {

    constructor(props) {
        super(props);

        console.log("TuoteLista.constructor");
        this.state = { ladattu: false, data: null };
    }

    componentDidMount() {

        console.log("Tuote.componentDidMount");
        let komponentti = this;

        fetch('https://localhost:44365/api/tuotteet')
            .then(response => response.json())
            .then(json => {

                console.log("Fetch-kutsu valmis!");
                console.log(json);

                komponentti.setState({ ladattu: true, data: json });
                console.log("SetState-rutiinia kutsuttu.");

            });

        console.log("Tuote.componentDidMount: fetch-kutsu tehty");
    }

    render() {
        console.log("TuoteLista.render");

        if (this.state.ladattu === false) {
            return (
                <div>
                    <h1>Odota, ladataan tuotteiden tietoja...</h1>
                </div>
            );
        }
        else {

            let tuotteet = [];
            for (let index = 0; index < this.state.data.length; index++) {
                let tuotenimi = this.state.data[index].productName;
                let tuotehinta = this.state.data[index].unitPrice;
                let tuotemaara = this.state.data[index].unitsInStock;

                tuotteet.push(
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{tuotenimi}</td>
                        <td>{tuotehinta}</td>
                        <td>{tuotemaara}</td>
                    </tr>);
            }

            return (
                <div>
                    <Navigaatio></Navigaatio>
                    <p></p>
                    <h1>Tuotteet Northwind-tietokannasta</h1>
                    <p></p>

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tuotenimi</th>
                                <th scope="col">Kpl-hinta</th>
                                <th scope="col">Määrä</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tuotteet}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default TuoteLista;