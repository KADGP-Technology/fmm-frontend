import React from "react";
import './User.css'




function Userfav() {

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
            





                           
                        


                            <section className="favourites" id="favourites">
                                <div className="favourites-card-container">
                                    <div className="card-favourite">
                                        <div className="favourite-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6cLidXMIQn82SFv5FuzzjLJFRsIbfii3RQ&usqp=CAU" alt="similar-ph" className="favourite-ph" />
                                        </div>
                                        <div className="name-location">
                                            <h1>Sweety khanna <span><ion-icon name="checkmark-circle" style={{ fontSize: '0.9rem', color: 'blue' }}></ion-icon></span></h1>
                                            <h6><ion-icon name="location" style={{ color: '#FF385C' }}></ion-icon> New Delhi IND 1.2km</h6>
                                        </div>
                                        <div className="favourite-btn">
                                            <button className="btn-yellow">Certified Artist</button>
                                            <button className="btn-purple">Photoshoot Makeup</button>
                                            <button className="btn-blue">Studio</button>
                                            <button className="btn-purple">Travels to menu</button>
                                            <button className="btn-yellow">Hairstyling</button>

                                        </div>
                                        <button className="fav-bottom-btn">Service Starting at : ₹5000</button>
                                    </div>

                                    <div className="card-favourite">
                                        <div className="favourite-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6cLidXMIQn82SFv5FuzzjLJFRsIbfii3RQ&usqp=CAU" alt="similar-ph" className="favourite-ph" />
                                        </div>
                                        <div className="name-location">
                                            <h1>Sweety khanna <span><ion-icon name="checkmark-circle" style={{ fontSize: '0.9rem', color: 'blue' }}></ion-icon></span></h1>
                                            <h6><ion-icon name="location" style={{ color: '#FF385C' }}></ion-icon> New Delhi IND 1.2km</h6>
                                        </div>
                                        <div className="favourite-btn">
                                            <button className="btn-yellow">Certified Artist</button>
                                            <button className="btn-purple">Photoshoot Makeup</button>
                                            <button className="btn-blue">Studio</button>
                                            <button className="btn-purple">Travels to menu</button>
                                            <button className="btn-yellow">Hairstyling</button>
                                        </div>
                                        <button className="fav-bottom-btn">Service Starting at : ₹5000</button>
                                    </div>

                                    <div className="card-favourite">
                                        <div className="favourite-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6cLidXMIQn82SFv5FuzzjLJFRsIbfii3RQ&usqp=CAU" alt="similar-ph" className="favourite-ph" />
                                        </div>
                                        <div className="name-location">
                                            <h1>Sweety khanna <span><ion-icon name="checkmark-circle" style={{ fontSize: '0.9rem', color: 'blue' }}></ion-icon></span></h1>
                                            <h6><ion-icon name="location" style={{ color: '#FF385C' }}></ion-icon> New Delhi IND 1.2km</h6>
                                        </div>
                                        <div className="favourite-btn">
                                            <button className="btn-yellow">Certified Artist</button>
                                            <button className="btn-purple">Photoshoot Makeup</button>
                                            <button className="btn-blue">Studio</button>
                                            <button className="btn-purple">Travels to menu</button>
                                            <button className="btn-yellow">Hairstyling</button>

                                        </div>
                                        <button className="fav-bottom-btn">Service Starting at : ₹5000</button>

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
export default Userfav;