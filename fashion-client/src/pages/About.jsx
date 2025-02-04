import React, { useState } from 'react';
import { assets } from '../assets/assets/frontend_assets/assets';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
      {/* Who Are We Section */}
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <img src={assets.about_img} alt="Models using products" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
          <p className="text-lg mb-4">
            Beauty Barn is a pioneering skincare and beauty brand based in India, specializing in K-Beauty and Korean skincare products. We emphasize a curated selection of safe and effective skincare solutions tailored to address a variety of skin concerns.
          </p>
        </div>
      </section>
      <hr className="w-4/5 mx-auto border-gray-300" />

      {/* Meet the Founder Section */}
      <section className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 flex justify-center">
          <img src={assets.contact_img} alt="Toinali Chophi" className="w-80 h-80 object-cover rounded-full shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
          <p className="text-lg mb-4">
            Toinali Chophi embarked on her journey into the skincare industry inspired by personal experiences following childbirth.
          </p>
        </div>
      </section>
      <hr className="w-4/5 mx-auto border-gray-300" />

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <img src={assets.about_img} alt="Lab Work" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-4">
            At Beauty Barn, we are committed to quality, safety, and personalized skincare guidance.
          </p>
        </div>
      </section>
      <hr className="w-4/5 mx-auto border-gray-300" />

      {/* Video Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Watch Our Story</h2>
        <div className="flex justify-center relative">
          <img src={assets.about_img} alt="Video Thumbnail" className="w-5/6 h-96 object-cover rounded-lg shadow-lg" />
          <button 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-4 rounded-lg hover:bg-pink-500 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Watch Video
          </button>
        </div>
      </section>
      
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <p className="text-lg mb-4">Video is not available now.</p>
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-lg" 
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;