import ProductButton from "./ProductButton";
import Image from "next/image";

const Products = () => {
  return (
    <div className="products-section" id="products">
      <div className="sec-title">Our Products</div>
      <div className="products-content">
        <div className="product">
          <div>
            <div className="product-title">Furniture</div>
            <div className="product-desc even">
              No matter what your personal style , we have just the right
              furniture for your living environment . KNM Timbers brings
              extraordinary, natural wood flooring, distinctive furniture and
              unique, wooden features. Furniture collections that blend classic
              style with heirloom quality.
            </div>
            <ProductButton />
          </div>
          {/* <div className="product-img one"><img src="/images/furniture.JPG" alt="" /></div> */}
          <div className="product-img one">
            <Image
              src="/images/furniture.JPG"
              alt=""
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="product">
          <div>
            <div className="product-title">Logging</div>
            <div className="product-desc odd">
              Elevate your space with the serene touch of wooden walls. Whether
              discreetly behind the bed, warming the living room, or defining
              dining areas, natural wood effortlessly connects interiors to the
              peaceful outdoors.
            </div>
            <ProductButton />
          </div>
          {/* <div className="product-img two"> <img src="/images/logging.JPG" alt="" /></div> */}
          <div className="product-img two">
            <Image src="/images/logging.JPG" alt="" width={400} height={300} />
          </div>
        </div>
        <div className="product">
          <div>
            <div className="product-title">Manufacturing</div>
            <div className="product-desc even">
              Enrich your living spaces with the character, warmth, and value of
              solid hardwood. Our exceptional wood floors enhance your home's
              aesthetic, offering options from shiny and new to the charm of
              antique wood.
            </div>
            <ProductButton />
          </div>
          {/* <div className="product-img three"><img src="/images/manufacturing.JPG" alt="" /></div> */}
          <div className="product-img three">
            <Image
              src="/images/manufacturing.JPG"
              alt=""
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
