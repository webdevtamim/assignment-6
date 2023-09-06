// category button 
const handleCategory = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const categories = data.data;
    displayCategory(categories);
}

const displayCategory = categories =>{
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.classList = `text-center lg:space-x-6 md:space-x-4 space-x-3 space-y-4 md:space-y-0 pt-8 pb-10`;

    categories.forEach(category =>{
        const categoryCard = document.createElement('button');
        categoryCard.classList = `bg-btn2 focus:bg-btn1 text-color1 focus:text-white md:text-lg text-sm font-medium py-2.5 px-5 rounded button-btn`;
        categoryCard.setAttribute('onclick', `categoryHandle('${category.category_id}')`);
        categoryCard.innerHTML = `${category.category}`;
        categoryContainer.appendChild(categoryCard);
    })
}
handleCategory();

// handle category button
const categoryHandle = (categoryId) =>{
    toggleLoadingSpinner(true);
    loadVideo(categoryId);
}

// create loading spinner 
const loadingSpinner = document.getElementById('loading-spinner');
loadingSpinner.classList = `text-center hidden`;
loadingSpinner.innerHTML = `
    <span class="loading loading-spinner loading-lg"></span>
`;
// handle loading spinner 
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// video cards 
const loadVideo = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${searchText}`);
    const data = await res.json();
    const videos = data.data;
    displayVideos(videos);
}

const displayVideos = videos =>{
    const videoContainer = document.getElementById('video-container');
    videoContainer.classList = `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`;
    videoContainer.textContent = '';

    videos.forEach(video =>{
        const author = video.authors;
        author.forEach(profile =>{
            const timeCounter = video.others.posted_date;
            const videoCard = document.createElement('div');
            videoCard.classList = `pb-3`;
            videoCard.innerHTML = `
                <figure class="relative">
                    <img src="${video.thumbnail}" class="rounded-lg w-full xl:h-48 md:h-40 hover:brightness-75 duration-150 cursor-pointer" />
                    <span class="absolute right-3 bottom-3 bg-color3 py-1 px-1.5 rounded text-xs text-white">${video.others.posted_date?Math.floor((timeCounter / 60) / 60) + ' hrs' + ' ' + Math.floor((timeCounter / 60) % 60) + ' min' + ' ago':''}</span>
                </figure>
                <div class="flex gap-3 pt-5">
                    <div>
                        <img class="w-12 h-12 rounded-full cursor-pointer" src="${profile.profile_picture}">
                    </div>
                    <div>
                        <h2 class="text-color3 text-base font-bold">${video.title}</h2>
                        <div class="flex items-center">
                            <span class="text-color4 text-sm font-normal pt-3 pb-1">${profile.profile_name}</span>
                            <span class="mt-2 ml-2">
                            <img src="${profile.verified?'images/badge.svg':''}"
                            </span>
                        </div>
                        <p class="text-color4 text-sm font-normal">${video.others.views} views</p>
                    </div>
                </div>
            `;
            videoContainer.appendChild(videoCard);
        })
    })
    // hide loading spinner 
    toggleLoadingSpinner(false);
}
loadVideo(1000);