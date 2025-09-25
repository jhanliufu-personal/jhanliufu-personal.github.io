---
layout: project
year: 2024
location: University of Chicago
title: "DCTNet: Edge-deployed DNN for low-latency online phase estimation"
description: |
    - Reduced latency of online phase estimation **10x** by deploying a pre-trained DNN on embedded **FPGA** using HLS
    - Publication under review at **IEEE** Transactions on Biomedical Engineering.
repository: "https://github.com/jhanliufu-personal/DCTNet"
lab: 
- Jai Yu
---
## Project description
<div style="font-size: 20px;">
    <p>
    The brain is full of rhythmic electrical activity, known as neural oscillations. These rhythms play a role in everything from memory to movement, and timing is key: many neurotechnology applications, like brain–computer interfaces and therapeutic stimulation, depend on knowing the exact “phase” of these rhythms in real time. Traditional mathematical methods can estimate phase, but they tend to be slow, introduce delays, and struggle when deployed on small, portable hardware.
    </p>
    <p>
    In this project, we developed a lightweight deep learning model that can estimate the instantaneous phase of brain signals quickly and accurately. Inspired by wavelet transforms, our dual-branch neural network learns to process neural data in two streams—real and imaginary components—while also using a compact frequency-based representation (via the Discrete Cosine Transform). This design not only improves accuracy over existing approaches but also keeps the model extremely small, with fewer than 5,000 parameters.
    </p>
    <p>
    Because of its efficiency, the model can run on resource-limited devices like FPGAs (field-programmable gate arrays), which are often used in portable neuroscience hardware. In tests, it achieved more accurate and lower-latency phase estimation than both traditional signal-processing methods and larger neural networks. This makes it a strong candidate for next-generation real-time brain–computer interfaces and neuromodulation systems that need fast, precise signal tracking in practical, wearable setups.
    </p>
</div>