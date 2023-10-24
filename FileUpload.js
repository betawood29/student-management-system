import React, { Component } from 'react';

class FileUpload extends Component {
  handleFileChange = (e) => {
    const file = e.target.files[0];
    // You can handle the selected file here, for example, by uploading it to a server.
    console.log('Selected file:', file);
  };

  render() {
    return (
      <div>
        Upload 
        <input type="file" accept=".pdf,.doc,.docx" onChange={this.handleFileChange} />
      </div>
    );
  }
}

export default FileUpload;
