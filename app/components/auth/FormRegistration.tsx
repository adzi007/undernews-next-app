'use client'

import { Image } from "react-bootstrap"



const FormRegistration = () => {
  return (
    <div className="d-flex">
          <main className="form-signin w-100">
            <form>
              <Image className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width={72} height={57} />
              <h1 className="h3 mb-3 fw-normal">Registeration</h1>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="name@example.com"/>
                <label htmlFor="name">Name</label>
              </div>
              
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="retypePassword" placeholder="Password"/>
                <label htmlFor="retypePassword">Retype Password</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>

              <div className="my-4 d-flex">
                <label className="mx-auto">Or Use</label>
              </div>

              <button className="btn btn-auth-social w-100 py-2 mb-2" type="button">
                <Image className="me-2" src="/assets/google.png" alt="" width={25} height={25} />
                Google
              </button>
              
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

export default FormRegistration