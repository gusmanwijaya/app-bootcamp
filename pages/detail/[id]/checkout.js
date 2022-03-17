/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../../../components/HeadTitle";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPage } from "../../../redux/actions";
import { getPaymentMethod, postCheckout } from "../../../services/checkout";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Checkout({ id, paymentMethod }) {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const router = useRouter();
  const dispatch = useDispatch();
  const { detailEvent } = useSelector((state) => state.detailPageReducer);
  const { session } = useSelector((state) => state.sessionReducer);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [payment, setPayment] = useState("");

  const pay = async () => {
    const personalDetail = {
      firstName,
      lastName,
      email,
      role,
    };

    const data = {
      event: detailEvent?._id,
      personalDetail,
      payment,
      participant: session?.participant?._id,
    };

    if (
      Object.keys(personalDetail).length >= 4 &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      role !== ""
    ) {
      const response = await postCheckout(data);
      if (response?.data?.status === 400) {
        if (payment !== "") {
          if (response?.data?.data && response?.data?.data.length > 0) {
            response?.data?.data.forEach((element) => {
              toast.error(element?.msg);
            });
          } else {
            toast.error(response?.data?.message);
          }
        } else {
          toast.error("Please choose a payment method!");
        }
      } else if (response?.data?.status === 201) {
        toast.success("Successfully checkout the event!");
        router.push("/dashboard");
      }
    } else {
      toast.error("Please fill the personal detail correctly!");
    }
  };

  useEffect(() => {
    dispatch(setDetailPage(id));
  }, [dispatch, id]);

  return (
    <>
      <HeadTitle title="Checkout" />

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="bg-navy">
        <div className="checkout container">
          <div className="text-center checkout-title">Invest In Yourself</div>

          <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
            <img
              src={`${NEXT_PUBLIC_API}/${detailEvent?.cover}`}
              className="event-image"
              alt="semina"
            />
            <div className="d-flex flex-column gap-3">
              <h5>{detailEvent?.title}</h5>

              <div className="d-flex align-items-center gap-3">
                <img src="/assets/icons/ic-marker-white.svg" alt="" />
                <span>{detailEvent?.city}</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="/assets/icons/ic-time-white.svg" alt="" />
                <span>15.00 PM WIB</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="/assets/icons/ic-calendar-white.svg" alt="" />
                <span>{detailEvent?.date}</span>
              </div>
            </div>
            <div className="total-price">${detailEvent?.price}</div>
          </div>

          <form className="container form-semina">
            <div className="personal-details">
              <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
                <div className="form-title col-lg-8">
                  <span>01</span>
                  <div>Personal Details</div>
                </div>
              </div>
              <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center">
                <div className="mb-4 col-lg-4">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name here"
                    className="form-control"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="mb-4 col-lg-4">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name here"
                    className="form-control"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <div className="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
                <div className="mb-4 col-lg-4">
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
                <div className="mb-4 col-lg-4">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Designer"
                    onChange={(event) => setRole(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="payment-method mt-4">
              <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
                <div className="form-title col-lg-8">
                  <span>02</span>
                  <div>Payment Method</div>
                </div>
              </div>
              <div className="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0">
                {paymentMethod.length > 0 ? (
                  paymentMethod.map((value, index) => (
                    <div key={index} className="col-lg-4">
                      <label className="payment-radio h-100 d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-4">
                          <img
                            src={`${NEXT_PUBLIC_API}/${value?.imageUrl}`}
                            alt="Payment Method"
                          />
                          <div>{value?.type}</div>
                        </div>
                        <input
                          type="radio"
                          name="radio"
                          value={value?._id}
                          onChange={(event) => setPayment(event.target.value)}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  ))
                ) : (
                  <div>
                    <p style={{ fontSize: "18px", textAlign: "center" }}>
                      Oops, there is no payment method yet!
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex flex-column align-items-center footer-payment gap-4">
              <button type="button" onClick={pay} className="btn-green">
                Pay Now
              </button>
              <div>
                <img src="/assets/icons/ic-secure.svg" alt="" />
                <span>Your payment is secure and encrypted</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, params }) {
  const { tkn } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const { id } = params;

  const response = await getPaymentMethod();
  return {
    props: {
      id,
      paymentMethod: response?.data?.data || [],
    },
  };
}
