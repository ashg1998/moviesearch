import React from "react";

class MovieRow extends React.Component{

  viewMovie(){
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

    render(){

        return(
            <div>
            <table key={this.props.movie.id}>
         <tbody>
           <tr>
             <td>
               <img  alt="poster" src={this.props.movie.poster_src} />
             </td>
            <td>
            {this.props.movie.title}
            <p>{this.props.movie.overview}</p>
            <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>

             </td>
           </tr>
         </tbody>
       </table>
            </div>
        )
    }
}

export default MovieRow;