import React, { Component } from 'react'

export class Details extends Component {
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

export default Details
