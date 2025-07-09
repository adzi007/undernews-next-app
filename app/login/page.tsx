
import React from 'react'
import AuthLayout from '../components/commons/AuthLayout'
import FormLogin from '../components/auth/FormLogin';


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
        <FormLogin />
      </AuthLayout>
    </>
  );
}

export default Page