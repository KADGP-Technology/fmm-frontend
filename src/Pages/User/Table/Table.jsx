import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./Table.css";




const TablePage = (props) => {
  const data = {
    columns: [
      {
        // label:'photo',
        label: <ion-icon name="camera" />,
        field: 'heading0',
        sort: 'asc'
      },
      {
        // label:'name',
        label: <ion-icon name="person"></ion-icon>,
        field: 'heading1',
        sort: 'asc'
      },
      {
        // label: 'Requirements',
        label: <ion-icon name="settings"></ion-icon>,
        field: 'heading2',
        sort: 'asc'
      },
      {
        // label: 'Date',
        label:<ion-icon name="calendar-number"></ion-icon>,
        field: 'heading3',
        sort: 'asc'
      },
      {
        // label: 'Location',
        label: <ion-icon name="location"></ion-icon>,
        field: 'heading4',
        sort: 'asc'
      },
      {
        // label: 'budget'
        label: <ion-icon name="wallet" className='icon'></ion-icon>,
        field: 'heading5',
        sort: 'asc'
      },
      {
        // label: 'Contact',
        label: <ion-icon name="call"></ion-icon>,
        field: 'heading6',
        sort: 'asc'
      },
 
    ],
    rows: [
      {
    
        'heading0': <img className='table-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ&usqp=CAU" alt="" />,
        'heading1': 'Lorem',
        'heading2': 'Lorem',
        'heading3': '12.12.22',
        'heading4': 'Gandhi Hall,Delhi',
        'heading5': '2020-01-24 19:52:28',
        'heading6': ' 763903****',

      },
      {
    
        'heading0': <img className='table-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ&usqp=CAU" alt="" />,
        'heading1': 'Lorem',
        'heading2': 'Lorem',
        'heading3': '12.12.22',
        'heading4': 'Gandhi Hall,Delhi',
        'heading5': '2020-01-24 19:52:28',
        'heading6': ' 763903****',
    
      },
      {
    
        'heading0': <img className='table-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ&usqp=CAU" alt="" />,
        'heading1': 'Lorem',
        'heading2': 'Lorem',
        'heading3': '12.12.22',
        'heading4': 'Gandhi Hall,Delhi',
        'heading5': '2020-01-24 19:52:28',
        'heading6': ' 763903****',
   
      },
      {
        'heading0': <img className='table-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ&usqp=CAU" alt="" />,
        'heading1': 'Lorem',
        'heading2': 'Lorem',
        'heading3': '12.12.22',
        'heading4': 'Gandhi Hall,Delhi',
        'heading5': '2020-01-24 19:52:28',
        'heading6': ' 763903****',
   
      },



    ]
  };

  return (
    <MDBTable responsive>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TablePage;