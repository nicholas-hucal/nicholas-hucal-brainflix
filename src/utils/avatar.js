export default {
    avatars: createAvatars,
    randomAvatar: randomAvatar
}

function randomAvatar() {
    const avatars = createAvatars();
    const random = Math.ceil(Math.random() * 20);
    return avatars[random];
}

function createAvatars() {
    const avatars = [];
    for (let i = 1; i < 19; i++) {
        const count = String(i).padStart(3, 0);
        avatars.push(`/images/faces_${count}.jpeg`);
    }
    return avatars;
}