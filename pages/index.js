import React from 'react';
import Button from '../components/Button';
import Form from '../components/Form';

function Index() {
  const syncFolders = () => {
    // Add code here to sync folders
  };

  return (
    <div>
      <Button />
      <Form />
      <button onClick={syncFolders}>Sync Folders</button>
    </div>
  );
}

export default Index;

