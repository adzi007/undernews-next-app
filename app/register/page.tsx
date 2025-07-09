
import React from 'react'
import AuthLayout from '../components/commons/AuthLayout'
import FormRegistration from '../components/auth/FormRegistration';


export async function generateMetadata() {
	return {
		title: 'Insider | Registration',
		description: 'My description',
	}
}

const Page = () => {
  return (
    <>
      <AuthLayout>
        <FormRegistration />
      </AuthLayout>
    </>
  );
}

export default Page