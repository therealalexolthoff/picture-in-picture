const videoElement = document.getElementById('video')

const button = document.getElementById('button')

// prompt to select media stream, pass to video element, and then play

async function  selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata () => {
            videoElement.onplay();
        }
    }
    catch (error) {
        console.log(error)
    }
}

button.addEventListener('click', async ()=>{
    // Disable Button
    button.disabled = true
    //  Start Picture in picture
    await videoElement.requestPictureInPicture()
    button.disabled = false
});

selectMediaStream()