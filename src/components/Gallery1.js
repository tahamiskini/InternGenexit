import React, { Component } from "react";
import '../gallery.css';
import Img1 from '../img/externimage/img1.png';
import Img2 from '../img/externimage/img2.png';
import Img3 from '../img/externimage/img3.png';
import Img4 from '../img/externimage/img4.png';
import Img5 from '../img/externimage/img5.png';
import Img8 from '../img/externimage/img8.png';
import Img9 from '../img/externimage/img9.png';
import Img10 from '../img/externimage/img10.png';
import Img11 from '../img/externimage/img11.png';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, col } from 'reactstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
       
            ],
        data: [
            {
                id: 1,
                imgSrc: Img8,
                name: 'CENTRE DE CONGRÉS GAMMART',
                date: '2020'
            },
            {
                id: 2,
                imgSrc: Img2,
                name: 'COWERKING SPACE',
                date: '2018'
            },
            {
                id: 3,
                imgSrc: Img3,
                name: 'KITCHEN SHOWRROOM',
                date: '2019'
            },
            
            {
                id: 9,
                imgSrc: Img5,
                name: 'APPARTEMENT PARIS',
                date: '2020'
            },
            {
                id: 5,
                imgSrc: Img4,
                name: 'GULLIETTA 1962',
                date: '2019'
            },
            {
              id: 6,
              imgSrc: Img1,
              name: 'APPARTEMENT 02',
              date: '2020'
          },
          
          {
              id: 7,
              imgSrc: Img11,
              name: 'APPARTEMENT 01',
              date: '2021'
          },
          {
              id: 8,
              imgSrc: Img10,
              name: 'HOTEL À ALGER',
              date: '2021'
          },
          {
            id: 4,
            imgSrc: Img9,
            name: 'CAFÉ À PARIS',
            date: '2015'
        }
        ],
    }
    }
   
 render() {
   return <>
   <div className="gallery">
       {
          this.state.data.map((item) => {
            
              return(
                  <Link to={`/expenses/${item.id}`} style={{ textDecoration: 'none' }}> 
               <div className="pics" key={item.id}>
                   <img src={item.imgSrc} style={{width: '100%' ,height:'100%' }} />
                   <div className="mur"><p>{item.name}</p>
                  <span>{item.date}</span>
                                        
                   </div>
               </div>
              </Link>
           )
       })}
   </div>
</>
 }
}
export default Gallery;