import { useDropzone } from "react-dropzone"
import { IoCloud } from "react-icons/io5"
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
        <section className="flex w-1/2 flex-col justify-center rounded-t-2xl">
            <div className="flex w-full flex-col rounded-2xl border-solid to-black">
                <div className="flex flex-row justify-between">

                    <div className="flex w-[2rem] h-[2rem] border-solid border-2 border-gray-500 justify-center items-center rounded-full px-1 py-1">
                        <IoCloud />
                    </div>

                    <div className="flex flex-col gap-x-4">
                        <p className="font-bold text-black text-lg">Загрузка файла</p>
                        <p className="font-medium font-mono text-slate-700 text-sm">Выберите файл или перетащите сюда</p>
                    </div>
                </div>

            </div>
            <div
                {...getRootProps()}
                className="border-dotted border-2 border-indigo-600 cursor-pointer rounded  h-40"
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