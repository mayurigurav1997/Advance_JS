const landImages = ["https://wallpaperaccess.com/full/2703791.jpg","https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg","https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg","https://www.mattpaynephotography.com/images/xl/Red-Mountain-Pass-Colorado.jpg"];

for (let landImg of landImages){
    const landscape = document.createElement("img");
    landscape.setAttribute("src",landImg);
    landscape.setAttribute("class","landscape-bg");
    document.body.appendChild(landscape);
}


