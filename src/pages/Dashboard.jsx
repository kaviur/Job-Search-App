import React from 'react'
import { useContext } from 'react'
import Hello from '../components/invitado/Hello';
import PostulantDashboard from '../components/postulants/dashboard/PostulantDashboard';
import RecruiterDashboard from '../components/recruiters/dashboard/RecruiterDashboard';
import AdminDashboard from '../components/admin/dashboard/AdminDashboard';

import { userCont } from '../context/UserContext';


export const Dashboard = () => {

    const context = useContext(userCont);

    const customDashboard = ()=>{
        switch (context.user.role) {
            case 0:
                return <Hello />
                break;
            case 1:
                return <PostulantDashboard />
                break;
            case 2:
                return <RecruiterDashboard />
            case 3:
                return <AdminDashboard />
        
            default:
                break;

        }
    }

    return (
      <div>
        <h1>Panel administrativo</h1>
        <h2>{context.user.role}</h2>
        {
            customDashboard()
        }
      </div>
    )
}