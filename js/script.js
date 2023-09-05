const loadVideo = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const videos = data.data;
    displayVideos(videos);
}


const displayVideos = videos =>{

    const videoContainer = document.getElementById('video-container')

    videos.forEach(video =>{

        const author = video.authors

        author.forEach(profile =>{

            const videoCard = document.createElement('div');
            videoCard.classList = `pb-3`
            videoCard.innerHTML = `
                <figure><img src="${video.thumbnail}" class="rounded-lg w-full xl:h-48 md:h-40" /></figure>
                <div class="flex gap-3 pt-5">
                    <div>
                        <img class="w-12 h-3/4 rounded-full" src="${profile.profile_picture}">
                    </div>
                    <div>
                        <h2 class="text-color3 text-base font-bold">${video.title}</h2>
                        <p class="text-color4 text-sm font-normal pt-3 pb-1">${profile.profile_name}</p>
                        <p class="text-color4 text-sm font-normal">${video.others.views} views</p>
                    </div>
                </div>
            `;
            videoContainer.appendChild(videoCard)
        })
    })
}


loadVideo();