'use client'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import MainLayout from '../components/commons/MainLayout'
import { Image } from 'react-bootstrap';

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from '@apollo/client';

const query = gql`query {
  launchLatest {
    mission_name
  }
}`

const QUERY = gql`

  query Posts {
    posts {
      id
      title
      slug
      datePublished
      content {
        text
      }
    }
  }

`

const Profile = () => {

    const { data } = useSuspenseQuery(QUERY);

    console.log('data', data);
    


  return (
    <MainLayout> 
        <main className="container container-main mt-4">

            <div className="container-profile">

                <div className='profile-header align-items-center'>
                
                    <Image src='assets/avatar.jpg' className='rounded-circle border border-2 ms-3' width={70} height={70} alt='' />

                    <div className="ms-3">
                        <h5 className="mb-1 fs-5">John Doe</h5>
                        <a href="" className="text-decoration-none text-primary">Edit Profile</a> 
                    </div>
 
                </div>

                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 tabs-profile-menu"
                    fill
                    variant="underline"
                    >
                    <Tab eventKey="profile" title="Profile" className='p-3'>
                        <Table borderless>
                            <tbody>
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td>John Doe</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>johndoe2023@xmail.com</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>:</td>
                                <td>+628554466556</td>
                            </tr>
                            <tr>
                                <td>Date Birth</td>
                                <td>:</td>
                                <td>1990/05/25</td>
                            </tr>
                            </tbody>
                            
                        </Table>
                    </Tab>
                    <Tab eventKey="comment" title="Comment" className='p-3'>
                        Tab content for Comment
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
                        neque beatae. Culpa eligendi aut voluptatibus, eius debitis libero 
                        iusto tenetur quae dolor, nobis praesentium impedit facilis 
                        temporibus ipsa ea error!
                    </Tab>
                    <Tab eventKey="like" title="Like" className='p-3'>
                        Tab content for Like
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
                        neque beatae. Culpa eligendi aut voluptatibus, eius debitis libero 
                        iusto tenetur quae dolor, nobis praesentium impedit facilis 
                        temporibus ipsa ea error!
                    </Tab>
                </Tabs>

            </div>
           

        </main>
    </MainLayout>
    
  )
}

export default Profile