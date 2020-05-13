const mongoose    = require('mongoose'),
      CPU         = require('./models/cpu'),
      GPU         = require('./models/gpu'),
      Case        = require('./models/case'),
      Memory      = require('./models/memory'),
      Motherboard = require('./models/motherboard'),
      Storage     = require('./models/storage'),
      PowerSupply = require('./models/power');

const cpuData = [{
    socket: "AMD AM4",
    brand : "AMD",
    model : "RYZEN 3 3300X",
    codeName : "ZEN 2",
    clock : "3800 - 4300 MHz",
    threads : "4 / 8",
    price: 120,
    releaseDate: new Date("April 21, 2020")
}];
const gpuData = [{
    brand : "GIGABYTE",
    model : "GV-N207SGAMING OC-8GD",
    manufacturer: "NVIDIA",
    gpuClock : "1410 - 1620 (Boost) MHz",
    memoryclock : "14000 MHz",
    memory : "8192 MB",
    bus : "256 Bit",
    price: 600,
    releaseDate: new Date("08.27.2018")
}];
const caseData = [{
    model: "CA-H510i-W1",
    weight : "14.99 lbs.",
    brand : "NZXT",
    price: 99,
    releaseDate: new Date("08.27.2018")
}];
const memoryData = [{
    capicity: "16GB (2 x 8GB)",
    stickType : "288-Pin DDR4",
    cellType : "SDRAM",
    clockFrequency : "DDR4 3200 (PC4 25600)",
    brand : "Crucial",
    model : "BL2K8G32C16U4B",
    price: 79,
    releaseDate: new Date("08.27.2018")
}];
const motherboardData = [{
    chipset: "Intel Z490",
    socket : "LGA 1200",
    memorySlots : "4×288pin",
    brand: "GIGABYTE",
    formFactor: "Extended ATX",
    memoryType: "DDR4",
    networkChip: "AQUANTIA 10GbE LAN",
    audioChip: "Realtek ALC1220-VB codec+ESS ES9218P DAC (front panel audio)",
    model: "Z490 AORUS XTREME WATERFORCE",
    price: 1200,
    releaseDate: new Date("05.20.2020")
}];
const storageData = [{
    brand: "SAMSUNG",
    series : "860 EVO Series",
    model : "MZ-76E1T0B/AM",
    deviceType : "SSD",
    formFactor : "2.5'",
    capacity : "1TB",
    price: 149,
    releaseDate: new Date("05.20.2020")
}];
const powerData = [{
    input: "100 - 240 V",
    output : "+3.3V@22A, +5V@22A, +12V@62.5A, -12V@0.3A, +5VSB@3A",
    modular : true,
    certification : "80 PLUS GOLD Certified",
    load : "750W",
    model : "PS-TPD-0750FNFAGU-1",
    price: 159,
    brand : "Thermaltake",
    series: "Toughpower GF1 750W - TT Premium Edition",
    releaseDate: new Date("05.20.2020")
}];
function seedDB() {
    CPU.create(cpuData, (err, newCPU)=>{
        if(err) {
            console.log(err)
        }
    })
    GPU.create(gpuData, (err, newGPU)=>{
        if(err) {
            console.log(err)
        }
    })
    Case.create(caseData, (err, newCase)=>{
        if(err) {
            console.log(err)
        }
    })
    Motherboard.create(motherboardData, (err, newMotherboard)=>{
        if(err) {
            console.log(err)
        }
    })
    Storage.create(storageData, (err, newStorage)=>{
        if(err) {
            console.log(err)
        }
    })
    Memory.create(memoryData, (err, newMemory)=>{
        if(err) {
            console.log(err)
        }
    })
    PowerSupply.create(powerData, (err, newPower)=>{
        if(err) {
            console.log(err)
        }
    })
};

module.exports = seedDB;