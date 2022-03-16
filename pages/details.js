/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../components/HeadTitle";
import Navbar from "../components/Navbar";
import Keypoint from "../components/Keypoint";
import GrowToday from "../components/GrowToday";
import Story from "../components/Story";
import Footer from "../components/Footer";

import Link from "next/link";

export default function Details() {
  return (
    <>
      <HeadTitle title="Details" />

      <section className="bg-navy">
        <Navbar isAuthPage={false} isLogin={false} />
      </section>

      <div className="preview-image bg-navy text-center">
        <img
          src="assets/images/details-image.png"
          className="img-content"
          alt="semina"
        />
      </div>

      <div className="details-content container">
        <div className="d-flex flex-wrap justify-content-lg-center gap">
          <div className="d-flex flex-column description">
            <div className="headline">
              Start Your Design Career With Design Sprint
            </div>
            <div className="event-details">
              <h6>Event Details</h6>
              <p className="details-paragraph">
                Most realtors and investors are using Social Media (Facebook and
                Google)
                <b>ineffectively because</b> they do not know what they are
                doing or to start. They spend hours and hours trying different
                things and getting nowhere. This makes them feel like giving up
                on marketing altogether.
              </p>
              <p className="details-paragraph">
                We are a group of professionals who have decided to help people
                making travel experiences <b>whenever they want</b> and wherever
                they are. Our virtual tours have as their topic the beauties of
                the ancient world, such as Ancient Egypt or Ancient Rome, Art
                and History.
              </p>
            </div>
            <div className="keypoints">
              <Keypoint
                img="assets/icons/ic-check.svg"
                desc="Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether."
              />
              <Keypoint
                img="assets/icons/ic-check.svg"
                desc="Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether."
              />
              <Keypoint
                img="assets/icons/ic-check.svg"
                desc="Hours trying different things and getting nowhere makes them
                  feel like giving up on marketing altogether."
              />
            </div>
            <div className="map-location">
              <h6>Event Location</h6>
              <div className="map-placeholder">
                <div className="maps">
                  <img src="assets/images/maps.png" alt="" />
                  <div
                    className="absolute d-flex justify-content-center align-items-center"
                    id="hoverMe"
                  >
                    <a href="#" className="btn-navy" id="btn-maps">
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column card-event">
            <h6>Your Speaker</h6>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img src="assets/images/avatar.png" alt="semina" width="60" />
              <div>
                <div className="speaker-name">Shayna Putri</div>
                <span className="occupation">Designer</span>
              </div>
            </div>
            <hr />
            <h6>Get Ticket</h6>
            <div className="price my-3">
              $2,980<span>/person</span>
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="assets/icons/ic-marker.svg" alt="semina" /> Gowork,
              Bandung
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="assets/icons/ic-time.svg" alt="semina" /> 15.00 PM WIB
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="assets/icons/ic-calendar.svg" alt="semina" /> 22 Agustus
              2022
            </div>
            <Link href="/checkout">
              <a className="btn-green">Join Now</a>
            </Link>
          </div>
        </div>
      </div>

      <GrowToday text="Next One" title="Similiar Events" />

      <Story />

      <Footer />
    </>
  );
}
