"use client"
import { getUserInfo } from '@/services/auth.service.';
import React from 'react';

const Profile = () => {
    const data = getUserInfo();
    return (
      <div>
        <h1>Welcome back to your profile</h1>
      </div>
    );
};

export default Profile;