import { useState, useEffect } from 'react';
import postPet from './images/PostForAdoption.png';
import { FaFacebook, FaTimes } from 'react-icons/fa';

const PostPetPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [area, setArea] = useState('');
  const [justification, setJustification] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState('None');
  const [picture, setPicture] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      setEmailError(false);
      setAgeError(false);
      setFormError(false);
    }
  }, [isSubmitting]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPicture(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !age ||
      !area ||
      !justification ||
      !email ||
      !phone ||
      !fileName ||
      type === 'None' ||
      ageError
    ) {
      setFormError(true);
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError(true);
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('area', area);
    formData.append('justification', justification);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('type', type);

    if (picture) {
      formData.append('picture', picture);
    }

    try {
      const response = await fetch(
        'https://pet-shopbd-server.onrender.com/services',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully');

      setEmailError(false);
      setFormError(false);
      setName('');
      setAge('');
      setArea('');
      setJustification('');
      setEmail('');
      setPhone('');
      setPicture(null);
      setFileName('');
      togglePopup();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-gray-100 py-16 px-4">
      <h2 className="text-5xl font-extrabold text-[#13124C] mt-10 text-center">
        Post a Pet for Adoption
      </h2>
      <hr className="w-1/5 mx-auto h-1 bg-[#13124C] my-8 rounded-full border-0" />

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <img
          className="w-full h-64 object-cover"
          src={postPet}
          alt="Pet Looking for a Home"
        />

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="p-8 space-y-6"
        >
          <div className="flex flex-col gap-6 md:flex-row md:space-x-4">
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Name:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">
                Pet Age:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:space-x-4">
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">
                Picture:
              </label>
              <label className="file-input-label cursor-pointer block w-full p-3 border border-gray-300 rounded-lg text-center">
                <span className="text-gray-600">
                  {fileName || 'Choose a Picture'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">
                Location:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Type:</label>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="select w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
            >
              <option disabled selected>
                Choose Your Pet
              </option>
              <option>None</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Rabbit</option>
              <option>Bird</option>
              <option>Fish</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Justification for Giving a Pet:
            </label>
            <textarea
              onChange={(e) => setJustification(e.target.value)}
              value={justification}
              className="textarea w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
              placeholder="Share your reason for adoption"
            ></textarea>
          </div>

          <h3 className="text-lg font-bold text-center mb-3">
            Contact Information
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:space-x-4">
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">Email:</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                placeholder="Type here"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13124C]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {emailError && (
            <p className="text-red-500 text-sm mt-2">
              Please provide a valid email address.
            </p>
          )}
          {formError && (
            <p className="text-red-500 text-sm mt-2">
              Please fill out all fields correctly.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#13124C] text-white py-4 rounded-lg text-lg font-semibold mt-6 hover:bg-[#0d0b5c] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Your Pet'}
          </button>

          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
                <button
                  onClick={togglePopup}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
                <h4 className="text-lg font-bold mb-4">
                  Application Submitted
                </h4>
                <p>We'll get in touch with you soon.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default PostPetPage;
