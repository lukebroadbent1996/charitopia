import { useEffect } from "react";
import styled from "styled-components";

const BackgroundImg = ( setRandomImg, setRandomImgSrc ) => {

  useEffect(() => {
    const getRandomImg = () => {  
      const importAll = (r) => {
        let images = {};
        r.keys().forEach((keys) => { images[keys.replace("./", "")] = r(keys) });
        return images;
      }
      const images = importAll(require.context("../images/", false, /\.jpg$/));
      const imgArr = Object.keys(images);

      let num = Math.floor(Math.random() * imgArr.length);
  
      let newRandomImg = imgArr[num];
      let newRandomImgSrc = Object.entries(images)[num][1].default;
      // console.log(newRandomImg);
      // console.log(newRandomImgSrc);
      setRandomImg(newRandomImg);
      setRandomImgSrc(newRandomImgSrc);
    }

    getRandomImg()
  }, []);

  const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: url(${props => props.img}) no-repeat center bottom fixed;
    background-size: cover;
  `

  return StyledWrapper
}

export default BackgroundImg;