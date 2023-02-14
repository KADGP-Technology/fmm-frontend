import React from "react";
import './User.css'


function Userpage() {

    return (
        <>
            <section className="user-allcontent">
                <div className="head-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH6uagMBMgwvfv5EkqAeQIXLSssh4bM_jsg&usqp=CAU" alt="/" />
                </div>

                <section className="body-content">
                    <div className="left-content">
                        <div className="button-list">
                            <a href="/userpage"><button>Edit Details</button></a>
                            <a href="/"><button>Inbox</button></a>
                            <a href="/Userbooking"><button>Bookings</button></a>
                            <a href="/Userreq"><button>Post Your requirement</button></a>
                            <a href="/Userfav"><button>Favourites</button></a>
                            <a href="/UserHelp"><button>Help</button></a>
                        </div>
                    </div>
                    <div className="right-content">
                        <main>
                            <section className="edit-details" id="edit-details">
                                <div class="profile-photo-info">
                                    <div class="container2">


                                        <div className="name-input" style={{ width: '100%' }}>
                                            <label htmlFor="first name">First name</label>
                                            <input class="form-control" type="text" placeholder="First Name" readonly style={{ width: '100%' }}></input>
                                        </div>

                                        <div className="last-name-input" style={{ width: '100%' }}>
                                            <label htmlFor="first name">Last name</label>
                                            <input class="form-control" type="text" placeholder="Last Name" readonly style={{ width: '100%' }}></input>
                                        </div>


                                        <div className="contact">
                                            <label for="phone">Enter your phone number:</label>
                                            <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                        </div>


                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>


                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Confirm Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                                        </div>

                                        <button type="submit" class="btn" style={{ width: '100%', height: '40px' }}>Submit</button>
                                    </div>

                                </div>
                            </section>

                        </main>
                    </div >
                </section >
            </section >
        </>
    )
}
export default Userpage