var mani = new XMLHttpRequest();
mani.open("GET","https://www.anapioficeandfire.com/api/books/1");
mani.send();
mani.onload=function(){
    var data = JSON.parse(mani.response);
   console.log(data);
   // for(var i=0;i<10;i++)
    //{
       // console.log(`Flag:${data[i].flag}`);
   // }
   // for(var i=0;i<1;i++)
  //  {
   //     console.log(data[i]);
   // }
  //  for(var i=0;i<data.length;i++)
  //  {
     //  console.log(`Name:${data[i].name} Capital:${data[i].capital}`);
   // }
   

   console.log(`Name:${data.authors[0]} bookisbn no:${data.isbn} NO of pages:${data.numberOfPages} publisher:${data.publisher}`)
  
    
    
}