import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";
import { useState } from "react";
import "./Upload.css";
export default function Upload() {
  const [files, setFiles] = useState([]);
  const [result, getResult] = useState();
  console.log(result);
  const [imageSrc, setImageSrc] = useState(undefined);
  const [show, setShow] = useState();
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  const handleClean = (files) => {
    console.log("list cleaned", files);
  };

  const handleUpload = (responses) => {
    //check the responses here
    console.log(responses);

    getResult(responses[0].serverResponse.payload["plates"]);
    let imgbase64 =
      "data:image/png;base64," + responses[0].serverResponse.payload["img"];
    setShow(imgbase64);
  };

  const handleStartUpload = (item) => {
    console.log("start upload", item);
    let dataUrl = URL.createObjectURL(item[0].file);
    //  setShow(dataUrl);
  };
  return (
    <>
      <Header />
      <div className="upload">
        <div className="upload-btn">
          <Dropzone
            style={{ minWidth: "550px" }}
            //view={"list"}
            onUploadStart={handleStartUpload}
            onChange={updateFiles}
            minHeight="195px"
            onClean={handleClean}
            value={files}
            maxFiles={1}
            //header={false}
            // footer={false}
            maxFileSize={2998000}
            //label="Drag'n drop files here or click to browse"
            //label="Suleta tus archivos aquí"
            accept=".png,image/*"
            // uploadingMessage={"Uploading..."}
            // url="https://my-awsome-server/upload-my-file"
            url={"http://127.0.0.1:8000/ocr"}
            config={{
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With",
                "Access-Control-Allow-Methods":
                  "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              },
            }}
            //of course this url doens´t work, is only to make upload button visible
            //uploadOnDrop
            //clickable={false}
            onUploadFinish={handleUpload}
          >
            {files.map((file) => (
              <FileItem
                {...file}
                key={file.id}
                onDelete={onDelete}
                onSee={handleSee}
                //localization={"ES-es"}
                resultOnTooltip
                preview
                info
                hd
              />
            ))}
            <FullScreenPreview
              imgSource={imageSrc}
              openImage={imageSrc}
              onClose={(e) => handleSee(undefined)}
            />
          </Dropzone>
        </div>
        <div className="upload-show">
          <div className="upload-image">
            {show ? <img src={show} alt="#" /> : ""}
          </div>
          <div
            className="upload-predict"
            style={{
              padding: "10px",
              // display: "flex",
              // alignItems: "start",
              // justifyContent: "start",
              // flexDirection: "column",
            }}
          >
            {/* <h4 style={{ backgroundColor: "#74b9ff", padding: "5px" }}>
              Automated License Plate Recognition (ALPR) 
            </h4> */}
            {result &&
              result.map((item, k) => {
                return (
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      backgroundColor: "#0984e3",
                      padding: "2px 5px",
                      letterSpacing: "1px",
                      fontSize: "1rem",
                      // margin:"auto",
                    }}
                    key={k}
                  >
                    {item}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
