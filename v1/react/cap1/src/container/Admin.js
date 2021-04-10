import React from "react";


class Admin extends React.Component{

    constructor(){
        super();

        this.state={
            formNo:1,
            steps:10,
            studentName:"ss",
            studentId:"",
            studentEmail:"",
            acceptance:[],
            metrics:[],
            softwares:[]
        }
    }


    incrSteps = (event) => {
        event.preventDefault();
        var max = this.state.steps;
        var current = this.state.formNo;

        if(current < max || current == max-1){
            current ++;
            this.setState({
                formNo:current
            })
        }              
    }


    decrSteps = (event) => {
        event.preventDefault();
        var min = 1;
        var current = this.state.formNo;

        if(current > min || current == min+1){
            current --;
            this.setState({
                formNo:current
            })
        }              
    }

    //acceptance

    addAccptnce = (event) => {
        event.preventDefault();
        var acceptance = this.state.acceptance;

        var acceptanceObj = {
            criteria: "",
            status: "",
            quality: 0
        }

        acceptance.push(acceptanceObj);
        this.setState({
            acceptance:acceptance
        })
    }

    criteriaValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].criteria = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    statusValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].status = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    qualityValue = (event, i) => {
        // console.log(i);
        // console.log(event.target.value);
        var acceptance = this.state.acceptance;

        acceptance[i].quality = event.target.value;
        this.setState({
            acceptance:acceptance
        })
    }

    delAcptnc = (i) => {
        var acceptance = this.state.acceptance;
        acceptance[i] = null;
        this.setState({
            acceptance:acceptance
        })
    }

    resetAcceptance = () => {
        var acceptance = [];

        this.setState({
            acceptance:acceptance
        })
    }

    //metrics

    addMetrics = (event) => {
        event.preventDefault();
        var metrics = this.state.metrics;
        var metricseObj = {
            "scope": "",
            "units": "",
            "estimate": 0,
            "actual": 0,
            "rating": 0
        }
        metrics.push(metricseObj);
        this.setState({
            metrics:metrics
        });
    }

    metricScope = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].scope = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricUnits = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].units = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricEstimate = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].estimate = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricActual = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].actual = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    metricRatings = (event, i) => {
        var metrics = this.state.metrics;

        metrics[i].rating = event.target.value;
        this.setState({
            metrics:metrics
        })
    }

    delmetrics = (i) => {
        var metrics = this.state.metrics;
        // metrics.splice(i,1);

        metrics[i] = null;

        this.setState({
            metrics:metrics
        })
    }

    resetmetrics = () => {
        var metrics = [];

        this.setState({
            metrics:metrics
        })
    }



    //Softwares

    addSoftwares = (event) => {
        event.preventDefault();
        var softwares = this.state.softwares;
        var softwareseObj = {
            "name": "",
            "type": "",
            "competency": 0,
            "url":""
        }
        softwares.push(softwareseObj);
        this.setState({
            softwares:softwares
        });
    }

    SoftwaresName = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].name = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwarestype = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].type = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwarescompetency = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].competency = event.target.value;
        this.setState({
            softwares:softwares
        })
    }

    Softwaresurl = (event, i) => {
        var softwares = this.state.softwares;

        softwares[i].url = event.target.value;
        this.setState({
            softwares:softwares
        })
    }



    delSoftwares = (i) => {
        var softwares = this.state.softwares;
        // metrics.splice(i,1);

        softwares[i] = null;

        this.setState({
            softwares:softwares
        })
    }

    resetmetrics = () => {
        var softwares = [];

        this.setState({
            softwares:softwares
        })
    }




    render(){
        return(

            <>

            <section className="my-5 py-5 certificateForm">
                <div className="container">

                    <div className="row">

                        <div className="col-md-8">

                            <form className="certiUpload">

                                <div className="row">

                                    <div className="clearfix col-12 text-center">
                                            {this.state.formNo == 1 ? null : <a className="d-inline-block float-left" href="#" onClick={(event) => this.decrSteps(event)}>Prev</a>}
                                            {this.state.formNo}
                                            <a href="#" className="d-inline-block float-right" onClick={(event) => this.incrSteps(event)}>Next</a>
                                    </div>

                                </div>                            
                                
                                <div className={this.state.formNo === 1 ? 'row' : 'd-none row'}>
                                        <div className="form-group col-6">
                                            <label>Student Name</label>
                                            <input className="form-control"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Student Id</label>
                                            <input className="form-control" value={Math.random()} disabled/>
                                        </div>

                                        <div className="form-group col-12">
                                            <label>Student Email</label>
                                            <input className="form-control"/>
                                        </div>
                                </div>                             

                                <div className={this.state.formNo === 2 ? 'row' : 'row d-none'}>
                                    <div className="form-group col-6">
                                        <label>Role Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Role Score 2</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Role Score 3</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Role Score 4</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Role Score 5</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Role Score 6</label>
                                        <select className="form-control mb-0">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-2">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <label>Tech Score 1</label>
                                        <select className="form-control mb-0">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label>Role Note</label>
                                        <textarea className="form-control"></textarea>
                                    </div>

                                    

                                    <div className="form-group col-6">
                                        <label>Tech Note</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className={this.state.formNo === 3 ? 'row' : 'd-none row'}>
                                        <div className="form-group col-6">
                                            <label>Certificate Path</label>
                                            <input className="form-control"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate Id</label>
                                            <input className="form-control" value={Math.random()} disabled/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate Title</label>
                                            <input className="form-control"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Novelty</label>
                                            <input className="form-control"/>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Certificate Rating</label>
                                            <select className="form-control mb-0">
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label>Manual URL</label>
                                            <input className="form-control"/>
                                        </div>
                                </div>

                                <div className={this.state.formNo === 4 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>Acceptance {this.state.acceptance.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetAcceptance}>Rest Acceptance</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.acceptance.map((e,i)=>{


                                            if(e===null){

                                            }
                                            else{

                                                return(                                               

                                                    <div className="container-fluid" key={i}>
                                                        <div className="row py-3">
                                                            <div className="col-12">
                                                                <h4>Acceptance criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delAcptnc(i)}>X</span></h4>
                                                            </div>
                                                            <div className="form-group col-6">
                                                                <label>Acceptance Criteria</label>
                                                                <input className="form-control" onChange={(event) => this.criteriaValue(event, i)}/>
                                                            </div>
    
                                                            <div className="form-group col-6">
                                                                <label>Acceptance Status</label>
                                                                <select className="form-control mb-0" onChange={(event) => this.statusValue(event, i)} >
                                                                    <option value="passed">Passed</option>
                                                                    <option value="failed">Failed</option>
                                                                </select>
                                                            </div>
    
                                                            <div className="form-group col-12">
                                                                <label>Acceptance Quality</label>
                                                                <select className="form-control mb-0" onChange={(event) => this.qualityValue(event, i)}>
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                
                                                )

                                            }


                                            
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addAccptnce(event)}>+</a>
                                        </div>
                                </div>
                                
                                <div className={this.state.formNo === 5 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>Metrics {this.state.metrics.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetmetrics}>Rest Metrics</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.metrics.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>Metrics criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delmetrics(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>Metrics Scope</label>
                                                            <input className="form-control" onChange={(event) => this.metricScope(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics units</label>
                                                            <input className="form-control" onChange={(event) => this.metricUnits(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics estimate</label>
                                                            <input className="form-control" type="number" onChange={(event) => this.metricEstimate(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Metrics Actual</label>
                                                            <input className="form-control" type="number"  onChange={(event) => this.metricActual(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-12">
                                                            <label>Metrics Ratings</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.metricRatings(event, i)}>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addMetrics(event)}>+</a>
                                        </div>
                                </div>
                                

                                <div className={this.state.formNo === 6 ? 'row' : 'd-none row'}>

                                        <div className="col-12">
                                            <h3>softwares {this.state.softwares.length > 0 ? <span className="d-inline-block ml-3 btn btn-danger" onClick={this.resetmetrics}>Rest softwares</span> : null}</h3>
                                        </div>

                                        
                                        {this.state.softwares.map((e,i)=>{
                                             if(e===null){

                                            }
                                            else{

                                                return(
                                                <div className="container-fluid" key={i}>
                                                    <div className="row py-3">
                                                        
                                                        <div className="col-12">
                                                            <h4>Softwares criteria {i+1} <span className="d-inline-block ml-3 btn btn-danger" onClick={() => this.delSoftwares(i)}>X</span></h4>
                                                        </div>
                                                        <div className="form-group col-6">
                                                            <label>Softwares Name</label>
                                                            <input className="form-control" onChange={(event) => this.SoftwaresName(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares Type</label>
                                                            <input className="form-control" onChange={(event) => this.Softwarestype(event, i)}/>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares competency</label>
                                                            <select className="form-control mb-0" onChange={(event) => this.Softwarescompetency(event, i)}>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-6">
                                                            <label>Softwares URL</label>
                                                            <input className="form-control" onChange={(event) => this.Softwaresurl(event, i)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                                }
                                        })}

                                        <div className="col-12">
                                            <a href="#" className="btn btn-success" onClick={(event) => this.addSoftwares(event)}>+</a>
                                        </div>
                                </div>
                                

                            </form>

                        </div>

                        <div className="col-md-4">
                            <p>acceptance</p>
                            {JSON.stringify(this.state.acceptance)}
                            <p>metrics</p>
                            {JSON.stringify(this.state.metrics)}

                            <p>softwares</p>
                            {JSON.stringify(this.state.softwares)}
                        </div>

                    </div>

                </div>
            </section>


            <div>
                
                

            </div>

            </>
        )
    }


}

export default Admin;