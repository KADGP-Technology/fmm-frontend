import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import './Test.css';
import 'mdbreact/dist/css/mdb.css';
import Table from './Table/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


const Test = () => {
    return (
        <>
            <Navbar />

            <div className="head-image"></div>
            <div className="list-table col-12 d-flex">
                <div className="list-group col-2">
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item action href="#link1">
                            User Account
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                            Inbox
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                            Booking
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                            Post your Requirement
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                            Favourites
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link6">
                            Help
                        </ListGroup.Item>
                    </ListGroup>
                </div>
             
            </div>
        </>
    );
}
export default Test