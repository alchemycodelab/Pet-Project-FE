import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard';
// import { useUserProfile } from '../../hooks/getUserProfile';
import { useSessionUser } from '../../hooks/getAuth';
import './ProfilePage.scss';
// import { Link } from 'react-router-dom';
import './ProfilePage.scss';

const ProfilePage = () => {
  const user = useSessionUser();
  if(!user){
    return null;
  }
  return (
    <>
      <p className='profileTitle'>Welcome{user.firstName}and{user.dogName}</p>
      <article key={user._id}>
        <ProfileCard
          key={user._id}
          firstName={user.firstName}
          dogName={user.dog[0].name}
          timeNeeded={user.timeNeeded}
          timeAvailable={user.timeAvailable}
          zipcode={user.address.zipcode}
          dogBio={user.dog[0].bio}
          bio={user.bio}
        />
      </article>
    </>
  );
};
ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      user_id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
export default ProfilePage;
