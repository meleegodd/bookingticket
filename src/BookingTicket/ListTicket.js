import React, { Component } from 'react'
import { act } from 'react-dom/test-utils';
import { connect } from 'react-redux';
import { datGheAction } from '../redux/action/TickerAction';

class ListTicket extends Component {

    renderGhe = (item) => {
        return item.map((ghe, index) => {
            let cssGheDaDat = ''
            let disabled = false;

            // Trạng thái ghê đã bị đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true
            }

            // Trạngt thái ghế đang đặt
            let cssGheDangDat = ''
            let indexDangDat = this.props.danhSachGheDangDat.findIndex(item => item.soGhe === ghe.soGhe)
            if (indexDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => { this.props.datGhe(ghe) }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderHang = (item) => {
        return item.map((ghe, index) => {
            return <span className='rowNumber firstChar text-center' key={index}>
                {ghe.soGhe}
            </span>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='hangGhe' >
                {this.renderHang(this.props.listGhe.danhSachGhe)}
            </div>
        } else {
            return <div>
                {this.props.listGhe.hang} {this.renderGhe(this.props.listGhe.danhSachGhe)}
            </div>
        }

    }

    render() {
        return (
            <div className='text-light text-left mt-3 ml-5'>
                {this.renderHangGhe()}
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
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTicket)