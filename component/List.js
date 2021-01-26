import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Contact from './Contact';
//import Details from './Details';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

//function List() {
    export class List extends React.Component{

        constructor(){
            super()
            
            this.state = {
                users: null,
                orginalUsers: null,
                matchdetails: ''
            }
        }
    
        componentDidMount() {
            fetch('https://reqres.in/api/users').then((resp) => {
                resp.json().then((res) => {
                    console.log(res);
                    this.setState({ users: res.data })
                    this.setState({ orginalUsers: res.data })
                })
            })
        }
    
        onSearchChange = (event) => {
            let input = event.target.value;
    
            if (input === '') {
                this.setState({ users: this.state.users });
            }
            
            var result = this.state.orginalUsers.filter(item => item.first_name.toLowerCase().includes(input));
            var result1 = this.state.orginalUsers.filter(item => item.last_name.toLowerCase().includes(input));
            var result2 = this.state.orginalUsers.filter(item => item.email.toLowerCase().includes(input));
            this.setState({ users: result });
            this.setState({ users: result1 });
            this.setState({ users: result2 });
          
        }

    render(){
    return (
        <div>
            <div className="outer_list">
                <div className="header">
                    <span className="all">All<FontAwesomeIcon icon={faCoffee} /></span>
                    <span className="search">
                    <input type="text" placeholder="search"
                        onChange={this.onSearchChange} />
                </span>
                </div>
                <Contact data={this.state.users}/>
                
            </div>
           
        </div>
    )
    }
}

export default List
