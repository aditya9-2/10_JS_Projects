const input = document.getElementById('input');
const searchBtn = document.getElementById('search-btn');
const profileContainer = document.getElementById('profileContainer');
const loding = document.getElementById('loding');

const url = 'https://api.github.com/users';

const generateProfile = (profile) => {

    return `
            <div class="card">
            <div class="top">
                <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" alt="avatar">
                    </div>

                    <div class="name">
                        <h1>${profile.name}</h1>
                        <h1>@${profile.login}</h1>
                    </div>

                </div>

                <div class="righ">
                    <a href="${profile.html_url}" target="_blank">
                    <button class="primary-btn" id="profileBtn">Check Profile</button>
                    </a>
                </div>
            </div>

            <div class="status">
                <div class="status-item">
                    <h3>Followers</h3>
                    <p>${profile.followers}</p>
                </div>
                <div class="status-item">
                    <h3>Followings</h3>
                    <p>${profile.following}</p>
                </div>
                <div class="status-item">
                    <h3>Respos</h3>
                    <p>${profile.public_repos}</p>
                </div>
            </div>
        </div>
            
    `
};

const getUserData = async () => {
    const username = input.value;

    loding.innerText = 'Loading...';
    loding.style.color = 'black';

    try {

        const res = await fetch(`${url}/${username}`);
        const data = await res.json();
        console.log(data);

        if (data.bio) {
            loding.innerText = '';
            profileContainer.innerHTML = generateProfile(data);
        } else {
            loding.innerHTML = data.message;
            loding.style.color = 'red';
        }

    }
    catch (error) {
        console.log(error);
        loding.innerText = '';
    }
};
searchBtn.addEventListener('click', getUserData);