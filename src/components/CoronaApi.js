import React, {Component} from 'react';
import axios from "axios";
class CoronaApi extends Component {

    constructor(props){
    super(props);
    this.state={
        corona:[]
    }
    }

    componentDidMount() {
        axios.get("https://api.covid19api.com/summary?limit=100")
            .then((response)=>{
            this.setState({
                corona:response.data.Countries
            })
        })
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">

                        <table className="table table-hover table-striped">
                            <thead className="bg-warning">

                            <tr>

                                <td className='text-white'>№</td>
                                <td>Country</td>
                                <td>Country Code</td>
                                <td>Total Confirmed</td>
                                <td className='text-info'>Total Deaths</td>
                                <td className='text-success'>Total Recovered</td>
                                <td>New Confirmed</td>
                                <td className='text-black-50'>Data</td>
                                <td><input className="form-control" id="myInput" type="text" placeholder="Search.."/></td>
                            </tr>


                            </thead>
                            {
                                this.state.corona.map((item,index)=>{
                                    return(
                                        <tbody id='myTable' >
                                        <tr>
                                            <td>{(index+1)}</td>
                                            <td>{(item.Country)}</td>
                                            <td>{(item.CountryCode)}</td>
                                            <td>{(item.TotalConfirmed)}</td>
                                            <td>{(item.TotalDeaths)}</td>
                                            <td>{(item.TotalRecovered)}</td>
                                            <td>{(item.NewConfirmed)}</td>
                                            <td>{(item.Date.slice(0,10)+"  "+item.Date.slice(11,16))}</td>
                                        </tr>
                                        </tbody>
                                    )
                                })
                            }

                        </table>
                    </div>
                </div>


            </div>
        );
    }
}

export default CoronaApi;