let y위치 = 0
let x위치 = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x위치 = huskylens.readeBox(1, Content1.xCenter)
        y위치 = huskylens.readeBox(1, Content1.yCenter)
        if (x위치 < 64) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        }
        if (x위치 >= 64 && x위치 < 128) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        }
        if (x위치 >= 64 && x위치 < 128) {
            if (x위치 >= 128 && x위치 < 192) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            } else {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            }
        }
        if (x위치 >= 192) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        }
        if (x위치 >= 256) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        }
        basic.pause(100)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
