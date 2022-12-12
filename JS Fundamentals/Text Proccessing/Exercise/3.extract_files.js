function extract(path) {
  let splitedPath = path.split("\\");
  let lastPathEl = splitedPath.pop();
  
  let lastComa = lastPathEl.lastIndexOf('.');
  let fileName = lastPathEl.substring(0,lastComa);
  let extension = lastPathEl.substring(lastComa+1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extract('C:\\Projects\\Data-Structures\\LinkedList.cs.sstf');
