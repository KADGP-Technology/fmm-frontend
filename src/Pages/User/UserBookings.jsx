import React from "react";
import './User.css'
    ;



function Userbooking() {

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
                            <section className="content-table" id="content-table">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead className='thead'>
                                            <tr>
                                                <th scope="col"><ion-icon name="calendar-number" className='icon-head' style={{ color: 'rgb(255, 20, 147)', fontSize: '1rem' }}></ion-icon>&nbsp;Date</th>
                                                <th scope="col"><ion-icon name="person" className='icon-head' style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Name</th>
                                                <th scope="col"><ion-icon name="location" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Location</th>
                                                <th scope="col"><ion-icon name="wallet" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Budget</th>
                                                <th scope="col"><ion-icon name="call" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Contact</th>
                                                <th scope="col" ><ion-icon name="list" style={{ color: '#FF1493', fontSize: '1rem' }}></ion-icon>&nbsp;Requirements</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" className='range' /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                            <tr>
                                                <th scope="row">20.11.2022</th>
                                                <td>Lorem</td>
                                                <td>Gandhi Hall, Delhi</td>
                                                <td>4k <input type="range" /> 10k</td>
                                                <td><ion-icon name="id-card" style={{ fontSize: '1rem' }}></ion-icon></td>
                                                <td>Cell</td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                        </main>
                    </div >
                </section >
            </section >
        </>
    )
}
export default Userbooking