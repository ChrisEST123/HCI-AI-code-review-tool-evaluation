import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';

// Component's Base CSS
import "../../styles/user.css";

const PasswordResetForm = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [passwordResetStatus, setPasswordResetStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }, []);

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      console.error("Passwords don't match!");
      setPasswordResetStatus('Password mismatch');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      console.error('Password too short!');
      setPasswordResetStatus('Password too short');
      return;
    }

    try {
      setLoading(true);
      await axios.put(`${process.env.REACT_APP_API_URL}/customer/reset-password`, passwordData, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Password updated successfully!');
      setPasswordResetStatus('Password updated successfully!');
    } catch (err) {
      console.error('Error updating password:', err);
      setPasswordResetStatus('Failed to update password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={passwordData.currentPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading}>Reset Password</button>
      {passwordResetStatus && <p>{passwordResetStatus}</p>}
    </form>
  );
};

const UserTable = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Your Information"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field
          name="_id"
          label="User Id"
          hideInCreateForm
          readOnly
        />
        <Field
          name="name"
          label="User Name"
          placeholder="Your Name"
        />
        <Field
          name="mobileno"
          label="Contact No"
          placeholder="Your Contact No."
        />
        <Field
          name="email"
          label="Email"
          placeholder="Your Email"
        />
        <Field
          name="address"
          label="Address"
          placeholder="Your Address"
        />
      </Fields>

      <UpdateForm
        title="User Update Process"
        message="Update Your Profile"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={(values) => {
          const errors = {};

          if (!values._id) {
            errors.id = 'Please, provide id';
          }

          if (!values.name) {
            errors.title = 'Please, provide Your Name';
          }

          if (!values.mobileno) {
            errors.description = 'Please, provide contact No.';
          }
          if (!values.email) {
            errors.description = 'Please, provide Address';
          }
          if (!values.address) {
            errors.description = 'Please, provide Blood Type';
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Account Delete Process"
        message="Are you sure you want to delete Your Account?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={(values) => {
          const errors = {};
          if (!values._id) {
            errors._id = 'Please, provide Your id';
          }
          return errors;
        }}
      />
    </CRUDTable>

    <div>
      <h3>Reset Your Password</h3>
      <PasswordResetForm />
    </div>
  </div>
);

export default UserTable;
