/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from "react-redux";
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";
import { setDataSignUp } from "../redux/actions";
import { postSignUp } from "../services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.signUpReducer);

  const submit = async () => {
    const response = await postSignUp(data);
    if (response?.data?.status === 400) {
      response?.data?.data.forEach((element) => {
        toast.error(element?.msg);
      });
    } else if (response?.data?.status !== 201) {
      toast.error(response?.data?.message);
    } else if (response?.data?.status === 201) {
      toast.success("Account successfully registered!");
      router.push("/sign-in");
    }
  };

  return (
    <>
      <HeadTitle title="Sign Up" />

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="login header bg-navy">
        <div className="container">
          <div className="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div className="col-md-6">
              <div className="hero-headline text-start">
                Expand Your <br className="d-none d-md-block" />
                Knowledge & Skills
              </div>
              <p className="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br className="d-none d-lg-block" />
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div className="col-md-6">
              <form className="form-login d-flex flex-column mt-4 mt-md-0">
                <div className="d-flex flex-column align-items-start">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name here"
                    className="form-control"
                    onChange={(event) =>
                      dispatch(setDataSignUp("firstName", event.target.value))
                    }
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name here"
                    className="form-control"
                    onChange={(event) =>
                      dispatch(setDataSignUp("lastName", event.target.value))
                    }
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label htmlFor="email_address" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="semina@bwa.com"
                    onChange={(event) =>
                      dispatch(setDataSignUp("email", event.target.value))
                    }
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
                    onChange={(event) =>
                      dispatch(setDataSignUp("password", event.target.value))
                    }
                  />
                </div>
                <div className="d-flex flex-column align-items-start">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ex: Product Designer"
                    onChange={(event) =>
                      dispatch(setDataSignUp("role", event.target.value))
                    }
                  />
                </div>
                <div className="d-grid mt-2">
                  <button onClick={submit} type="button" className="btn-green">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
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
