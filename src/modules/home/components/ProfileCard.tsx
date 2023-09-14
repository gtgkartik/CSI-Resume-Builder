import React, { useEffect, useState } from 'react';
import { auth } from '../../../Firebase';

const ProfileCard: React.FC<{ color: string; textcolor: string }> = (props) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, you can access user properties here
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  // Check if the user is available before accessing user properties
  if (!user) {
    // Return null or a loading indicator if user is not available yet
    return null;
  }

  return (
    <>
      <div
        className={`ls:w-[209px] ls:h-[54px] sm:w-[180px] sm:h-[60px] bg-${props.color} rounded-[6px] flex items-center justify-center space-x-3`}
      >
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName}
            className={`rounded-[2px] border-[1px] border-${props.textcolor} w-[36px] `}
          />
        )}

        <h1 className={`text-[18px] text-${props.textcolor} font-juneauRegular1`}>
          {user.displayName}
        </h1>
      </div>
    </>
  );
};

export default ProfileCard;
