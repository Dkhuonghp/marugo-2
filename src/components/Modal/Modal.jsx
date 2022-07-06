import React, { useState, useRef, useEffect } from 'react'
import Remove from './Remove'
import "./Modal.scss"

function Modal({ closeModal }) {
    
    return (
        <div className='modalBackground'>
            <div className="modalContainer">
                <div className="title">
                    <p>このアイテムを削除しても大丈夫ですか？</p>
                    <div className="modal__footer">
                        <div className="titleCloseBtn">
                            <div onClick={() => closeModal(false)}>
                                キャンセル
                            </div>                            
                        </div>
                        <div className="close titleCloseBtn">
                            <div onClick={() => closeModal(false)}>
                                削除
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal