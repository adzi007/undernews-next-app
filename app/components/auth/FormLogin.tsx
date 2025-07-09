
'use client'
import { useEffect } from 'react'
import { Image } from "react-bootstrap"
import SignInGoogle from "./SignInGoogle"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";
// import { useEffect } from "react";

import Router from 'next/router';

enum AuthProvider {
  google = "google",
  email = "email",
}
interface UserAccount {

  fullname: string;
  email: string;
  avatar:string;
  extDbId: string;
  authProvider: AuthProvider;
  isActive: boolean;
}

const FormLogin = () => {


  return (
    <div className="d-flex">
          <main className="form-signin w-100">
            <form>
              <Image className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
              <h1 className="h3 mb-3 fw-normal">Login</h1>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

              <div className="my-4 d-flex">
                <label className="mx-auto">Or Use</label>
              </div>

              {/* <button className="btn btn-auth-social w-100 py-2 mb-2" type="button">
                <Image className="me-2" src="/assets/google.png" alt="" width={25} height={25} />
                Google
              </button> */}

              <SignInGoogle />

              <button className="btn btn-auth-social w-100 py-2 mb-2" type="button">
                <Image className="me-2" src="/assets/phone.svg" alt="" width={25} height={25} />
                No Handphone
              </button>

              <div className="my-4 d-flex">
                <label className="mx-auto">Already have account? <a href="#" className="text-primary">Login</a></label>
              </div>

            </form>
          </main>
        </div>
  )
}

export default FormLogin