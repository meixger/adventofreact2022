import { useState } from "react"
import { useEffect } from "react"

function ChristmasCountdown() {
    function msToDhms(seconds) {
        seconds = seconds / 1000
        var d = Math.floor(seconds / (3600 * 24))
        var h = Math.floor(seconds % (3600 * 24) / 3600)
        var m = Math.floor(seconds % 3600 / 60)
        var s = Math.floor(seconds % 60)
        return { d, h, m, s }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            var ms = new Date(Date.parse('2022-12-25') - new Date())
            setCountdown(msToDhms(ms))
        }, 1000)
        return (() => clearInterval(timer))
    }, [])

    const [countdown, setCountdown] = useState()

    return (<div className="bg-white rounded-md shadow py-5 flex flex-col gap-2">
        <h1 className="mx-5 text-xl">ChristmasCountDown</h1>
        {countdown && <div className="table">
            <div className="table-row pt-5">
                <div className="table-cell px-5 text-green-600 font-bold text-xl">
                    {countdown.d}
                </div>
                <div className="table-cell px-5 text-green-600 font-bold text-xl">
                    {countdown.h}
                </div>
                <div className="table-cell px-5 text-green-600 font-bold text-xl">
                    {countdown.m}
                </div>
                <div className="table-cell px-5 text-green-600 font-bold text-xl ">
                    {countdown.s}
                </div>
            </div>
            <div className="table-row pt-2">
                <div className="table-cell px-5">
                    days
                </div>
                <div className="table-cell px-5">
                    hours
                </div>
                <div className="table-cell px-5">
                    minutes
                </div>
                <div className="table-cell px-5">
                    seconds
                </div>
            </div>
        </div>}
    </div>)
}
export { ChristmasCountdown as ChristmasCountdown }