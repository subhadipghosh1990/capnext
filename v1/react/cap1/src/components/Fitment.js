import React, {useState, useEffect} from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


class Fitment extends React.Component{

    constructor(){
        super();
        this.state={
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


        }
    }


   componentDidMount(){
       console.log(this.state.cert);

       var compl = this.state.cert.certificates[0].complexity;
       var finalCom = [];
       for(var i=0; i < compl; i++){
           finalCom.push(i);
       }
       //setComplexity(prev => prev = finalCom);
       this.setState({
        complexity:finalCom
       })
   }

    // useEffect(()=>{


        

    // },[]);


    acceptanceQuality = (e) => {
        let arr = [];
        for(var i = 0; i < e; i++){
            arr.push(i);
        }

        return arr.length;
    }


    render() {
        return (
            <>
             <section className="fitment py-3 py-md-5">

<div className="container">

    <div className="row ">
        
        <div className="col-md-6 text-center">
            
        <h4 className="brownTxt font-weight-bold">{this.state.cert.studHash}’s Technology Fitment</h4>

            <RadarChart
                captions={this.state.captions}
                data={this.state.data}
                size={300}
            />

        </div>

        <div className="col-md-6 text-center">
            
            <h4 className="brownTxt font-weight-bold">{this.state.cert.studHash}’s Role Fitment</h4>

            <RadarChart
                captions={this.state.captions}
                data={this.state.data2}
                size={300}
            />

        </div>

    </div>

</div>

</section>


<section className="studentScore py-3 py-md-5">

<div className="container">

    <div className="row ">

        <div className="col-md-5">

            <div className="form-group d-md-flex justify-content-end">

                <select className="form-control w-75">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>

            </div>

            <div className="projectImg">
                <img src={require('../assets/images/certImage.jpg').default} width="100%"/>
            </div>

        </div>

        <div className="col-md-7">

            <h5 className="font-weight-bold">Title: <span className="d-inline-block ml-3"> {this.state.cert.certificates[0].title}</span></h5>

            <div className="mt-5 d-md-flex">

                <div className="d-flex flex-wrap align-items-start justify-content-between projectActions">
                    <div className="text-center w-50">
                        <img src={require('../assets/images/p-report.png').default} width="" className="img-fluid"/>
                        <a className="d-block">Download Project Report</a>
                    </div>

                    <div className="text-center w-50">
                        <img src={require('../assets/images/download.png').default} width="" className="img-fluid"/>
                        <a className="d-block">Download Certificate</a>
                        
                    </div>
                </div>

                <div className="ratings pl-md-5">
                    <ul className="d-flex flex-wrap pl-0">
                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Novelty</p>
                            <span>{this.state.cert.certificates[0].novelty}</span>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Schedule</p>
                            <ul className="d-flex pl-0">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </ul>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Complexity</p>
                            <ul className="d-flex pl-0">

                                {/* {this.state.complexity.map((e,i)=>{
                                    return (
                                        <i className="fa fa-star" aria-hidden="true" key={i}></i>
                                    )
                                })} */}

                                {Array.from(Array(this.state.cert.certificates[0].complexity), (e, i) => {
                                    return <i className="fa fa-star" aria-hidden="true" key={i}></i>
                                })}


                            </ul>
                        </li>

                        <li className="d-flex align-items-center">
                            <p className="pr-2 mb-0">Efforts</p>
                            <ul className="d-flex pl-0">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </ul>
                        </li>
                    </ul>
                </div>
                                                
            </div>

            <p className="pt-3 small pl-2">The universal remote controller can generate an arbitrary command signal to control electronic devices on NEC or RC5 standards. the controller is connected to the cloud over a WiFI based IP interface. The controller can be configured for a specific device using  cloud application hosted on GCP and provides a NodeJS/AngularJS based user interfaces. The controller has been tested with  10 devices from various consumer electronic vendors. </p>
            



        </div>

    </div>

    <div className="row">
        
        <div className="col-md-6">

            <h5>Acceptance Criteria</h5>
            
            <ul className="pl-0">

                {this.state.cert.certificates[0].acceptance.map((e,i)=>{
                    return (
                        <li key={i} className="d-flex justify-content-between">

                            <p className="m-0 small">{e.criteria}</p>

                            <div className="d-flex">
                                <p className="m-0"><i className={e.status === "Pass" ? "fa fa-circle text-success" : "fa fa-circle text-danger"} aria-hidden="true"></i></p>
                                <ul className="accListStar pl-0">
                                    {Array.from(Array(e.quality), (e, i) => {
                                        return <i key={i} className="fa fa-star" aria-hidden="true"></i>
                                    })}
                                </ul>
                            </div>
                        </li>

                    )
                })}

            {/* <ul>
                {Array.from(Array(10), (e, i) => {
                    return <li key={i}>{i}</li>
                })}
            </ul> */}

            </ul>
            

            <div className="d-md-flex flex-wrap toolsIconHolder">

                <div>
                    <h5>Softwares Used</h5>

                    <ul className="d-flex pl-0">
                        {this.state.cert.certificates[0].softwares.map((e,i)=>{
                            return(
                                <li className="m-1" key={i}><img src={e.url} alt="#" width="20"/> </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <h5>Hardware Used</h5>

                    <ul className="d-flex pl-0">
                        {this.state.cert.certificates[0].hardware.map((e,i)=>{
                            return(
                                <li className="m-1" key={i}><img src={e.url} alt="#" width="20"/> </li>
                            )
                        })}
                    </ul>
                </div>
                

            </div>
            

        </div>


        <div className="col-md-6 projectDemoVdoHolder">

            <h5>Demo</h5>

            <iframe width="" height="" src="https://www.youtube.com/embed/LlhmzVL5bm8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

    </div>

</div>

</section>
            </>
        );
    }



 }


 export default Fitment;