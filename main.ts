let haloDisplay2 = kitronik_halo_hd.createZIPHaloDisplay(60)
let cwLED = 0
haloDisplay2.clear()
haloDisplay2.setBrightness(127)
haloDisplay2.setZipLedColor(cwLED, kitronik_halo_hd.colors(ZipLedColors.Red))
haloDisplay2.show()
basic.forever(function () {
    haloDisplay2.setZipLedColor(cwLED, kitronik_halo_hd.colors(ZipLedColors.Black))
    cwLED += -1
    haloDisplay2.setZipLedColor(cwLED, kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay2.show()
    basic.pause(100)
})
