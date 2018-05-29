//API https://api.coinmarketcap.com/v2/ticker/?limit=10
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export class CoinsList extends React.Component{
    constructor(props){
    super(props)
    this.state={
        coins: [],
        searchQuery: '',
        direction: {
            volume: 'asc',
        }
    }
 }

    componentWillMount(){
        axios.get(`http://127.0.0.1:8000/stocks/`)
        .then(res=>{
            console.log("result:" + res.data)

            this.setState({
                 coins: res.data    
             })
        });

    }


    handleChange(e){
        this.setState({
            searchQuery: e.target.value
        }, () =>{
            this.getInfo()
        })
    }

    getInfo(){
        axios.get(`http://127.0.0.1:8000/stocks/?search=${this.state.searchQuery}`)
        .then(res=>{
            this.setState({
                coins: res.data
            })
        })

    }

    volumeSort(key){
        axios.get(`http://127.0.0.1:8000/stocks/?search=${this.state.searchQuery}`)
        .then(res=>{
            var result
            result=res.data

            this.setState({
                coins: result.sort( (a , b ) => (
                   this.state.direction[key] == 'asc'
                   ? parseFloat(a[key]) - parseFloat(b[key]) 
                   : parseFloat(b[key]) - parseFloat(a[key]) 
                )),
                direction:{
                    [key]: this.state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
                }
            })
       
        })
      
    }

    

 render(){

     return (
         <div>
             
             <h1>{this.state.searchQuery}</h1>
             <div>  <input type="text" onChange={this.handleChange.bind(this)} placeholder="search"/></div>
             <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ticker</th>
                    <th onClick={this.volumeSort.bind(this,'open')}>Open</th>
                    <th>Close</th>
                    <th onClick={this.volumeSort.bind(this,'volume')}>Volume</th>
                </tr>
                </thead>
                <tbody>
        {this.state.coins.map(coin => 
         <tr key={coin.id}>
            <td>{coin.id}</td>
            <td>{coin.ticker}</td>
            <td>{coin.open}</td>
            <td>{coin.close}</td>  
            <td>{coin.volume}</td>  
        </tr>
         )} 
         </tbody>
       </table> 
      
             </div>
    );
    //     <div>
    //     <table>
    //     {this.state.coins.map(coin=>
    //      <tr key={coin.id}>
    //         <td>{coin.rank}</td>
    //         <td>{coin.name}</td>
    //         <td>{coin.symbol}</td>
    //         <td>{coin.quotes.usd.price}</td>  
    //     </tr>
    //      )} 
    //    </table> 
    // </div>
 

 }

}
