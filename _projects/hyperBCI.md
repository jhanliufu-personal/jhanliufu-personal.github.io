---
layout: project
year: 2025
location: University of Chicago
title: "On-the-fly DNN adaptation via hypernetwork and contrastive learning"
# description: "Developed hypernetwork-based framework for generating LoRA matrices from unlabeled target-domain data, enabling rapid online adaptation of deep learning models. Applied here to self-calibrating BCIs."
description: |
    - Built **HyperUDA**, a zero-shot domain adaptation framework for DNNs using hypernetworks
    - Built **SupportNet**, a few-shot adaptation framework using contrastive learning and attention
    - Deployed on **MSP430** to build self-calibrating brain-computer interface (**BCI**)
# slides: "/assets/slides/20240816_ai_for_bio_presentation.pdf"
repository: "https://github.com/jhanliufu-personal/HypernetBCI"
lab: 
  - Henry Hoffmann
---

## Project description
<div style="font-size: 20px;">
    <!-- <p>
    Deep learning (DL) based brain computer interface (BCI) models are powerful algorithms for mapping brain activity to human interpretable concepts in real time. Such models have been used to develop neural prostheses to serve patients suffering from different disabilities. Due to the neural differences between individuals, BCI models need to be calibrated to perform accurately on a new user. Due to the non-stationarity of neural activity, BCI models also need to be repeatedly adjusted to stay accurate throughout the usage of one user. Both are examples of the broader problem of <strong>unsupervised domain adaptation (UDA)</strong> in machine learning. Existing UDA methods often require labeled data from new users for supervised training or large amounts of unlabeled data from both existing and new users for iterative, computationally intensive alignment processes. These data requirements pose significant challenges for real-time BCI applications on edge devices like brain implantable chips.
    </p>
    <p>
    To address this challenge, we design <strong>HyperBCI for unsupervised, data-efficient and computation-efficient calibration</strong>. HyperBCI is designed to extract information from unlabeled brain data and generate near-optimal network weights according to the extracted information. The proposed calibration method only involves forward passing the recorded data and is therefore free of any iterative optimization process. 
    We deploy HyperBCI on an <strong>FPGA</strong>-based neural implant and achieve closed-loop and low-power operation using <strong>TinyML</strong> techniques. The implant will be implanted into a freely behaving rodent to demonstrate its potential for real-life applications. HyperBCI will enable self-calibrating BCI systems that self-calibrate and thus maintain reliable performance through the long run.
    </p> -->
    <p>
    Deep neural networks (DNNs) often face significant performance drops when deployed in new domains unseen during training.
    Existing unsupervised and weakly-supervised DNN adaptation approaches require slow, compute-intensive iterative optimization that takes the model offline and disrupts normal operation. To address this, we propose <strong>HyperUDA</strong> for <strong>zero-shot</strong> and <strong>SupportNet</strong> for <strong>few-shot</strong> DNN adaptation. Both approaches achieve fast, on-the-fly adaptation through a single forward pass. This makes them highly suitable for time-critical or resource-constrained applications. 
    </p>
    <p>
    HyperUDA encodes unlabeled target data into a latent embedding, then feeds the embedding into a hypernetwork. The hypernetwork maps the embedding to a domain-conditioned weight delta for the base model. The hypernetwork, data encoder and base model are jointly trained on the task. HyperUDA adapts by modifying model weights.
    </p>
    <p>
    SupportNet adapts classification networks. The SupportNet framework includes three modules - a support encoder, a task encoder and a classification head. During training, we first contrastively train the support encoder to encode domain-specific, task-agnostic information. We then freeze the support encoder and jointly train the task encoder and classification head on the classification task. The task encoder generates task embeddings useful for the specific task; we use the attention mechanism to project task embeddings from different domains into a domain-invariant subspace. SupportNet adapts by constructing domain-invariant data representations. 
    </p>
    <p>
    We applied HyperUDA and SupportNet to build a self-calibrating brain computer interface (<strong>BCI</strong>). In BCI applications, brain signals can differ significantly between users, and even within the same user over time. We used HyperUDA and SupportNet to do on-device, on-the-fly adaptation of an edge-deployed BCI (a MSP430 microcontroller). We used [Lupe](https://github.com/mingyuan-xiang/lupe/tree/main) to convert trained PyTorch model to its optimized C representation, then deployed the C code on MSP430. 
    </p>
</div>

<div align="center">
    <img src="/assets/images/hyperBCI_graphical_abstract.png" alt="Example Image" width="800"/>
    <p style="text-align: left; font-size: 16px;">
        <strong>Figure 1.</strong> Schematic of HyperBCI, a hypernetwork-based self-calibrating BCI system. The primary network and the hypernetwork are jointly pre-trained on a pool of existing users. During inference time, unsupervised adaptation is achieved through the hypernetwork which is consisted of the encoder and the weight generator. The encoder processes unlableled data from new user and generates an embedding, which instructs the weight generator to produce near-optimal model weights for the new subject.
    </p>
<div>


