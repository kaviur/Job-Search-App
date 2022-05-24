// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { postWithToken } from '../../../api'
// import '../../../css/postulant.css'

// export const Profile = () => {
 

//     const {id} = useParams()
//     const [developer, setDeveloper] = useState({})

//     const handleProfileForm = (event) => {
//         event.preventDefault()
//         const {name, lastname,email,country, salary, english_level, level_of_experience, mode, profession, about} = event.target

//         const profileData = {
//             name: name.value,
//             lastname: lastname.value,
//             email: email.value,
//             country: country.value,
//             salary: salary.value,
//             english_level: english_level.value,
//             level_of_experience: level_of_experience.value,
//             mode:mode.value,
//             profession: profession.value,
//             about: about.value
//         }

//         postWithToken("/api/offer/",profileData)
//         .then(data=>{
//         addOffer(profileData);
//         navigate("/listOffers", { replace: true });
//         })
//         .catch(error=>{
//         console.log(error.response.data)
//         })
//     }

//     // <h2>{developer.name+" "+developer.lastname}</h2>
//     // <p>{developer.email}</p>
//     // <p>{developer.photo}</p> noo
//     // <p>{developer.cover_page}</p> noo
//     // <p>{developer.english_level}</p>
//     // <p>{developer.country}</p>
//     // <p>{developer.profession}</p>
//     // <p>{developer.about}</p>
//     // <p>{developer.mode}</p>
//     // <p>{developer.experience}</p> noo
//     // <p>{developer.portafolio}</p>
//     // <p>{developer.level_of_experience}</p>






//     return (
//     <>
//         <div className="container rounded bg-white mt-8 mb-8 body1  marginT" >
//             <div className="row justify-content-center">
//                 <div className="col-md-3 border-right">
//                     <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
//                 </div>
//                 <div className="col-md-5 border-right">
//                     <div className="p-3 py-5">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h4 className="text-right">Datos personales</h4>
//                         </div>
//                         <form onSubmit={ handleProfileForm }>
//                             <div className="row mt-2">
//                                 <div className="col-md-6">
//                                     <label className="labels">Nombre</label>
//                                     <input type="text" className="form-control" placeholder="Nombre" name='name'></input>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <label className="labels">Apellido</label>
//                                     <input type="text" className="form-control" name='lastname' placeholder="Apellido"></input>
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-md-12">
//                                     <label className="labels">Email</label>
//                                     <input type="text" className="form-control" placeholder="Email" name='email'></input>
//                                 </div> 
//                             </div>
        
//                             <div className="row mt-3">
//                                 <div className="col-md-6">
//                                     <label className="labels">País</label>
//                                     <input type="text" className="form-control" placeholder="Pais" name='country'></input>
//                                 </div>
    
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-md-12">
//                                     <label className="labels">Profesión</label>
//                                     <input type="text" className="form-control" placeholder="Profesión" name='profession'></input>
//                                 </div> 
//                             </div>
//                             <div className="row">
//                                 <div className='col-md-6'>
//                                     <div className="form-group">
//                                         <label>Señority</label>
//                                         <select name='level_of_experience' className="select-css">
//                                             <option value="">Seleccione el nivel</option>
//                                             {
//                                             filters!=""
//                                             ?
//                                                 filters[0].level_of_experience.map(level => (
//                                                 <option key={level} value={level}>{level}</option>
//                                                 ))
//                                             :
//                                                 <option key={uuid()} value="">cargando...</option>
//                                             }
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-md-12">
//                                     <label className="labels">Portafolio</label>
//                                     <input type="text" className="form-control" placeholder="Url portafolio" name='portafolio'></input>
//                                 </div> 
//                             </div>
//                             <div className="row">
//                                 <div className='col-md-6'>
//                                     <div className="form-group">
//                                         <label>Nivel de inglés</label>
//                                         <select name='english_level' className="select-css">
//                                             <option value="">Seleccione el nivel</option>
//                                             {
//                                                 filters!=""
//                                                 ?
//                                                 filters[0].english_level.map(level => (
//                                                     <option key={level} value={level}>{level}</option>
//                                                 ))
//                                                 :
//                                                 <option key={uuid()} value="">cargando...</option>
//                                             }
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className='col-md-6'>
//                                 <div className="form-group">
//                                     <label>Modalidad</label>
//                                     <select name='mode' className="select-css">
//                                         <option value="">Elige la modalidad</option>
//                                         {
//                                         filters!=""
//                                         ?
//                                             filters[0].mode.map(item => (
//                                             <option key={item} value={item}>{item}</option>
//                                             ))
//                                         :
//                                             <option key={uuid()} value="">cargando...</option>
//                                         }
//                                     </select>
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className="row mt-3">
//                                 <div className="col-md-12">
//                                     <label className="labels">Sobre mi</label>
//                                     <input type="text" className="form-control" placeholder="sobre mi" name='about'></input>
//                                 </div> 
//                             </div>
//                             <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Guardar Perfil</button></div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }
