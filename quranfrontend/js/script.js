const clip1 = document.getElementById('clip1');

	clip1.addEventListener('mouseenter',()=>{
		clip1.play()
	})
	clip1.addEventListener('mouseout',()=>{
		clip1.pause()
	})