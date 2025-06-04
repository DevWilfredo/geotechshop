import ProductCardComponent from '../ProductCardComponent'

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const ProductCarouselComponent = ({ products }) => {
    const productChunks = chunkArray(products, 3);

    return (
        <div className="carousel w-full">
            {productChunks.map((chunk, index) => (
                <div
                    key={index}
                    id={`slide${index + 1}`}
                    className="carousel-item relative w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
                        {chunk.map((product, idx) => (
                            <ProductCardComponent key={idx} product={product} />
                        ))}
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                            href={`#slide${index === 0 ? productChunks.length : index}`}
                            className="btn btn-circle"
                        >
                            ❮
                        </a>
                        <a
                            href={`#slide${index === productChunks.length - 1 ? 1 : index + 2}`}
                            className="btn btn-circle"
                        >
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCarouselComponent;