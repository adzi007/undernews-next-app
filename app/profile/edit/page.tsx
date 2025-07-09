'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import MainLayout from '../../components/commons/MainLayout'
import { Image } from 'react-bootstrap';
import { useState } from 'react';

const EditProfile = () => {

    const [avatarFile, setavatarFile] = useState<File>()

    console.log('file', avatarFile);
    

    return (
        <MainLayout> 
            <main className="container container-main mt-4">

                <div className="container-profile">

                    <div className='profile-header align-items-center'>
                    
                        <Image src='../assets/avatar.jpg' className='rounded-circle border border-2 ms-3' width={70} height={70} alt='' />

                        <div className="ms-3">
                            {/* <button className='btn btn-primary' type='button'>upload photo</button> */}

                            <input type="file" id="actual-btn" hidden  onChange={(e) => setavatarFile(e.target.files?.[0]) } />

                            {/* <!-- our custom upload button --> */}
                            <label htmlFor="actual-btn" className='btn btn-primary'>upload photo</label>

                            {/* <!-- name of file chosen --> */}
                            <span id="file-chosen"> { avatarFile ? avatarFile.name : 'No file chosen' }</span>

                        </div>
    
                    </div>

                    <div className="profile-form-body p-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value="" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" value="" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="noHandphone" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="noHandphone" value="" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="dateBirth" className="form-label">Date Birth</label>
                                <input type="date" className="form-control" id="dateBirth" value="" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="noHandphone" className="form-label">Gender</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Other</option>
                                </select>
                            </div>
                        
                        
                            <button type="submit" className="btn btn-primary btn-lg w-100 mt-2">Update</button>
                        </form>

                    </div>
                </div>
            

            </main>
        </MainLayout>
        
    )
}

export default EditProfile