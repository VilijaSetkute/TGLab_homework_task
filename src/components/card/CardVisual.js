import React, { useRef, useState, useEffect } from 'react';

function CardVisual() {
  const [measure, setMeasure] = useState(340);
  const ref = useRef();

  useEffect(() => {
    setMeasure(ref.current.clientWidth);
  });

  return (
    <div className="card-visual">
      <div ref={ref} className="card-visual__box" style={{ height: `${measure}px` }} />
      <div className="card-visual_text">
        <div className="fs20">
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="fs15">
          Lorem ipsum
        </div>
        <div className="fs12">
          Lorem ipsum dolor sit
        </div>
      </div>
    </div>
  );
}

export default CardVisual;
