import React, { Component } from 'react'
import './BookingTicker.css'
import InfoTicket from './InfoTicket'
import danhSachGhe from '../Data/danhSachGhe.json'
import ListTicket from './ListTicket'

export default class BookingTicker extends Component {

    renderTicket = () => {
        return danhSachGhe.map((listGhe, index) => {
            return <div key={index}>
                <ListTicket listGhe={listGhe} soHangGhe={index} />
            </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', background: "url('./img/bgmovie.jpg') no-repeat", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.8)', width: '100%', height: '100%' }}></div>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM</div>
                        <div className='text-light mt-1' style={{ fontSize: '25px' }}>Màn hình</div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className='mt-2 ml-5 screen'></div>
                            {this.renderTicket()}
                        </div>
                    </div>
                    <div className='col-4'>
                        <div style={{ fontSize: '36px' }} className='text-light'>DANH SÁCH GHẾ BẠN CHỌN</div>
                        <InfoTicket />
                    </div>
                </div>
            </div>
        )
    }
}
