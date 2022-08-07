const motionQuery = matchMedia('(prefers-reduced-motion)')

const handleMotionPreferences = () => {
	const video = document.querySelector('video')
	if (motionQuery.matches) {
		video.setAttribute('controls', '')
		video.removeAttribute('autoplay')
	} else {
		video.removeAttribute('controls')
		video.setAttribute('autoplay', '')
	}
}

motionQuery.addEventListener('change', handleMotionPreferences)
handleMotionPreferences()
