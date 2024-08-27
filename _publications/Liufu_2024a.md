---
layout: publication
year: 2024
journal: Society for Neuroscience (SfN) annual meeting, Chicago IL
# link: "https://www.biorxiv.org/content/10.1101/2024.08.24.609522v1"
authors: Mengzhan Liufu, Zachary M. Leveroni, Sameera Shridhar, Nan Zhou, Jai Y. Yu#
order: conference
title: Evaluation and signal feature informed optimization of phase detection algorithms
repository: "https://github.com/JhanLiufu/PhaseStimAnalysis2022_Yu"
---
## Abstract 
<div style="font-size: 20px;">
    <p>
    Closed-loop phase-locked neuromodulation stimulates the brain at a specific phase of neural oscillations in real time. The technology is important for manipulating neural activity for experimental neuroscience, and for the treatment of neurological disorders. Many phase detection algorithms have been developed to enable phase-locked stimulation, but we lack the tools to evaluate their performance, especially when used with diverse types of biological signals. It is unclear what factors affect performance or how these algorithms can be optimized to maximize performance. 
    </p>
    <p>
    To evaluate algorithm performance, we calculated several metrics from the stimulation events produced by the algorithms. Stimulation accuracy and precision are common metrics of stimulation quality. However, they fail to reflect whether stimulation events form a consistent and rhythmic stimulation sequence that follows the phase of ongoing rhythmic brain activity. To quantify the rhythmicity of the stimulation events, we used metrics of rhythmicity such as inter-event interval variance, normalized pairwise variability index and autocorrelation and assessed how they report stimulation quality. Using these metrics, we analyzed simulated stimulation by three algorithms - Hilbert transform (HT), endpoint-correcting Hilbert transform (ecHT) and phase mapping (PM). To investigate the effects of signal type on algorithm performance, each algorithm was used on three different rhythmic biological signals. To identify signal features that affect stimulation quality, we quantified the signal-to-noise ratio, amplitude instability and frequency instability of each signal. Linear regression and generalized linear model were then fitted between signal features and each stimulation quality metric. 
    </p>
    <p>
    Comparing across algorithms, ecHT consistently outperformed HT and PM in all stimulation quality metrics across all signal types. The performance of HT and PM notably differed when targeting different phases. Additionally, signal type significantly affected the performance of all three algorithms. We identified signal amplitude and frequency instability as major factors in performance variations across signal types. We found that the data window used for phase estimation affected algorithm performance, and the optimal window is related to the frequency instability of the signal. This insight enables optimization of algorithm performance by matching the window size to the frequency instability of the signal. Overall, our results provide a method to evaluate and optimize the performance of phase detection algorithms for each specific phase-locked neuromodulation application. 
    </p>
</div>
