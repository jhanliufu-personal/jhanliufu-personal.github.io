---
layout: publication
year: 2024
journal: bioRxiv
link: "https://www.biorxiv.org/content/10.1101/2024.08.24.609522v1"
authors: Mengzhan Liufu, Zachary M. Leveroni, Sameera Shridhar, Nan Zhou, Jai Y. Yu#
order: first
title: Optimizing real-time phase detection in diverse rhythmic biological signals for phase-specific neuromodulation
repository: "https://github.com/JhanLiufu/PhaseStimAnalysis2022_Yu"
---
## Abstract 
<div style="font-size: 20px;">
    <p>
    Closed-loop, phase-specific neurostimulation is a powerful method to modulate ongoing brain activity for clinical and research applications. Phase-specific stimulation relies on estimating the phase of an ongoing oscillation in real time and issuing a control command at a target phase. Phase detection algorithms based on Fast Fourier transform (FFT) are widely used due to their computational efficiency and robustness. However, it is unclear how algorithm performance depends on the spectral properties of the input signal and how algorithm parameters can be optimized. We used offline simulation to evaluate the performance of three algorithms (endpoint-corrected Hilbert Transform, Hilbert Transform and phase mapping) on three rhythmic biological signals with distinct spectral properties (rodent hippocampal theta potential, human EEG alpha and human essential tremor). First, we found that algorithm performance was more strongly influenced by signal amplitude and frequency variation compared with signal to noise ratio. Second, our simulations showed that the size of the data window for phase estimation was critical for the performance of FFT-based algorithms, where the optimal data window corresponds to the period of the oscillation. We validated this prediction with real time phase detection of hippocampal theta oscillations in freely behaving rats performing spatial navigation. Our findings define the relationship between signal properties and algorithm performance and provide a convenient method for optimizing FFT-based phase detection algorithms.
    </p>
</div>
