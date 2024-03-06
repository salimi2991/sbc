
$(document).ready(function () {
	$('.Loading').fadeOut()
	var tube = new TubeAnimation("tube_container", {
			
		//Main settings
			TUBE_SIZE: 200,
			TUBE_WIDTH: 30,
			TUBE_DISTANCE: 450,
			PERSPECTIVE_DISTORTION: 0.8,
			TUBE_TORSION: 0.3,
			TUBE_STRETCH: 400,
			ROTATION_SPEED: 2,
			DOT_COLOR: 'rgb(255 255 255)',
			DOT_SIZE: .5,
			DETALIZATION: 209,
			MESH_DISTRIBUTION: 0,
			MESH_RATIO: 18.103,
			OFFSET_X: 0, //offset in pixels
			OFFSET_Y: 0, //offset in pixels
			PERCENTAGE_OFFSET_X: 0, //offset in percentages
			PERCENTAGE_OFFSET_Y: 0, //offset in percentages
	
		//Responsivity settings
			AUTO_SCALE: false,
			VIEWPORT_WIDTH: 1000,
			VIEWPORT_HEIGHT: 1000,
		
		//Mouse settings
			MOUSE_DISTANCE_MIN: 20,
			MOUSE_DISTANCE_MAX: 400,
			MOUSE_SENSITIVITY: 0.1,
			INERTIAL_TIME: 2,
			
		//Main morphing settings
			USE_MAIN_MORPHING: true,
			MAIN_MORPHING_AUTOPLAY: true,
			MAIN_MORPHING_DURATION: 1.5,
			MAIN_MORPHING_DELAY: 2,
			MAIN_MORPHING_TRANSITION_TYPE: "cubic",
	
					
		//Surface distortion settings
			SURFACE_INITIAL_DISTORTION: {
					wave1: {amplitude: 19.216, frequency: 4, phase: 1.201},
					wave2: {amplitude: 0, frequency: 3, phase: 0},
					wave3: {amplitude: 15, frequency: 2, phase: 0}   
				},
			USE_SURFACE_MORPHING: false,
			USE_SURFACE_MOTION: true,
			USE_SURFACE_SWING: false,
							 
		//Surface motion settings
			WAVE_1_MOTION_SPEED: 1.5,
			//WAVE_2_MOTION_SPEED: 1,
			WAVE_3_MOTION_SPEED: -1			
	});
});




















