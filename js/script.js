const loadVideo = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${searchText}`);
    const data = await res.json();
    const videos = data.data;
    displayVideos(videos);
}


const displayVideos = videos =>{

    const videoContainer = document.getElementById('video-container');
    videoContainer.textContent = '';

    videos.forEach(video =>{

        const author = video.authors;

        author.forEach(profile =>{

            const videoCard = document.createElement('div');
            videoCard.classList = `pb-3`;
            videoCard.innerHTML = `
                <figure><img src="${video.thumbnail}" class="rounded-lg w-full xl:h-48 md:h-40 hover:brightness-75 duration-150 cursor-pointer" /></figure>
                <div class="flex gap-3 pt-5">
                    <div>
                        <img class="w-12 h-12 rounded-full cursor-pointer" src="${profile.profile_picture}">
                    </div>
                    <div>
                        <h2 class="text-color3 text-base font-bold">${video.title}</h2>
                        <p class="text-color4 text-sm font-normal pt-3 pb-1">${profile.profile_name}</p>
                        <p class="text-color4 text-sm font-normal">${video.others.views} views</p>
                    </div>
                </div>
            `;
            videoContainer.appendChild(videoCard);
        })
    })
}

// handle search button 
const categoryAll = () =>{
    const searchText = 1000
    console.log(searchText);
    loadVideo(searchText);
}
const categoryMusic = () =>{
    const searchText = 1001
    console.log(searchText);
    loadVideo(searchText);
}
const categoryComedy = () =>{
    const searchText = 1003
    console.log(searchText);
    loadVideo(searchText);
}
const categoryDrawing = () =>{
    const searchText = 1005
    console.log(searchText);
    loadVideo(searchText);
}


// loadVideo();