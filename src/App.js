import React, {Component} from "react";
import './App.css';
import MovieRow from "./MovieRow";
import $ from 'jquery';
class App extends Component{

  constructor(props){
    super(props)
    this.state = {}
    //console.log("this is my intializer")

  //   const movies = [
  //     {id:0,poster_src:"https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title:"Avengers: Infinity War", overview:"As the Avenger they rock"},
  //     {id:1, poster_src:"https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",title:"THe Avengers", overview:"This is my second overview"}
  //   ]

    
  
 
  // var movieRows = [];

  //   movies.forEach((movie) => {
  //     //console.log(movie.title)
  //   const movieRow = <MovieRow key={movie.id} movie={movie}/>

       
  //   movieRows.push(movieRow)
  //   })

  //   this.state={rows: movieRows}

  this.performSearch("avengers")


  }

  performSearch(sTerm){
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=68a948724483ea21b0fe179380b72cba&query="+sTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        console.log(results[0])
        var movieRows=[]
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie.title) 
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        }) 
        this.setState({rows: movieRows})
      },
      error:(xhr, status, err)=>{
        console.error("failedddd to fetch data")
      }


    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm = event.target.value
    const boundingobject = this
    boundingobject.performSearch(searchTerm)
  }


  render(){
    return(
      <div className="App">
        <table className="table-bar">
          <tbody>
            <tr>
             
              
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input style={{
          fontSize:24,
          display:'block',
          width:'99%',
          paddingTop:8,
          paddingBottom:8,
  
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="enter the movie name"/>

        {this.state.rows}
      </div>
  
      
    );
  }
}

export default App;