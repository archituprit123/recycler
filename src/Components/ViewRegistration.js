import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewRegistration = () => {
    const [registrationData, setRegistrationData] = useState([]);

    useEffect(() => {
        axios.get('http://125.19.52.219:8080/api/fetchall')
                .then((response = {}) => {
                    
                    setRegistrationData(response.data)
                })
                .catch((error = {}) => {
                    console.log(error)
                })
    }, []);

    return (        
        <div className="container-fluid">
        <br />
        <table className="table table-hover">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Facility Type</th>
      <th scope="col">Name of PWPF:</th>
      <th scope="col">Address of PWPF</th>
      <th scope="col">Registration Number</th>
    </tr>
  </thead>
  <tbody>
  {registrationData.map((val)=> {
    return <tr>
    <td> {val.FacilityType}</td> 
    <td> {val.WasteName}</td>
    <td>{val.WasteAddress}</td>
    <td>{val.WasteRegNo}</td>
    </tr> 
   
})}
    
  </tbody>
</table>


       
        </div>
      
    );

}

// export default class ViewRegistration extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             posts:[]
//         }
//     }
//     componentDidMount(){
//         axios.get('http://localhost:3001/api/fetchall')
//         .then((response = {}) => {
//             console.log(response);
//         })
//         .catch((error = {}) => {
//             console.log(error)
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <h1>React Class Component</h1>
//             </div>
//         )
//     }
// }




export default ViewRegistration