'use client'
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

async function Add(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "message"), {
      name: name,
      email: email,
      message: message
    });
    console.log("Document written with id: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handle = async (e) => {
    e.preventDefault();
    const added = await Add(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
      alert("Your message has been sent successfully!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <Header />
      <section className="py-16 px-6 flex flex-col my-4 items-center">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 w-full">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Have questions or need support? Reach out to us!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">📞 Phone:</span>
              <span className="text-gray-600">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">📧 Email:</span>
              <span className="text-gray-600">contact@vasista.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">📍 Address:</span>
              <span className="text-gray-600">123 Tech Avenue, Silicon Valley, CA</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-gray-700">🌐 Website:</span>
              <a href="https://www.vasista.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                www.vasista.com
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6 text-lg">
            Fill out the form below to get in touch with us.
          </p>

          <form onSubmit={handle} className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className='flex flex-col mb-4'>
              <label htmlFor='name' className='font-bold text-purple-700 mb-2'>Name:</label>
              <input
                type='text'
                id='name'
                value={name}
                className='p-3 border text-black rounded-lg focus:outline-none focus:border-purple-600'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='email' className='font-bold text-purple-700 mb-2'>Email:</label>
              <input
                type='email'
                id='email'
                value={email}
                className='p-3 border text-black rounded-lg focus:outline-none focus:border-purple-600'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='message' className='font-bold text-purple-700 mb-2'>Message:</label>
              <textarea
                rows={5}
                id='message'
                value={message}
                className='p-3 border text-black rounded-lg focus:outline-none focus:border-purple-600'
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button className='bg-purple-600 hover:bg-purple-800 text-white rounded-lg p-3 text-lg shadow-md'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
