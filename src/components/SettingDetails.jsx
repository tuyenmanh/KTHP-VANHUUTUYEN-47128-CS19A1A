// SettingDetails.js
import React from 'react';

const SettingDetails = ({ onClose, settingType }) => {
  return (
    <div className='setting-details'>
      <h2>{settingType}</h2>

      {settingType === 'Giới thiệu sản phẩm' && (
        <div>
        <p>Đây là một ứng dụng thời tiết tuyệt vời giúp bạn theo dõi dự báo thời tiết.</p>
        <p>Bạn có thể tìm kiếm thông tin thời tiết của thành phố bạn quan tâm và xem dự báo hàng ngày.</p>
        <p>Ứng dụng cũng hỗ trợ thêm thành phố yêu thích của bạn vào danh sách và xem dễ dàng.</p>
        <small>GVHD: Th.S Phạm Văn Chiến</small>
        <p><small>SVTH:Văn Hữu Tuyển-cs19a1a-47128</small></p>
      </div>
      )}
      <button onClick={onClose}>Đóng</button>
    </div>
  );
};

export default SettingDetails;
