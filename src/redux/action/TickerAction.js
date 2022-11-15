import { DAT_VE, HUY_VE } from "../types/TickerType"

export const datGheAction = (ghe) => {
    return {
        type: DAT_VE,
        ghe
    }
}

export const huyVeAction = (soGhe) => {
    return {
        type: HUY_VE,
        soGhe
    }
}