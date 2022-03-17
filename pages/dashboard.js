/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getTransaction } from "../services/transaction";
import jwt from "jsonwebtoken";

export default function Dashboard({ historyTransaction }) {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  return (
    <>
      <HeadTitle title="Dashboard" />

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="bg-navy">
        <div className="checkout container">
          <div className="text-center checkout-title">Invest In Yourself</div>

          {historyTransaction.length > 0 ? (
            historyTransaction.map((value, index) => (
              <div
                key={index}
                className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5"
              >
                <img
                  src={`${NEXT_PUBLIC_API}/${value?.historyEvent?.cover}`}
                  className="event-image"
                  alt="semina"
                />
                <div className="d-flex flex-column gap-3">
                  <h5>{value?.historyEvent?.title}</h5>

                  <div className="d-flex align-items-center gap-3">
                    <img src="/assets/icons/ic-marker-white.svg" alt="" />
                    <span>{value?.historyEvent?.city}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img src="/assets/icons/ic-time-white.svg" alt="" />
                    <span>15.00 PM WIB</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img src="/assets/icons/ic-calendar-white.svg" alt="" />
                    <span>{value?.historyEvent?.date}</span>
                  </div>
                </div>
                <div className="total-price">${value?.historyEvent?.price}</div>
              </div>
            ))
          ) : (
            <div>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                Oops, you have not made any transactions yet!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { tkn } = req.cookies;

  if (!tkn) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const payload = jwt.decode(Buffer.from(tkn, "base64").toString("utf-8"));
  const response = await getTransaction(payload?.participant?._id);
  return {
    props: {
      historyTransaction: response?.data?.data || [],
    },
  };
}
