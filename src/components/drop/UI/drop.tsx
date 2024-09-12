import { useDropzone } from "react-dropzone"
import {IoCloud } from "react-icons/io5"
const DropUpload = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
        <section className="flex w-full flex-col">
            <div className="flex w-full flex-col rounded-2xl border-solid to-black">
                <IoCloud/>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div
                {...getRootProps()}
                className="border-dotted border-2 border-indigo-600 cursor-pointer rounded w-1/2 h-40"
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div>
        </section>

    );

}

export default DropUpload;