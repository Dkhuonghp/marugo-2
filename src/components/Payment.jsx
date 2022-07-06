import react, { useState } from "react"
import toast from "react-hot-toast"

export default function VoucherAndPayment({
  totalCost,
  totalVoucher,
  totalPayment,
  updateVoucherInput,
  applyVoucher,
  alertResult,
  resultVoucher,
  resultApplyVoucherClass,
  totalVoucherClass,
  totalTax

}) {


  return (
    <>
      <div id="voucher-and-payment">
        
        <div id="payment">
          {/* <div className="voucher-and-payment-header">会計</div> */}
          <div className="payment-line">
            <span>商品の小計</span>
            <span id="total-bill"> ¥ {totalCost}</span>
          </div>
          <div className="payment-line">
            <span>クーポン券</span>
            <span id="total-voucher">- ¥ {totalVoucher}</span>
          </div>
          <div className="payment-line">
            <span>合計</span>
            <div style={{display:"inline-flex",}}>

              <span id="payment-line"> ¥ {totalPayment} </span>
            </div>
          </div>
          <div className="payment-line">
            <span>消費税額</span>
            <div style={{display:"inline-flex",}}>

              <span> ¥ {totalTax}</span>
            </div>
          </div>
          
          {/* <button id="purchase" onClick={handlePayment}>購入</button> */}

          {/* <div id="payment-methods">
            <div style={{ marginBottom: 4, fontSize: 16 }}>
              Chấp nhận thanh toán
            </div>
            <div>
              <span>
                <img src="img/cash.png" alt="cash" />
                <span>Tiền mặt</span>
              </span>
              <span>
                <img src="img/internet-banking.png" alt="internet-banking" />
                <span>Internet banking</span>
              </span>
              <img src="img/visa.png" alt="visa" />
              <img src="img/master-card.png" alt="master-card" />
              <img src="img/qr-code.png" alt="qr-code" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
