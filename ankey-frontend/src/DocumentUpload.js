import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DocumentUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // For now, we'll just log the file names to the console.
    acceptedFiles.forEach((file) => {
      console.log('File:', file.name);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default DocumentUpload;