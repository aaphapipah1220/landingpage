import React from 'react'
const Content = () => {
  return (
    <div>
         <div className="content-wrapper">
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>20</h3>
              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>50<sup style={{fontSize: 20}}></sup></h3>
              <p>Success</p>
            </div>
            <div className="icon">
              <i className="ion icons ion-ios-checkmark-outline" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>25</h3>
              <p>On-Going</p>
            </div>
            <div className="icon">
              <i className="ion icons ion-android-alert" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>10</h3>
              <p>Failed</p>
            </div>
            <div className="icon">
              <i className="ion icons ion-android-cancel" />
            </div>
            </div>
        </div>
      </div>
    </div>
    {/* /.container-fluid */}
  </section>
  {/* /.content */}
    </div>
</div>
  )
}

export default Content;
