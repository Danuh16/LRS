import React from 'react';
import {useEffect , useState} from 'react';
import '../components/Appointment.css'

export default function Appointment() {

    const [appointment, setAppointment] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');


    useEffect(() => {
        fetchAppointment();
      }, []);

      const fetchAppointment = () => {
        fetch('http://localhost:5000/user/appointment')
          .then((response) => response.json())
          .then((data) => {
            setAppointment(data);
          })
          .catch((error) => {
            console.error('Error fetching appointments:', error);
          });
      };

      const createAppointment = () => {
        fetch('http://localhost:5000/user/appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ customerName, appointmentTime }),
        })
          .then((response) => response.json())
          .then((data) => {
            setAppointment([...appointment, data]);
            setCustomerName('');
            setAppointmentTime('');
          })
          .catch((error) => {
            console.error('Error creating appointment:', error);
          });
      };
    
      return (
        <div className='appointment' >
            <div className="header">
          <a href="/">Home </a>
        </div>
          <form onSubmit={createAppointment} >
            <div className='app-container'>
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Appointment Time"
              value={appointmentTime}
              style={{marginTop:'10%'}}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            <button type="submit">Create Appointment</button>
            </div>
          </form>
          
          <ul>
        {appointment.map((appointment) => (
          <li key={appointment._id}>
            {appointment.customerName} - {appointment.appointmentTime}
          </li>
        ))}
      </ul>
          </div>
  )
}
