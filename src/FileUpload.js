import React, { Component } from 'react';
import axios from 'axios';
import './FileUpload.css';


class FileUpload extends Component {
    state = {
        file: null
    }

    handleFile(e) {
        let file = e.target.files

        this.setState({ file: file })
    }

    handleUpload(e) {
        console.log(this.state, "This state ------$$%%^^&&")
        let file = this.state.file
        let formdata = new FormData()

        formdata.append('pdf', file)
        formdata.append('name', "Bhakti Bhanvadiya")

        axios({
            url: 'http://localhost:8080',
            method: "POST",
            headers: {
                authorization: "your token"
            },
            data: formdata
        }).then((res) => {

        }, (err) => {

        })
    }

    render() {
        return (
            <div className='center'>
                <div className='file-card'>
                    <h4>Upload File</h4>
                    

                    <div className="file-inputs">
                        {/* <label>
                            Select File
                        </label> */}
                        <input type="file" multiple name="file" onChange={(e) => this.handleFile(e)} />

                    </div>



                    <br />
                    <button type='button' onClick={(e) => this.handleUpload(e)}>Upload</button>

                </div>
            </div>
        );
    }
}
export default FileUpload;