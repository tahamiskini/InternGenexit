import React, { Component } from "react";
import '../gallery.css';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, col } from 'reactstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'http://localhost/api/interior_design/',
            projects:[],
            isLoading: true
         }
    }
    componentDidMount(){
        this.getprojectsList();
    }
    getprojectsList(){
        fetch(this.state.url,)
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result)
              this.setState({
                projects: result,
                isLoading : false
              })
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoading: false,
                error
              });
            }
          )
      }

   
 render() {
   return (
    <div className="gallery">
        {
             this.state.isLoading === true ?
             <div className="text-center">
                 loading ...
             </div> :
          this.state.projects.map((project) => {
            
              return(
                
                  <Link to={`/expenses/${project.field_id}`} style={{ textDecoration: 'none' }}> 
                  <div className="pics" key={project.field_id}>
                    <img src={project.field_imageuri} style={{width: '100%' ,height:'100%' }} />
                        <div className="mur"><p>{project.name}</p>
                            <span>{project.date_debut}</span>                     
                        </div>
                    </div>
                  </Link>
           )
       })}
   </div>
   )
   
 }
}
export default Gallery;
