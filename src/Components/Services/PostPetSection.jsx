import { useState, useEffect } from 'react';
import postPet from './images/PostForAdoption.png';
import { FaFacebook, FaTimes } from 'react-icons/fa';

const PostPetSection = () => {
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
    <section className="w-full bg-gradient-to-b from-white via-gray-50 to-blue-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-[#13124C] mt-10 md:mt-20 text-center">
        Post a Pet for Adoption
      </h2>
      <hr className="w-3/4 mx-auto h-1 bg-[#13124C] my-6 rounded-full border-0" />
      <img
        className="md:h-[40vh] mb-8"
        src={postPet}
        alt="Pet Looking for a Home"
      />

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex justify-between items-center mb-6">
          <label>Name:</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <label>Pet Age:</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="input-box mb-6">
          <label>Picture:</label>

          <label className="file-input-label">
            <span className="file-input-text">
              {fileName || 'Choose a Picture'}
            </span>
            <input
              className="file-input  file-input-bordered file-input-success w-full max-w-xs"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="flex justify-between items-center mb-6">
          <label>Location:</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center ">
          <label className="">
            <span className="">Type:</span>
          </label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="select w-full max-w-xs"
          >
            {' '}
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

        <div className="mt-6 mb-6 flex flex-col md:flex-row justify-between items-center">
          <h3>Justification for giving a pet:</h3>

          <textarea
            onChange={(e) => setJustification(e.target.value)}
            value={justification}
            className="textarea textarea-info"
            placeholder="justification"
          ></textarea>
        </div>

        <h3 className="text-lg font-bold text-center mb-3">
          Contact Information
        </h3>
        <div className="flex justify-between items-center mb-6">
          <label>Email:</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <label>Phone Number: </label>

          <input
            type="tel"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {emailError && (
          <p className="error-message">Please provide a valid email address.</p>
        )}
        {formError && (
          <p className="error-message">Please fill out all fields correctly.</p>
        )}

        <button type="submit" className="cta-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Your Pet'}
        </button>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h4>Application Submitted; we'll get in touch with you soon.</h4>
            </div>
            <button onClick={togglePopup} className="close-btn">
              Close <FaTimes />
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default PostPetSection;
