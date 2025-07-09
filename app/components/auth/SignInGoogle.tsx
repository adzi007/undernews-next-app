"use client"

import { Image } from "react-bootstrap"

import { signIn } from "next-auth/react";

const SignInGoogle = () => {

  const doLogin =  () => {
    
    signIn('google', {
      callbackUrl: window.location.origin
    });
    
  }

  return (
    <button className="btn btn-auth-social w-100 py-2 mb-2" type="button" onClick={() => doLogin()}>
        <Image className="me-2" src="/assets/google.png" alt="" width={25} height={25} />
        Google
    </button>
  )
}

export default SignInGoogle