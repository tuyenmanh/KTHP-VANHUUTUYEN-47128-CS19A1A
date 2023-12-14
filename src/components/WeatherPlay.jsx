import React from 'react';

function WeatherPlay() {
  return (
    <div className="bottom">
      <div className="detail-box air-quality">
        <small className="small-text">Chỉ số chất lượng không khí: Độ tốt</small>
      </div>
      <div className="detail-box jogging">
        <small className="small-text">Chạy bộ: Tốt</small>
      </div>
      <div className="detail-box driving">
        <small className="small-text">Khó khăn khi lái xe: Bình thường</small>
      </div>
      <div className="detail-box pollen">
        <small className="small-text">Phấn hoa: Ít</small>
      </div>
    </div>
  );
}


export default WeatherPlay;
