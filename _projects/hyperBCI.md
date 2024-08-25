---
layout: project
year: 2024
location: University of Chicago
title: "HyperBCI: unsupervised domain adaptation, edge machine learning and self-calibrating brain computer interface"
description: "Unsupervised calibration of brain computer interface (BCI) models across individuals and time using hypernetworks."
slides: "/assets/slides/20240816_ai_for_bio_presentation.pdf"
lab: 
  - Henry Hoffmann
  - Jai Yu
---

## Project description
Deep learning-based brain computer interface (BCI) models are powerful algorithms for mapping brain activity to human interpretable concepts in real time. Such models have been used to develop neural prostheses to serve patients suffering from different disabilities. Due to the neural differences between individuals, BCI models need to be calibrated to perform accurately on a new user. Due to the non-stationarity of neural activity, BCI models also need to be repeatedly adjusted to stay accurate throughout the usage of one user. However, the calibration of deep learning-based BCI models typically required labeled data from the new user for supervised training, or a large amount of unlabeled data from both the existing and the new users for unsupervised feature space alignment. Both data requirements are challenging for real-time BCI applications deployed on edge devices such as brain implantable chips. To address this challenge, we design hypernetBCI for unsupervised and data-efficient calibration. We trained a hypernetwork to extract information from unlabeled brain data and generate near-optimal network weights based on the extracted information. The proposed calibration method requires only one forward pass of the recorded data and avoids time-consuming optimization process. HypernetBCI will enable self-calibrating BCI systems that periodically perform self-adjustment and thus maintain reliable performance through the long run.

<div align="center">
    <img src="/assets/images/hyperBCI_graphical_abstract.png" alt="Example Image" width="800"/>
    <p><em>
        Figure 1. Schematic of HypernetBCI, a hypernetwork-based self-calibrating BCI system.
    </em></p>
<div>


