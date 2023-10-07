import "./App.css";
import image from "./assets/image/png/img1.png";
import image1 from "./assets/image/png/img2.png";
import image2 from "./assets/image/png/img3.png";
import image3 from "./assets/image/png/img4.png";
import image4 from "./assets/image/png/img5.png";
import image5 from "./assets/image/png/img6.png";
import image6 from "./assets/image/png/img7.png";
import image7 from "./assets/image/png/img8.png";
function App() {
  return (
    <>
      <div className="container">
        <div className="text-center pt-50">
          <p className="fw_600 fs_36 font_hind text-clr ">Featured Product</p>
        </div>
        <div className="row mt_25">
          <div className="col-5  position-relative">
            <div>
              <p className="position-abslute z-index text-position explor fw_600 fs_58 font_hind">
                {" "}
                Explore More <span className="d-block">Product</span>
              </p>
              <img className="w-100 h-100 img-radius" src={image} alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="row mt-30  ">
              <div className="col-6 ">
                <div className="card">
                  <img
                    className="w-100 img-radius h-img "
                    src={image1}
                    alt=""
                  />
                  <p className="clr_black fs_16 fw_400 font_open mt30 ">
                    Concetti Di-Lusso ALESANDRDO Luxury{" "}
                    <span className="d-block">
                      {" "}
                      Turkish Spa Towels and ganic Bamboo
                    </span>{" "}
                    Robes 12 PC set
                  </p>
                  <div className="d-flx align-itm mt30 justy_between">
                    <p className="txt fs_24 fw_600 font_hind ">$169.99</p>
                    <p className="txt-2 fw_400 fs_16 font_hind line">$199.99</p>
                    <button className="button add-txt fw_600 fs_16 font_hind">
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 mt_30">
                <div className="card">
                  <img
                    className="w-100 img-radius h-img "
                    src={image2}
                    alt=""
                  />
                  <p className="clr_black fs_16 fw_400 font_open mt30 ">
                    Concetti Di-Lusso ALESANDRDO Luxury{" "}
                    <span className="d-block">
                      {" "}
                      Turkish Spa Towels and ganic Bamboo
                    </span>{" "}
                    Robes 12 PC set
                  </p>
                  <div className="d-flx align-itm mt30 justy_between">
                    <p className="txt fs_24 fw_600 font_hind ">$59.99</p>
                    <p className="txt-2 fw_400 fs_16 font_hind line">$199.99</p>
                    <button className="button add-txt fw_600 fs_16 font_hind">
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt_31">
              <div className="col-6 ">
                <div className="card">
                  <img
                    className="w-100 img-radius h-img "
                    src={image3}
                    alt=""
                  />
                  <p className="clr_black fs_16 fw_400 font_open mt30 ">
                    Concetti Di-Lusso ALESANDRDO Luxury{" "}
                    <span className="d-block">
                      {" "}
                      Turkish Spa Towels and ganic Bamboo
                    </span>{" "}
                    Robes 12 PC set
                  </p>
                  <div className="d-flx align-itm mt30 justy_between">
                    <p className="txt fs_24 fw_600 font_hind ">$169.99</p>
                    <p className="txt-2 fw_400 fs_16 font_hind line">$199.99</p>
                    <button className="button add-txt fw_600 fs_16 font_hind">
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 mt_30">
                <div className="card">
                  <img
                    className="w-100 img-radius h-img "
                    src={image4}
                    alt=""
                  />
                  <p className="clr_black fs_16 fw_400 font_open mt30 ">
                    Concetti Di-Lusso ALESANDRDO Luxury{" "}
                    <span className="d-block">
                      {" "}
                      Turkish Spa Towels and ganic Bamboo
                    </span>{" "}
                    Robes 12 PC set
                  </p>
                  <div className="d-flx align-itm mt30 justy_between">
                    <p className="txt fs_24 fw_600 font_hind ">$59.99</p>
                    <p className="txt-2 fw_400 fs_16 font_hind line">$199.99</p>
                    <button className="button add-txt fw_600 fs_16 font_hind">
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt80 pb50">
          <button className="button1 add-txt fw_600 fs_18 font_hind">
            SHOW MORE
          </button>
        </div>
      </div>
      <div className="container">
        <div className="text-center pt-50">
          <p className="fw_600 fs_36 font_hind text-clr ">Trending Product</p>
        </div>
        <div className="row mt_25 justy_content">
          <div className="col-4">
            <div className="card2">
              <img className="w-100 img-radius  " src={image5} alt="" />
              <div className="text-p mt30">
                <h2 className="fw_700 fs_24 font_hind txt">
                  PERFECT GIFT EVEN FOR YOURSELF!
                </h2>
                <p className="fw_400 fs_17 font_open text-clr1 mt20">
                  Well suited as a gift set, these cotton towels look so
                  decorative and soft that we won’t judge if you want to keep
                  them for your family and yourself.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 pt-30">
            <div className="card2">
              <img className="w-100 img-radius " src={image6} alt="" />
              <div className="text-p mt30">
                <h2 className="fw_700 fs_24 font_hind txt">USE FOR ANYTHING</h2>
                <p className="fw_400 fs_17 font_open text-clr1 mt20">
                  Perfect for your hands, face and body… and for your kids too!
                  These towels’ softness is ideal for toddler’s and baby’s
                  delicate skin. And the best part? They’re washable, quick-dry
                  towels that will last forever.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 pt30">
            <div className="card2">
              <img className="w-100 img-radius " src={image7} alt="" />
              <div className="text-p mt30">
                <h2 className="fw_700 fs_24 font_hind txt">EXTRA ABSORBENT</h2>
                <p className="fw_400 fs_17 font_open text-clr1 mt20">
                  Thanks to its natural properties, our 100% Turkish Cotton
                  Towels are super absorbent, making the m perfect for drying
                  off in any scenario.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt80 pb50 ">
          <button className="button1 add-txt fw_600 fs_18 font_hind">
            SHOW MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
