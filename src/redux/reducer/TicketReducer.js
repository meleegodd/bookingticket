import { DAT_VE, HUY_VE } from "../types/TickerType";

const stateDefault = {
    danhSachGheDangDat: [
        { soGhe: 'A1', gia: 1000 },
    ]
}

const TickerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_VE: {
            let gheUpdate = [...state.danhSachGheDangDat]
            let index = gheUpdate.findIndex(ghe => ghe.soGhe === action.ghe.soGhe)
            if (index !== -1) {
                gheUpdate.splice(index, 1);
            } else {
                gheUpdate.push(action.ghe)
            }
            state.danhSachGheDangDat = gheUpdate
            return { ...state }
        }
        case HUY_VE: {
            let gheUpdate = [...state.danhSachGheDangDat]
            let index = gheUpdate.findIndex(ghe => ghe.soGhe === action.soGhe)
            if (index !== -1) {
                gheUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = gheUpdate
            return { ...state }
        }
        default: return { ...state }
    }
}

export default TickerReducer;