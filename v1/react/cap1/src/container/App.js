import React, {useState, useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/css/style.css';

import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//components
import Header from '../components/Header';
// import Banner from '../components/Banner';
// import Whatisit from '../components/Whatisit';
// import KickStart from '../components/KickStart';
// import Gapcrud from '../components/Gapcrud';
// import Services from '../components/Services';

import Home from './Home';
import Admin from './Admin';
import Fitment from '../components/Fitment';

import Footer from '../components/Footer';

function App() {


  var report = {
    name:"sd",
    cert:{
        "studHash": "XAVJXT",
        "roleScore": [{"P1":1.0},{"P2":1.0},{"P3":1.0},{"P4":1.0},{"P5":1.0},{"P6":1.0}],
        "roleNote": "The candidate has demonstrated ..",
        "techScore": [{"P1":1.0},{"P2":1.0},{"P3":1.0},{"P4":1.0},{"P5":1.0},{"P6":1.0}],
        "techNote": "The candidate has demonstrated ..",
        "certificates":[
            {	"certid" : "WWSADX", 
                "certpath": "path",
                "title" : "title sting",
                "novelty": "string",
                "maxstars": 5,
                "complexity":3, 
                "manualurl":"path",
                "acceptance" : [
                    {"criteria": "criteria string",	"status": "Pass","quality": 3 },
                    {"criteria": "criteria string",	"status": "Pass","quality": 5 },
                    {"criteria": "criteria string",	"status": "Fail","quality": 2 },
                    {"criteria": "criteria string",	"status": "Pass","quality": 4 },
                    {"criteria": "criteria string",	"status": "Fail","quality": 1 }
                ],
                "metrics": [
                    {"scope": "timeline","units":"weeks", "estimate": 12,  "actual": 15, "rating":2	}, 
                    {"scope": "efforts","units":"manhours", "estimate": 250,  "actual": 275, "rating":3	} 
                ],
                "softwares":[
                    {"name": "soft1", "type":"software","competency":3,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"}, 
                    {"name": "soft2", "type":"software","competency":2,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"},
                    {"name": "soft3", "type":"software","competency":4,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"},
                    {"name": "soft4", "type":"software","competency":1,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"} 
                ],
                "hardware":[
                    {"name": "tool1", "type":"MCU","competency":3,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"}, 
                    {"name": "tool2", "type":"sensor","competency":2,"url":"https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/6/9/69fd3f3fa4b53119324dc79e3a2813caff651389412559bfb4d639b79a0d9f39/software-icons-slide4.png"} 
                ],
                "interfaces":[
                    {"name": "if1", "url":"link","competency":3}, 
                    {"name": "if2", "url":"link","competency":2} 
                ],
                "rfp":[
                    {"name": "245", "url":"link","competency":3}, 
                    {"name": "132", "url":"link","competency":2} 
                ],
                "demo":[
                    {"url":"link","comments":"comments" }
                ],
                "priorart":[
                    {"url":"link","comments":"comments" },
                    {"url":"link","comments":"comments" }
                ] 
            }]
    },
    data:[
        {
          data: {
            p1: 0.45,
            p2: .32,
            p3: 0.3,
            p4: 0.1,
            p5: 0.9,
            p6: 0.3
          },
          meta: { color: 'blue' }
        }
    ],
    data2:[{
        data: {
            p1: 0.7,
            p2: .8,
            p3: 0.9,
            p4: 0.67,
            p5: 0.67,
            p6: 0.8
          },
        meta: { color: 'red' }
    }],
    captions:{
        p1:"p1",
        p2:"p2",
        p3:"p3",
        p4:"p4",
        p5:"p5",
        p6:"p6"
   },
   complexity:[]


};

  useEffect(()=>{

    console.log(JSON.stringify(report))

    axios.get("http://localhost:8000/")
    .then(e => {
      console.log(e.data);
    })


    var test11 = new FormData();

    // test11.append("name", "Subhadip");
    // test11.append("job", "Dev");

    test11.append("report", JSON.stringify(report));

    // axios.post("http://localhost:8000/test", test11)
    // .then(e => {
    //   console.log(e.data);
    // })

  }, [])


  //header modal
  const [showNav, setShowNav] = useState(false);
  const [downModal, setDownModal] = useState(false);

  const toggleName = (event) => {
      event.preventDefault();
      setShowNav(prev => prev = !prev);
  }

  const toggleNavDownModal = (event) => {
      event.preventDefault();
      setDownModal(prev => prev = !prev);
      setShowNav(false);
  }

  const closeNav = event => {
    event.preventDefault();
    setShowNav(false);
  }

  //career path modal

  const [pathDownModal, setpathDownModal] = useState(false);
  const togglepathDownModal= (event) => {
      event.preventDefault();
      setpathDownModal(prev => prev = !prev);
  }

  const [pathDownModal1, setpathDownModal1] = useState(false);
  const togglepathDownModal1= (event) => {
      event.preventDefault();
      setpathDownModal1(prev => prev = !prev);
  }

  const [pathRightModal1, setpathRightModal1] = useState(false);
  const togglepathRightModal1= (event) => {
      event.preventDefault();
      setpathRightModal1(prev => prev = !prev);
  }

  const [pathRightModal2, setpathRightModal2] = useState(false);
  const togglepathRightModal2= (event) => {
      event.preventDefault();
      setpathRightModal2(prev => prev = !prev);
  }

  const [pathRightModal3, setpathRightModal3] = useState(false);
  const togglepathRightModal3= (event) => {
      event.preventDefault();
      setpathRightModal3(prev => prev = !prev);
  }


  return (
    <>

<Header toggleName = {toggleName} toggleNavDownModal={toggleNavDownModal} showNav={showNav} downModal={downModal} closeNav = {closeNav}/>

      <Router>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav> */}
          <Switch>
              <Route exact path='/'>
                <Home
                  toggleName = {toggleName} toggleNavDownModal={toggleNavDownModal} showNav={showNav} downModal={downModal} closeNav = {closeNav}
                  pathDownModal = {pathDownModal} togglepathDownModal={togglepathDownModal} pathDownModal1 = {pathDownModal1} togglepathDownModal1={togglepathDownModal1}
                  pathRightModal1 = {pathRightModal1} 
                  togglepathRightModal1={togglepathRightModal1}

                  pathRightModal2 = {pathRightModal2} 
                  togglepathRightModal2={togglepathRightModal2}

                  pathRightModal3 = {pathRightModal3} 
                  togglepathRightModal3={togglepathRightModal3}
                />
              </Route>
              <Route path='/fitment'>
                <Fitment/>
              </Route>
              <Route path='/admin' component={Admin} />
          </Switch>

      </Router>



      <Footer/>
    </>
  );
}

export default App;
