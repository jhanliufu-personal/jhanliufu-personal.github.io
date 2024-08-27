---
layout: project
year: 2021
location: University of Chicago
title: Phase-specific optogenetic stimulation and prefrontal-hippocampal coherence
description: "Optimized phase detection algorithms for phase-specific neurostimulation, and 
used the technology to understand prefrontal-hippocampal coherence."
repository: "https://github.com/JhanLiufu/PhaseStim2022_Yu"
publications: Liufu_2024a, Liufu_2024b
lab: 
- Jai Yu
---
## Project description
<div style="font-size: 20px;">
    <p>
    Coordination between the prefrontal cortex (PFC) and hippocampus (HPC) is essential for learning and memory. Increased coherence in the theta range (6-9 Hz) between the oscillating local field potentials (LFPs) of these two regions has been observed during memory retrieval. Simultaneously, neurons in one region tend to fire preferentially at specific phases of the theta wave in the other region. However, there has not been causal evidence supporting the role of phase-specific prefrontal-hippocampal coherence. It is unclear whether the effects of the coherence are specific to certain theta phases. 
    </p>

    <p>
    In this project, we use phase-specific stimulation to entrain rhythmic neural activity in freely moving rats performing a spatial navigation task. We optogenetically stimulate the medial prefrontal cortex (mPFC) at specific phases of the hippocampal theta. We vary the target phase to answer whether the effects are specific to certain phases. To ensure consistent and accurate stimulation, we identified signal properties that affect stimulation performance and developed a method to efficiently optimize the performance for each animal.
    </p>
</div>

<div align="center">
    <img src="/assets/images/CLC_graphical_abstract.png" alt="Example Image" width="800"/>
    <p style="text-align: left; font-size: 16px;">
        <strong>Figure 1.</strong> Schematic of the phase-specific optogenetic neurostimulation paradigm. (A) Behavioral experiment setup. Freely moving rodents learn to navigate a Y-shaped maze for food rewards using working memory. Local field potential (LFP) is streamed in real time for closed-loop phase-specific stimulation. (B) real-time phase detection for phase-specific stimulation. Raw LFP is filtered acausally into the theta range (6-9 Hz). Current oscillatory phase is iteratively estimated using endpoint-corrected Hilbert transform (ecHT), and an optogenetic stimulation pulse is issued when the estimated phase reaches a specific target phase.
    </p>
<div>