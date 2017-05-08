function readonly(target, key, descriptor){
  descriptor.writable = false;
  return descriptor;
}

export default readonly;