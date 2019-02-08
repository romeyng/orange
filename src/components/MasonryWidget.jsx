import React, { Component } from 'react';
class MasonryWidget extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row gap-20 masonry pos-r">
            <div className="masonry-sizer col-md-6"></div>
            <div className="masonry-item  w-100">
              <div className="row gap-20">
                {/* <!-- #Outstanding Tickets ==================== --> */}
                <div className='col-md-3'>
                  <div className="layers bd bgc-white p-20">
                    <div className="layer w-100 mB-10">
                      <h6 className="lh-1">Outstandng Tickets</h6>
                    </div>
                    <div className="layer w-100">
                      <div className="peers ai-sb fxw-nw">
                        <div className="peer peer-greed">
                          <span id="sparklinedash"></span>
                        </div>
                        <div className="peer">
                          <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- #New Tickets ==================== --> */}
          <div className='col-md-3'>
              <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                  <h6 className="lh-1">New Tickets</h6>
                </div>
                <div className="layer w-100">
                  <div className="peers ai-sb fxw-nw">
                    <div className="peer peer-greed">
                      <span id="sparklinedash2"></span>
                    </div>
                    <div className="peer">
                      <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
            );
    }
}
 
export default MasonryWidget;