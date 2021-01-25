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
constructor(){
    super()
    // this.state=[
    //     {name:"Aditya Mohanty", email:"aditya@gmail.com",time:"5.35pm"},
    //     {name:"Gandu Sabat", email:"gandu@gmail.com",time:"9.11pm"},
    //     {name:"Gendu Mishra", email:"gendu@gmail.com",time:"3.00am"},
    //     {name:"Abhi Dash", email:"abhi@gmail.com",time:"1.23pm"},
    //     {name:"Mitun Kar", email:"mitun@gmail.com",time:"6.52am"},
    // ]
    this.state={
        users:[]
    }
}

componentDidMount(){
    fetch('https://reqres.in/api/users').then((resp)=>{
        resp.json().then((res)=>{
            console.log(res);
            this.setState({users:res.data})
            
        })
    })
    // axios.get('https://reqres.in/api/users').then((response)=>{
    //     console.log(response.data);
    //         this.setState({users:response.data.results})
    //     }).catch((err)=>{console.log(err)})
       
}
    render() {
        return (
                <div>
                 {
                     this.state.users ?
                     this.state.users.map((e)=>
                     <div className="contact_list row">
                     <div className="col-md-3 avatar">
                        <div className="pic"><img src={e.avatar}></img>
                        </div>
                     </div>
                     <div className="col-md-6 name_all">
                        <span className="name">{e.first_name} {e.last_name}</span><br/>
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

