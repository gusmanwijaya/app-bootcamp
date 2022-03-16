import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLandingPage } from "../../redux/actions";
import CardGrowToday from "../CardGrowToday";

export default function GrowToday({ text, title }) {
  const NEXT_PUBLIC_API = process.env.NEXT_PUBLIC_API;
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state.landingPageReducer);

  useEffect(() => {
    dispatch(setLandingPage());
  }, [dispatch]);

  return (
    <section className="grow-today">
      <div className="container">
        <div className="sub-title mb-1" id="grow-today">
          <span className="text-gradient-pink">{text}</span>
        </div>
        <div className="title">{title}</div>
        <div className="mt-5 row gap">
          {event.map((value, index) => (
            <CardGrowToday
              key={index}
              id={value?._id}
              price={value?.price}
              img={`${NEXT_PUBLIC_API}/${value?.cover}`}
              title={value?.title}
              category={value?.category?.name}
              date={value?.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
