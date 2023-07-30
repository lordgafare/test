import Layout from "../../common/Layout";

function Content() {
  return (
    <Layout views={
    <div className="container">
        <section className="content-con">
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt=""/>
            </div>
            <div className="content-r">
                <h2>some title</h2>
                <p>
                    เอาน้อยหน่าไปกิน
                </p>
            </div>
        </section>
        <section className="content-con">
            <div className="content-l">
            <h2>some title</h2>
                <p>
                    เอาน้อยหน่าไปกิน
                </p>
            </div>
            <div className="content-r">
            <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt=""/>
            </div>
        </section>

        <section className="content-con">
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt=""/>
            </div>
            <div className="content-r">
                <h2>some title</h2>
                <p>
                    เอาน้อยหน่าไปกิน
                </p>
            </div>
        </section>


    </div>
    }/>
  )
}

export default Content


