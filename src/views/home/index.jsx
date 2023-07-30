import Layout from "../../common/Layout";

const bannerData = {
  title: "test na ja",
  desc:
    "เราไม่ได้มีหน้าที่อธิบายความฝันให้ใครฟัง แต่เรามีหน้าที่ทำความฝันของเราให้เป็นจริง อ่านต่อได้ที่",
};

function HomeViews() {
  return (
    <Layout
     views={
      <div className="banner-bg">
        <div className="container">
          <div className="banner-con">
            <div className="banner-text">
              <h1>{bannerData.title}</h1>
              <p>{bannerData.desc}</p>
              <a href="#" className="banner-btn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    } 
    word={"test"} 
     />
  );
}

export default HomeViews;
