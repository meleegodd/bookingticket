import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyVeAction } from '../redux/action/TickerAction'

class InfoTicket extends Component {
    render() {
        return (
            <div className='noted'>
                <div className='noted__item'>
                    <button className='gheDuocChon mt-4'></button>
                    <div style={{ margin: '24px 0 0 6px', fontSize: '20px' }} className='text-light'>Ghế đã đặt</div>
                </div>
                <div className='noted__item'>
                    <button className='gheDangChon mt-4'></button>
                    <div style={{ margin: '24px 0 0 6px', fontSize: '20px' }} className='text-light'>Ghế đang chọn</div>
                </div>
                <div className='noted__item'>
                    <button style={{ marginLeft: '0' }} className='ghe mt-4'></button>
                    <div style={{ margin: '24px 0 0 6px', fontSize: '20px' }} className='text-light'>Ghế chưa đặt</div>
                </div>

                <div className='mt-5 text-center'>
                    <table className="table" border={2}>
                        <thead>
                            <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((item, index) => {
                                return <tr className='text-warning' key={index}>
                                    <td>{item.soGhe}</td>
                                    <td>{item.gia.toLocaleString()}</td>
                                    <td><button className='btn btn-danger' onClick={() => { this.props.huyGhe(item.soGhe) }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='text-light'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, giaGhe) => { return (tongTien += giaGhe.gia) }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.TickerReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch(huyVeAction(soGhe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTicket)