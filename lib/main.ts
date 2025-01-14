// import Timeline from './Timeline.vue';
// import './v-lib.css';

// export default Timeline;

import Timeline from './Timeline.vue';

// Dynamically inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = new URL('./v-lib.css', import.meta.url).href;
  document.head.appendChild(style);
}

export default Timeline;
