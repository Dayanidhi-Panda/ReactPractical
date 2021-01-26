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

        
    }


    render() {
       // console.log(this.state.matchdetails);
        return (

            <div>
                {
                    this.props.data ?
                        this.props.data.map((e) =>
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


