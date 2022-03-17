/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";

import Link from "next/link";
import { useState } from "react";
import { postSignIn } from "../services/auth";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const response = await postSignIn({ email, password });
    if (response?.data?.status === 400) {
      if (response?.data?.data && response?.data?.data.length > 0) {
        response?.data?.data.forEach((element) => {
          toast.error(element?.msg);
        });
      } else {
        toast.error(response?.data?.message);
      }
    } else if (response?.data?.status === 200) {
      Cookies.set(
        "tkn",
        Buffer.from(response?.data?.data, "utf-8").toString("base64")
      );
      router.push("/dashboard");
    }
  };

  return (
    <>
      <HeadTitle title="Sign In" />

      <Navbar />

      <section className="login header bg-navy">
        <div className="container">
          <div className="d-flex flex-column align-items-center hero gap-5">
            <div>
              <div className="hero-headline text-start">Sign In</div>
            </div>
            <form className="form-login d-flex flex-column mt-4 mt-md-0 p-30">
              <div className="d-flex flex-column align-items-start">
                <label htmlFor="email_address" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="semina@bwa.com"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="d-flex flex-column align-items-start">
                <label htmlFor="password" className="form-label">
                  Password (8 characters)
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Type your password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-grid mt-2 gap-4">
                <button onClick={submit} type="button" className="btn-green">
                  Sign In
                </button>
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
          <img src="/assets/images/apple-111.svg" alt="semina" />
          <img src="/assets/images/Adobe.svg" alt="semina" />
          <img src="/assets/images/slack-21.svg" alt="semina" />
          <img src="/assets/images/spotify-11.svg" alt="semina" />
          <img src="/assets/images/google-2015.svg" alt="semina" />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { tkn } = req.cookies;

  if (tkn) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
