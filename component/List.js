import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Contact from './Contact';
//import Details from './Details';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

//function List() {
    export class List extends React.Component{

        constructor(props){
            super(props)
            this.state={
                searchData:null
            }
        }
        
        search(key){
             fetch('https://reqres.in/api/users'+ key).then((srch)=>{
                srch.json().then((res)=>{
                    // console.log("res",res);
                     this.setState({searchData:res});
                     
                 })
             })    
        }
        

    render(){
    return (
        <div>
            <div className="outer_list">
                <div className="header">
                    <span className="all">All<FontAwesomeIcon icon={faCoffee} /></span>
                    <span className="search">
                        <input type="search" placeholder="search" onChange={(e)=>this.search(e.target.value)} />
                        <div>
                            {
                                this.state.searchData ?
                                    this.state.searchdata.map((item)=>
                                    <div>{item.first_name}</div>
                                    )
                                :""
                            }
                        </div>
                    </span>
                    
                </div>
                <Contact />
                {/* <Details /> */}
            </div>
           
        </div>
    )
    }
}

export default List
