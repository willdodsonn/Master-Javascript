function addProperty(obj, key) {
    let objectKey = obj[key];
    return objectKey===true;

}
//OR
let addProperty =function(obj,key){
  obj[key] = true;
  return obj;
}