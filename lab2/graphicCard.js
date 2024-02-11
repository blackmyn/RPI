class GraphicsCard {
    constructor(interfaceType, gpuManufacturer, gpu, gpuFrequency, videoMemory) {
    this.interfaceType = interfaceType;
    this.gpuManufacturer = gpuManufacturer;
    this.gpu = gpu;
    this.gpuFrequency = gpuFrequency;
    this.videoMemory = videoMemory;
    }
}

module.exports = GraphicsCard;