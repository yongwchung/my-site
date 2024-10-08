import React, {useState, useEffect} from 'react'
import './Photography.css'
import Navbar from '../../Components/Navbar/Navbar'
import img1 from '../../assets/photography/DSC01452(1).jpg'
import img2 from '../../assets/photography/IMG_1295.jpg'
import img3 from '../../assets/photography/ip_3.jpg'
import img4 from '../../assets/photography/DSC01482.jpg'
import img5 from '../../assets/photography/5.jpg'
import img6 from '../../assets/photography/s24_1.jpg'
import img7 from '../../assets/photography/s24_2.jpg'
import img8 from '../../assets/photography/DSC00897.jpg'
import img9 from '../../assets/photography/DSC01328.jpg'
import exifr from 'exifr'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import webp1 from '../../assets/photography/DSC01452(1).webp'
import webp2 from '../../assets/photography/IMG_1295.webp'
import webp3 from '../../assets/photography/ip_3.webp'
import webp4 from '../../assets/photography/DSC01482.webp'
import webp5 from '../../assets/photography/5.webp'
import webp6 from '../../assets/photography/s24_1.webp'
import webp7 from '../../assets/photography/s24_2.webp'
import webp8 from '../../assets/photography/DSC00897.webp'
import webp9 from '../../assets/photography/DSC01328.webp'

const Photography = () => {

  let img = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  let webp = [webp1, webp2, webp3, webp4, webp5, webp6, webp7, webp8, webp9];
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async() => {
      console.log("in use effect");
      const output = [await exifr.parse(img1, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img2, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img3, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img4, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img5, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img6, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img7, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img8, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO']),
                      await exifr.parse(img9, ['Make', 'Model', 'FocalLength', 'FNumber', 'ExposureTime', 'ISO'])];
      console.log(output);
      setData(output);
    };
    getData();
  }, []);

  function showImg(img) {
    return (
      <img src={img}></img>
    );
  }

  function showExifData(index) {
    if (data) {
      return (
        <div className='photo-info'>
          <div className="info-make-model">
            <p>
              {(data[index]["Make"]).toUpperCase()}
            </p>
            <p>
              {(data[index]["Model"]).toUpperCase()}
            </p>
          </div>
          <div className="info-shot">
            <p>
              {data[index]["FocalLength"] + "mm"}
            </p>
            <p>
              {("f/" + data[index]["FNumber"])}
            </p>
            <p>
              {("1/" + convertShutterToString(data[index]["ExposureTime"]))}
            </p>
            <p>
              {("ISO " + data[index]["ISO"])}
            </p>
          </div>
        </div>);
    } else {
      return (<p>Loading photo info...</p>)
    }
  }

  function convertShutterToString(shutter_string) {
    var shutter_value = parseFloat(shutter_string);
    var shutter = (1 / shutter_value);
    return shutter;
  }

  function photographyWrapper() {
    return (
      <div className='photography-wrapper'>
        <Navbar></Navbar>
        <div className="photography">
          <h1>photography</h1>
          <Link className='page-links' to='/contact'><span className='photography-span'>to contact</span></Link>
          {
            img.map(function(img, index){
              return (<>
                {showImg(webp[index])}
                {showExifData(index)}
              </>)
            })
          }
          <img/> {/*whitespace*/}
        </div>
      </div>
    );
  }

  return (
    <div>
      {photographyWrapper()}
    </div>
  );
}

export default Photography