
import { useState, useEffect } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        position: '',
        phone: '',
        address: '',
        interests: '',
        profileLink: '',
        avatar: '',
        visibility: 'private',
    });

    useEffect(() => {
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfile((prevProfile) => ({ ...prevProfile, avatar: event.target?.result as string }));
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSave = () => {
        localStorage.setItem('profile', JSON.stringify(profile));
        alert('Profile saved successfully!');
    };

    const handleCancel = () => {
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        } else {
            alert('No saved profile to restore.');
        }
    };

    const validateProfile = () => {
        const namePattern = /^[a-zA-Z\s-]{2,50}$/;
        const phonePattern = /^\+\d{10,15}$/;
        const urlPattern = /^(http:\/\/|https:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:\/?#[\]@!$&'()*+,;=.]+$/;

        if (!namePattern.test(profile.firstName)) {
            alert('Invalid first name!');
            return false;
        }

        if (!namePattern.test(profile.lastName)) {
            alert('Invalid last name!');
            return false;
        }

        if (!phonePattern.test(profile.phone)) {
            alert('Invalid phone number!');
            return false;
        }

        if (profile.profileLink && !urlPattern.test(profile.profileLink)) {
            alert('Invalid profile link!');
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validateProfile()) {
            handleSave();
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <form>
                <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleAvatarChange}
                />
                <button type="button" onClick={handleSubmit}>Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default Profile;
