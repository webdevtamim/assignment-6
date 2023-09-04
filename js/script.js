const loadVideo = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos = data.data;
    // console.log(videos);
    displayVideos(videos);
}


const displayVideos = videos =>{
    // console.log(videos);
    videos.forEach(video =>{
        console.log(video);
        // create a div 
        const videoCard = document.createElement('div');
        videoCard.classList = ``;
        videoCard.innerHTML = `
            <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" class="rounded-lg" alt="" /></figure>
            <div class="flex gap-3 pt-5">
                <div>
                    <img class="w-16 rounded-full" src="https://i.ibb.co/D9wWRM6/olivia.jpg" alt="">
                </div>
                <div>
                    <h2 class="text-color3 text-base font-bold">Building a Winning UX Strategy Using the Kano Model</h2>
                    <p class="text-color4 text-sm font-normal pt-3 pb-1">Awlad Hossain</p>
                    <p class="text-color4 text-sm font-normal">91K views</p>
                </div>
            </div>
        `
    })
}


loadVideo();