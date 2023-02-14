import React from "react";
import './User.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



function UserHelp() {

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
                            <section className="help-section" id="help">
                                <div>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"

                                        >
                                            <Typography>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, corporis.</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Q: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, harum.</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ marginTop: 10, borderRadius: 10, border: '0.5px solid #EEEEEE', paddingTop: 5 }}>
                                        <AccordionSummary
                                            expandIcon={<ion-icon name="chevron-down-outline"></ion-icon>}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>Q: Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sit?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>


                                </div>
                            </section>
                        </main>
                    </div >
                </section >
            </section >
        </>
    )
}
export default UserHelp