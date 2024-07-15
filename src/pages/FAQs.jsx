import React from 'react';

const FAQs = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-100 py-10 px-4">
        <h1 className="text-xl lg:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              What are your opening hours?
            </div>
            <div className="collapse-content">
              <p>Our opening hours are from 10:00 AM to 10:00 PM from Monday to Sunday.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              Do you offer delivery services?
            </div>
            <div className="collapse-content">
              <p>Yes, we offer delivery services through various partners like UberEats, DoorDash, and GrubHub.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              Do you have vegetarian and vegan options?
            </div>
            <div className="collapse-content">
              <p>Absolutely! We have a variety of vegetarian and vegan dishes available on our menu.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              Can I make a reservation?
            </div>
            <div className="collapse-content">
              <p>Yes, you can make a reservation by calling us at +919875653501 or using our online reservation system.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              Do you offer catering services?
            </div>
            <div className="collapse-content">
              <p>Yes, we offer catering services for events and parties. Please contact us for more details.</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow border border-blue-300 bg-blue-100 rounded-box mb-4">
            <div className="collapse-title text-xl font-medium">
              Where are you located?
            </div>
            <div className="collapse-content">
              <p>We are located at 5A, Salt Lake, Kolkata India.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FAQs;
