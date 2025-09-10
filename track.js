const steps = document.querySelectorAll('.step');
const progressFill = document.getElementById('progress-fill');

const STEP_DELAY = 6000;

function activateStep(index) {
  if (index < steps.length) {
    steps[index].classList.add('active');
    let progressPercent = (index / (steps.length - 1)) * 100;
    progressFill.style.width = `${progressPercent}%`;
    
    setTimeout(() => {
      activateStep(index + 1);
    }, STEP_DELAY);
  }
}

// Start the animation
setTimeout(() => {
  activateStep(1); // Start from step 2 (index 1) because 0 is already active
}, STEP_DELAY);
