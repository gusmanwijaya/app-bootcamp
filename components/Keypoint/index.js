/* eslint-disable @next/next/no-img-element */
export default function Keypoint({ img, desc }) {
  return (
    <div className="d-flex align-items-start gap-3">
      <img src={img} alt="semina" />
      <span>{desc}</span>
    </div>
  );
}
