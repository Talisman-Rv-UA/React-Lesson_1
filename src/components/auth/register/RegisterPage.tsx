const RegisterPage = () => {
    return (
    <>
      <h1 className="text-center m-5">Register Page</h1>
      <section className="vh-5 text-white">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem", backgroundColor: "#212529"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Register</h3>

            <div className="form-outline mb-4">
              <input type="text" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Repeat Password</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label ps-2" htmlFor="form1Example3"> I have read and agree to the terms </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>

            <hr className="my-4"/>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
    </>
    )
};

export default RegisterPage;