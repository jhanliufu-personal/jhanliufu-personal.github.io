---
layout: project
year: 2024
location: University of Chicago
title: "HyperBCI: unsupervised domain adaptation and TinyML for self-calibrating brain computer interface"
description: "Designing BCI models capable of unsupervised self-calibration and deploying the model on an FPGA-based neural implant in rodent brain."
slides: "/assets/slides/20240816_ai_for_bio_presentation.pdf"
lab: 
  - Henry Hoffmann
  - Jai Yu
---

## Project description
<div style="font-size: 20px;">
    <p>
    Deep learning (DL) based brain computer interface (BCI) models are powerful algorithms for mapping brain activity to human interpretable concepts in real time. Such models have been used to develop neural prostheses to serve patients suffering from different disabilities. Due to the neural differences between individuals, BCI models need to be calibrated to perform accurately on a new user. Due to the non-stationarity of neural activity, BCI models also need to be repeatedly adjusted to stay accurate throughout the usage of one user. Both are examples of the broader problem of <strong>unsupervised domain adaptation (UDA)</strong> in machine learning. Existing UDA methods often require labeled data from new users for supervised training or large amounts of unlabeled data from both existing and new users for iterative, computationally intensive alignment processes. These data requirements pose significant challenges for real-time BCI applications on edge devices like brain implantable chips.
    </p>
    <p>
    To address this challenge, we design <strong>HyperBCI for unsupervised, data-efficient and computation-efficient calibration</strong>. HyperBCI is designed to extract information from unlabeled brain data and generate near-optimal network weights according to the extracted information. The proposed calibration method only involves forward passing the recorded data and is therefore free of any iterative optimization process. We deploy HyperBCI on an <strong>FPGA</strong>-based neural implant and achieve closed-loop and low-power operation using <strong>TinyML</strong> techniques. The implant will be implanted into a freely behaving rodent to demonstrate its potential for real-life applications. HyperBCI will enable self-calibrating BCI systems that self-calibrate and thus maintain reliable performance through the long run.
    </p>
</div>

<div align="center">
    <img src="/assets/images/hyperBCI_graphical_abstract.png" alt="Example Image" width="800"/>
    <p style="text-align: left; font-size: 16px;">
        <strong>Figure 1.</strong> Schematic of HyperBCI, a hypernetwork-based self-calibrating BCI system. The primary network and the hypernetwork are jointly pre-trained on a pool of existing users. During inference time, unsupervised adaptation is achieved through the hypernetwork which is consisted of the encoder and the weight generator. The encoder processes unlableled data from new user and generates an embedding, which instructs the weight generator to produce near-optimal model weights for the new subject.
    </p>
<div>


