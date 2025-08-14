import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (name && gmail && age && image) {
      setProfile({ name, gmail, age, image });
      setIsEditing(false);
    }
  };

  const handleEdit = () => setIsEditing(true);
  const handleDelete = () => {
    setProfile(null);
    setName('');
    setGmail('');
    setAge('');
    setImage('');
    setIsEditing(true);
  };

  return (
    <div style={animatedBackgroundStyle}>
      <div className="card shadow-lg p-4" style={cardStyle}>
        <div className="text-center mb-4">
          <h3 className="fw-bold">User Profile</h3>
          <div
            className="rounded-circle overflow-hidden border mx-auto"
            style={{ width: '140px', height: '140px' }}
          >
            <img
              src={image || "https://tse4.mm.bing.net/th/id/OIP.n1C1oxOvYLLyDIavrBFoNQAAAA?w=256&h=256"}
              alt="Profile"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>

        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Gmail"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              className="form-control mb-3"
              onChange={handleImageChange}
            />
            <button className="btn btn-success w-100">Save</button>
          </>
        ) : (
          <div className="text-center">
            <h5 className="fw-bold">{profile.name}</h5>
            <p className="text-muted mb-1"><strong>Email:</strong> {profile.gmail}</p>
            <p className="text-muted"><strong>Age:</strong> {profile.age}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary w-50 me-2" onClick={handleEdit}>Edit</button>
              <button className="btn btn-danger w-50" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const animatedBackgroundStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'gradientAnimation 15s ease infinite',
  background: 'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)',
  backgroundSize: '400% 400%',
  fontFamily: 'Poppins, sans-serif'
};

const cardStyle = {
  width: '350px',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(6px)'
};

// Add this to your global CSS (or in index.css)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes gradientAnimation {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}
`;
document.head.appendChild(styleSheet);

export default Contact;
