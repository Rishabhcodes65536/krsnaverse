import React from 'react'

export default function Poster() {
    return (
      <div className="container">
        <div id="carouselFirst" className="carousel slide pt-4 carousal-element" data-bs-ride="carousel" data-bs-interval="false">
          <div className="carousel-indicators d-md-flex d-none">
            <button type="button" data-bs-target="#carouselFirst" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselFirst" data-bs-slide-to="1" className="" aria-current="" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-5 pl-70 order-md-0 order-3">
                  <h3>iskcon vrindavan</h3>
                  <h4 className="text-uppercase">join our Vedic farm community</h4>
                  <p>The Sri Sri Krishna Balaram Mandir, situated in the Raman Reti area of Vrindavan, holds a special significance for devotees of the International Society.</p>
                  <button type="button" className="btn btn-primary d-flex align-items-center justify-content-center">Watch Live Darshan</button>
                </div>
                <div className="col-md-4 order-md-0 order-1">
                  <img src="/images/banner/home-banner.png" alt="" className="radhekris" />
                </div>
                <div className="col-md-3 order-md-0 order-2 py-md-0 py-4">
                  <div className="d-flex flex-column gap-4">
                    <ul className="d-flex flex-column gap-4 me-3">
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/availability.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Availability</h6>
                          <h5>365 Days Live Darshan</h5>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/community.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Community</h6>
                          <h5>Visit Vedic Farm Community</h5>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/donate.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Donate</h6>
                          <h5>Prasad Distribution</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-5 pl-70 order-md-0 order-3">
                  <h3>iskcon vrindavan</h3>
                  <h4 className="text-uppercase">food relief program</h4>
                  <p>The Sri Sri Krishna Balaram Mandir, situated in the Raman Reti area of Vrindavan, holds a special significance for devotees of the International Society.</p>
                  <button type="button" className="btn btn-primary d-flex align-items-center justify-content-center">Donate Now</button>
                </div>
                <div className="col-md-4 order-md-0 order-1">
                  <img src="/images/banner/home-banner.png" alt="" className="radhekris" />
                </div>
                <div className="col-md-3 order-md-0 order-2 py-md-0 py-4">
                  <div className="d-flex flex-column gap-4">
                    <ul className="d-flex flex-column gap-4 me-3">
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/availability.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Availability</h6>
                          <h5>365 Days Live Darshan</h5>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/community.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Community</h6>
                          <h5>Visit Vedic Farm Community</h5>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="cr-icon d-flex align-items-center justify-content-center">
                          <img src="/images/donate.svg" alt="" className="avla" />
                        </div>
                        <div className="cr-text ms-3">
                          <h6 className="mb-1">Donate</h6>
                          <h5>Prasad Distribution</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev d-md-flex d-none" type="button" data-bs-target="#carouselFirst" data-bs-slide="prev">
            <span className="carousel-control-prev-icon d-flex align-items-center justify-content-center" aria-hidden="true">
              <img src="/images/arrow-crsl.svg" alt="" className="crs-arw" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next d-md-flex d-none" type="button" data-bs-target="#carouselFirst" data-bs-slide="next">
            <span className="carousel-control-next-icon d-flex align-items-center justify-content-center" aria-hidden="true">
              <img src="/images/arrow-crsl.svg" alt="" className="crs" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
