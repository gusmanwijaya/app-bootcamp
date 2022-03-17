/* eslint-disable @next/next/no-img-element */
import HeadTitle from "../../../components/HeadTitle";
import Navbar from "../../../components/Navbar";
import Keypoint from "../../../components/Keypoint";
import GrowToday from "../../../components/GrowToday";
import Story from "../../../components/Story";
import Footer from "../../../components/Footer";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDetailPage } from "../../../redux/actions";

export default function Detail({ id }) {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const dispatch = useDispatch();
  const { detailEvent } = useSelector((state) => state.detailPageReducer);

  useEffect(() => {
    dispatch(setDetailPage(id));
  }, [dispatch, id]);

  return (
    <>
      <HeadTitle title="Details" />

      <section className="bg-navy">
        <Navbar />
      </section>

      <div className="preview-image bg-navy text-center">
        <img
          src={`${NEXT_PUBLIC_API}/${detailEvent?.cover}`}
          className="img-content"
          alt="semina"
        />
      </div>

      <div className="details-content container">
        <div className="d-flex flex-wrap justify-content-lg-center gap">
          <div className="d-flex flex-column description">
            <div className="headline" style={{ marginBottom: "80px" }}>
              {detailEvent?.tagline}
            </div>
            <div className="event-details">
              <h6>Event Details</h6>
              <p className="details-paragraph">{detailEvent?.about}</p>
            </div>
            {detailEvent?.keypoint && detailEvent?.keypoint.length > 0 && (
              <div className="keypoints">
                {detailEvent?.keypoint.map((value, index) => (
                  <Keypoint
                    key={index}
                    img="/assets/icons/ic-check.svg"
                    desc={value}
                  />
                ))}
              </div>
            )}
            <div className="map-location">
              <h6>Event Location</h6>
              <div className="map-placeholder">
                <div className="maps">
                  <img src="/assets/images/maps.png" alt="" />
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
              <img
                src={`${NEXT_PUBLIC_API}/${detailEvent?.speaker?.avatar}`}
                alt="semina"
                width="60"
              />
              <div>
                <div className="speaker-name">{detailEvent?.speaker?.name}</div>
                <span className="occupation">{detailEvent?.speaker?.role}</span>
              </div>
            </div>
            <hr />
            <h6>Get Ticket</h6>
            <div className="price my-3">
              ${detailEvent?.price}
              <span>/person</span>
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/assets/icons/ic-marker.svg" alt="semina" />{" "}
              {detailEvent?.city}
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/assets/icons/ic-time.svg" alt="semina" /> 15.00 PM WIB
            </div>
            <div className="d-flex gap-3 align-items-center card-details">
              <img src="/assets/icons/ic-calendar.svg" alt="semina" />{" "}
              {detailEvent?.date}
            </div>
            <Link href={`${detailEvent?._id}/checkout`}>
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

export async function getServerSideProps({ params }) {
  const { id } = params;
  return {
    props: { id },
  };
}
