const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

xhr.onreadystatechange = function () {
    // Check if the request is complete
    if (xhr.readyState === 4) {
        // Check if the request was successful
        // console.log(xhr)
        if (xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            // console.log(this.responseText);

            // Update User ID
            document.getElementById('userId').textContent = data.id;

            // Update Username
            document.querySelector('.username').textContent = `@${data.login}`;

            // Update Display Name
            document.getElementById('displayName').textContent = data.name || data.login;

            // Update Profile Picture
            document.getElementById('DP').innerHTML = `
                <img src="${data.avatar_url}" 
                     alt="${data.login}" 
                     style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; vertical-align: middle;">
            `;

            // Update Follower Count (formatted with commas)
            document.getElementById('followerCount').innerHTML = `<strong>${data.followers.toLocaleString()}</strong>`;

            // Update Account Type
            document.getElementById('type').textContent = data.type;

        } else {
            console.error('Failed to load data. Status code:', xhr.status);
        }
    }
};

xhr.send();