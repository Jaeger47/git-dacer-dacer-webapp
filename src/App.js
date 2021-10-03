import './App.css';
import {useState} from "react"; 
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(0); 
  const [ID_num, setID_num] = useState(0);
  const [phone, setPhone] = useState(""); 
  const [address, setAddress] = useState(""); 
  const [status, setStatus] = useState("");

  const [student_list, setStudentList] = useState([]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0); 
  const [newID_num, setNewID_num] = useState(0);
  const [newPhone, setNewPhone] = useState(""); 
  const [newAddress, setNewAddress] = useState(""); 
  const [newStatus, setNewStatus] = useState("");

  const addStudent = () => {
    Axios.post('https://dacer-web-app.herokuapp.com/create', {
      name: name, 
      age: age,
      ID_num: ID_num,
      phone: phone,
      address: address,
      status: status
    }).then(() => {
      alert("Successfully Added Data");
    });
  }

  const getStudent = () => {
     Axios.get('https://dacer-web-app.herokuapp.com/student').then((response) => {
      setStudentList(response.data);
    });
  }

   const updateName = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updateName', { name: newName, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: newName,
          age: val.age,
          ID_num: val.ID_num,
          phone: val.phone,
          address: val.address,
          status: val.status 
        } : val
      }))
    });
   };
  
   const updateAge = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updateAge', { age: newAge, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: val.name,
          age: newAge,
          ID_num: val.ID_num,
          phone: val.phone,
          address: val.address,
          status: val.status 
        } : val
      }))
    });
   };

   const updateID_num = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updateID_num', { ID_num: newID_num, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: val.name,
          age: val.age,
          ID_num: newID_num,
          phone: val.phone,
          address: val.address,
          status: val.status 
        } : val
      }))
    });
   };

   const updatePhone = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updatePhone', { phone: newPhone, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: val.name,
          age: val.age,
          ID_num: val.ID_num,
          phone: newPhone,
          address: val.address,
          status: val.status 
        } : val
      }))
    });
   };

   const updateAddress = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updateAddress', { address: newAddress, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: val.name,
          age: val.age,
          ID_num: val.ID_num,
          phone: val.phone,
          address: newAddress,
          status: val.status 
        } : val
      }))
    });
   };

   const updateStatus = (id) => {
    Axios.put('https://dacer-web-app.herokuapp.com/updateStatus', { status: newStatus, id: id }).then(
      (response)=>{
      alert("Successfully Updated");
      setStudentList(student_list.map((val)=> {
        return val.id == id ? {
          id: val.id, 
          name: val.name,
          age: val.age,
          ID_num: val.ID_num,
          phone: val.phone,
          address: val.address,
          status: newStatus
        } : val
      }))
    });
   };


   
   const deleteStudent = (id) => {
     
     Axios.delete(`https://dacer-web-app.herokuapp.com/delete/${id}`).then((response) =>{
       setStudentList(student_list.filter((val)=> {
         return val.id != id;
       }))
     });
   alert("Successfully Deteled");};

  

  const displayInfo = () => {
    console.log(name + "\n" + age + "\n" + ID_num + "\n" + phone + "\n" + address + "\n" + status);
  }

  return (
    <div className="App">
     <div className="info">
        <h1>Student Enrollment Data</h1>
        <label>Name:</label>
        <input type="text" 
          onChange={(event) => {
              setName(event.target.value);
          }}/>
        <label>Age:</label>
        <input type="number" 
        onChange={(event) => {
              setAge(event.target.value);
          }}/>
        <label>ID Number:</label>
        <input type="number" onChange={(event) => {
              setID_num(event.target.value);
          }}/>
        <label>Phone Number:</label>
        <input type="text" onChange={(event) => {
              setPhone(event.target.value);
          }}/>
        <label>Address:</label>
        <input type="text" onChange={(event) => {
              setAddress(event.target.value);
          }}/>
       <label>Enrolment Status:</label>   
       <select type="text" onChange={(event) => {
              setStatus(event.target.value);
          }}>
         <option value=""></option> 
        <option value="Enrolled">Enrolled</option>
        <option value="Rejected">Rejected</option>
         <option value="Pending">Pending</option>
       </select>

        <button class="btn btn-primary" onClick={addStudent}>Submit</button>
      </div>
      
       <div className="students">
        <button class="btn btn-success" onClick={getStudent}>Show Students</button>
        {student_list.map((val, key) =>{
          return <div className="studentList"> 
<table >
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Student ID</th>
    <th>Contact Number</th>
    <th>Address</th>
    <th>Enrollment Status</th>
    <th>Delete Data</th>
  </tr>
  <tr>
    <td>{val.name}
     <div className="edit">
       <input  type="text" placeholder="..."
       onChange={(event) => {
              setNewName(event.target.value);
          }}/>
            <button class="btn btn-warning" onClick={()=>{
        updateName(val.id);
        }}>Update Name</button>
     </div>  
    </td>
    
    <td>{val.age}
        <div className="edit">
       <input  type="text" placeholder="..."
       onChange={(event) => {
              setNewAge(event.target.value);
          }}/>
            <button class="btn btn-warning" onClick={()=>{
        updateAge(val.id);
        }}>Update Age</button>
     </div></td>
    <td>{val.ID_num}
        <div className="edit">
       <input  type="text" placeholder="..."
       onChange={(event) => {
              setNewID_num(event.target.value);
          }}/>
            <button class="btn btn-warning" onClick={()=>{
        updateID_num(val.id);
        }}>Update Student ID Number</button>
     </div>  </td>
    <td>{val.phone}
        <div className="edit">
       <input  type="text" placeholder="..."
       onChange={(event) => {
              setNewPhone(event.target.value);
          }}/>
            <button class="btn btn-warning" onClick={()=>{
        updatePhone(val.id);
        }}>Update Contact Number</button>
     </div>  </td>
    <td>{val.address}
        <div className="edit">
       <input  type="text" placeholder="..."
       onChange={(event) => {
              setNewAddress(event.target.value);
          }}/>
            <button class="btn btn-warning" onClick={()=>{
        updateAddress(val.id);
        }}>Update Address</button>
     </div>  </td>
    <td>{val.status} 
    
    <div className="editDrop">
     <select type="text" 
       onChange={(event) => {
              setNewStatus(event.target.value);
          }}>
         <option value=""></option> 
        <option value="Enrolled">Enrolled</option>
        <option value="Rejected">Rejected</option>
         <option value="Pending">Pending</option>
       </select>
        <button class="btn btn-warning" onClick={()=>{
        updateStatus(val.id);
        }}>Update Status</button>
       </div>
    </td>
     <td> <button class="btn btn-danger" onClick={() =>{
        deleteStudent(val.id);
      }}>Delete</button>
     </td>  
  </tr>
</table>
          </div>
        })}
       </div>
    </div>  
  );
}

export default App;
