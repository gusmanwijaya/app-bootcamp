/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <HeadTitle title="Sign In" />

      <Navbar isAuthPage={true} isLogin={false} />

      <section className="login header bg-navy">
        <div className="container">
          <div className="d-flex flex-column align-items-center hero gap-5">
            <div>
              <div className="hero-headline text-start">Sign In</div>
            </div>
            <form
              action=""
              className="form-login d-flex flex-column mt-4 mt-md-0 p-30"
            >
              <div className="d-flex flex-column align-items-start">
                <label htmlFor="email_address" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email_address"
                  placeholder="semina@bwa.com"
                />
              </div>
              <div className="d-flex flex-column align-items-start">
                <label htmlFor="password" className="form-label">
                  Password (8 characters)
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Type your password"
                />
              </div>
              <div className="d-grid mt-2 gap-4">
                <Link href="/checkout-authenticated">
                  <a className="btn-green">Sign In</a>
                </Link>
                <Link href="/sign-up">
                  <a className="btn-navy">Create New Account</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="brand-partner pt-0 text-center bg-navy">
        <p>Events held by top & biggest global companies</p>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <img src="assets/images/apple-111.svg" alt="semina" />
          <img src="assets/images/Adobe.svg" alt="semina" />
          <img src="assets/images/slack-21.svg" alt="semina" />
          <img src="assets/images/spotify-11.svg" alt="semina" />
          <img src="assets/images/google-2015.svg" alt="semina" />
        </div>
      </section>
    </>
  );
}
