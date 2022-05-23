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
            case 1:
                console.log("soy postulanteee")
                return <PostulantDashboard />
            case 2:
                console.log("soy reclutadorr")
                return <RecruiterDashboard />
            case 3:
                return <AdminDashboard />
        
            default:
                break;

        }
    }

    return (
      <div>
        {
            customDashboard()
        }
      </div>
    )
}