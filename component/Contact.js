// import React,{ useState } from 'react';

// function Contact() {
//     const initialName=
//        ["aditya","gendu","gandu"]

//     const initialEmail=["aditya@gmail.com","gendu@gmail.com","gandu@outlook.com"];

//     const [name, setName] = useState(...initialName);
//         console.log(name);
//     //setName();
//     const [email, setEmail] = useState(...initialEmail);
//     console.log(email);
//     //setEmail();
//     return (
//         <div className="contact_list row">
//             <div className="col-md-3 avatar">
//                 <div className="pic"></div>
//             </div>
//             <div className="col-md-6 name_all">
//             <span className="email">{name}</span><br/>

//                 <span className="email">{email}</span>
//             </div>
//             <div className="col-md-3 time">
//                 <span className="time">05:48pm</span>
//             </div>
//         </div>
//     )
// }

// export default Contact
import React, { Component } from 'react';
import axios from 'axios';


export class Contact extends React.Component {
    constructor() {
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
            this.setState({ users: this.state.orginalUsers });
        }
        
        var result = this.state.orginalUsers.filter(item => item.first_name.toLowerCase().includes(input));

        this.setState({ users: result });
        // console.log(event.target.value);
    }


    render() {
        console.log(this.state.matchdetails);
        return (

            <div>
                <span className="search">
                    <input type="text" placeholder="search"
                        onChange={this.onSearchChange} />
                </span>

                {
                    this.state.users ?
                        this.state.users.map((e) =>
                            <div className="contact_list row">
                                <div className="col-md-3 avatar">
                                    <div className="pic" key={e.id}><img src={e.avatar}></img>
                                    </div>
                                </div>
                                <div className="col-md-6 name_all">
                                    <span className="name">{e.first_name} {e.last_name}</span><br />
                                    <span className="name">{e.email}</span>
                                </div>
                                <div className="col-md-3 time">
                                    <span className="time">{e.time}</span>
                                </div>
                            </div>
                        )
                        :
                        null
                }
            </div>

        )
    }
}

export default Contact

