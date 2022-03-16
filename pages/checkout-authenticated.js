/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheckoutAuthenticated() {
  return (
    <>
      <HeadTitle title="Checkout Authenticated" />

      <section className="bg-navy">
        <Navbar isAuthPage={false} isLogin={true} />
      </section>

      <section className="bg-navy">
        <div className="checkout container">
          <div className="text-center checkout-title">Invest In Yourself</div>

          <div className="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
            <img
              src="assets/images/details-image.png"
              className="event-image"
              alt="semina"
            />
            <div className="d-flex flex-column gap-3">
              <h5>
                Start Your Design Career <br className="d-none d-md-block" />
                With Design Sprint
              </h5>

              <div className="d-flex align-items-center gap-3">
                <img src="assets/icons/ic-marker-white.svg" alt="" />
                <span>Gowork, Bandung</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="assets/icons/ic-time-white.svg" alt="" />
                <span>15.00 PM WIB</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <img src="assets/icons/ic-calendar-white.svg" alt="" />
                <span>22 Agustus 2022</span>
              </div>
            </div>
            <div className="total-price">$2,980</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
