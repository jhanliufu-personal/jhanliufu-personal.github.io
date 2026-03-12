var PROJECT_SUMMARIES = {
  'stevo-bench': [
    'Designed a benchmark to evaluate whether <strong>video world models</strong> can simulate world dynamics <strong>beyond visible pixels</strong>, probing understanding of physical, chemical, and social state evolution.',
    'Introduced <strong>observation control</strong> mechanisms — occlusion, camera lookaway, illumination dimming — to reveal whether models track hidden state or rely purely on visual extrapolation.',
    'Covers <strong>225 tasks</strong> across 6 categories: scalar processes, few-object kinematics, structural/material transformations, intent-driven behavior, physical dynamics, and chemical/social world changes.'
  ],
  'hyperBCI': [
    'Cut online DNN adaptation time (hours → seconds) and data requirements (<strong>zero-shot</strong>) in unfamiliar data domains via <strong>hypernetworks</strong> and <strong>meta learning</strong>.',
    'Achieved <strong>&gt;10%</strong> model accuracy gains from <strong>&lt;5</strong> data samples in low data regimes using contrastive learning.',
    'Engineered self-calibrating <strong>BCI</strong>s using these methods, improved BCI robustness against signal drift.',
  ],
  'artificial-vision': [
    'Compressed data footprint of pattern recognition by 10x using <strong>pixel-less</strong> data representation and spatiotemporal CNN.',
    'Helped design and fabricate hot-carrier optoelectronic materials.',
    'Publication under review at <i><strong>Nature Photonics</strong></i>.'
  ],
  'closed-loop-control': [
    'Engineered a closed-loop neuroscience experiment platform that processes neural data at <strong>30kHz</strong> in real time, supported <strong>phase-locked neural stimulation</strong> that was used in 5 distinct experiment paradigms.',
    'Optimized phase estimation algorithms by simulating on <strong>50+</strong> hrs of neural recordings (rat LFP and human EEG).',
    'Published at <i><strong>Journal of Neural Engineering</strong></i>.'
  ],
  'dctnet': [
    'Reduced latency of online phase estimation <strong>10x</strong> by deploying a pre-trained DNN on embedded <strong>FPGA</strong> using HLS.',
    'Publication under review at <i><strong>IEEE Transactions on Biomedical Engineering</strong></i>.'
  ],
  'cell-tracking': [
    'Built an algorithm to identify and track living cells using paired nanodiamonds as quantum sensor.',
    'Works by resolving the set of angles between paired nanodiamonds.'
  ],
  'drop-connect': [
    'Developed <strong>DropConnect</strong>, a framework for training RRAM-fault tolerant DNNs.',
    'Injected Linear Bottleneck layer into DNNs to improve fault tolerance.'
  ],
  'sensorimotor-adaptation': [
    'Investigated and theorized the interaction between implicit sensorimotor adaptation and explicit motor task learning.'
  ]
};

document.querySelectorAll('[data-project-summary]').forEach(function (el) {
  var key = el.getAttribute('data-project-summary');
  var bullets = PROJECT_SUMMARIES[key];
  if (!bullets) return;
  var ul = document.createElement('ul');
  var cls = el.getAttribute('data-list-class');
  if (cls) ul.className = cls;
  bullets.forEach(function (item) {
    var li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
  el.replaceWith(ul);
});
