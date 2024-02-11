class ProductList {
    constructor() {
        this.subscribers = [];
        this.products = [];
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    addProduct(product) {
        this.products.push(product);
        this.notifySubscribers(`New product added: ${product.gpuManufacturer} ${product.gpu}`);
    }

    notifySubscribers(message) {
        this.subscribers.forEach(subscriber => {
            subscriber.log(message);
        });
    }
}

module.exports = ProductList;