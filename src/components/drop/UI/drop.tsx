import {useDropzone} from "react-dropzone"

const DropUpload = () => {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: {
            'image/*': [], // Accept all image files
            'application/pdf': [], // Accept PDF files
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [], // Accept DOCX files
            'application/vnd.ms-excel': [], // Accept Excel files
        },
        onDrop: (acceptedFiles) => {
            console.log('Accepted files:', acceptedFiles);
            // You can handle the files here
            console.log(acceptedFiles);
        },
    });

    return (
        <div
            {...getRootProps()}
            style={{
                border: '2px dashed #cccccc',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
            )}
        </div>
    );

}

export default DropUpload;