import {useState ,useEffect,useRef,useLayoutEffect } from "react";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from 'react-icons/hi';
import { IconContext } from "react-icons";
import '../gallery.css';
import Sidebar from '../components/sidebar';
import { useParams, } from "react-router-dom";
import Img1 from '../img/externimage/img1.png';
import Img2 from '../img/externimage/img2.png';
import Img3 from '../img/externimage/img3.png';
import Img4 from '../img/externimage/img4.png';
import Img5 from '../img/externimage/img5.png';
import Img8 from '../img/externimage/img8.png';
import Img9 from '../img/externimage/img9.png';
import Img10 from '../img/externimage/img10.png';
import Img11 from '../img/externimage/img11.png';
import appart1 from '../img/internimage/appart1.jpeg'
import appart2 from '../img/internimage/appart2.jpg'
import appart3 from '../img/internimage/appart3.jpeg'
import appart4 from '../img/internimage/appart4.jpeg'
import axios from "axios";

import { Link } from 'react-router-dom';
export default function Expenses() {
  const { id } = useParams();

  const i = id;

  const [posts, setPosts] = useState([])
  const inputRef = useRef(null)
  const varRef = useRef(posts.length)

  useEffect(() =>  {
    axios.get(
      'http://localhost/drupal10/api/interior_design/%'
      )
    .then((res) => {
      setPosts(res)
      .then(
        (result)=>{
          setPosts(res)
        });
        
    })
    .catch(err => {
      console.log(err)
    })
  },[])


    return (
      <div>
     <Sidebar />
     <div className="pageD">
      {
         <img src={posts.field_imageuri} style={{width: '95vw', height: '100vh',}}/>
      }
)
        </div>
        <div className="transparent"></div>
        <div className="imagerotate">
        <div className="block">
        <div className="date"><p>PROJECT DATE: {data[id-1].date}</p></div>
        <div className="nom"><p>{data[id-1].name} </p></div>
       </div>
        </div>
        <div className="slider">
          <div className="smallimage"><img src={data[i-2].imgSrc} style={{width: '100%', height: '100%'}}/></div>
          <div className="smallslider">
            <IconContext.Provider value={{ className: "contextapi" }}>
            <Link to={`/expenses/${data[i-1].id}`} style={{ textDecoration: 'none' }}>
                  <HiArrowNarrowLeft  size={22}/>
               </Link>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "contextapi1" }}>
                  <HiArrowNarrowRight size={22}/>
            </IconContext.Provider>
          </div>
      </div>
        </div>
    );
  }
  let data =[
        {
            id: 0,
            imgSrc: Img8,
            name: 'GAMMART CENTRE',
            date: '2020',
            
        },
        {
            id: 1,
            imgSrc: Img2,
            name: 'COWORKING SPACE',
            date: '2018'
        },
        {
            id: 2,
            imgSrc: Img3,
            name: 'KITCHEN',
            date: '2019'
        },
        {
            id: 3,
            imgSrc: Img9,
            name: 'CAFÉ À PARIS',
            date: '2015'
        },
        {
            id: 4,
            imgSrc: Img4,
            name: 'GULLIETTA 1962',
            date: '2019'
        },
        {
          id: 5,
          imgSrc: Img1,
          name: 'APPARTEMENT 02',
          date: '2020'
      },
      
      {
          id: 6,
          imgSrc: Img11,
          name: 'APPARTEMENT 01',
          date: '2021'
      },
      {
          id: 7,
          imgSrc: Img10,
          name: 'HOTEL À ALGER',
          date: '2021'
      },
      {
        id: 8,
        imgSrc: Img5,
        name: 'Appartement PARIS',
        date: '2020',
        
    }
      ]