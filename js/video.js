const motionQuery = matchMedia('(prefers-reduced-motion)')

const handleMotionPreferences = () => {
	const video = document.querySelector('video')
	if (motionQuery.matches) {
		video.setAttribute('controls', '')
	} else {
		video.setAttribute('autoplay', '')
	}
}

motionQuery.addEventListener('change', handleMotionPreferences)
handleMotionPreferences()
