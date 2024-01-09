const getCroppedImageUrl=(url:string)=>{
const index=url.indexOf('media/') + 'media/'.length;
url.sclice(0 ,index)
}
export default getCroppedImageUrl;