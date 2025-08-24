---
layout: project
year: 2023
location: University of Chicago
title: "DropConnect: Training Fault-tolerant DNNs for fault-prone RRAM deployment"
description: |
    - Developed **DropConnect**, a framework for training RRAM-fault tolerant DNNs
    - Injected Linear Bottleneck layer into DNNs to improve fault tolerance
# written_report: "/assets/written_reports/drop_connect_report_24.pdf"
repository: "https://github.com/JhanLiufu/DropConnect2023_Li"
lab: 
- Yanjing Li
---
## Project description
<div style="font-size: 20px;">
    <p>
    Resistive random-access memory (RRAM) has emerged as an efficient hardware
    platform for deep learning applications, but its currently high defect rate limits its practical
    applications. Previous work established Drop-Connect as an efficient model training method to
    make models tolerant to random faults, and it was hinted that the linear bottleneck architecture
    made MobileNetV2 more robust to random faults compared to other models.
    </p> 

    <p>
    In this study, we investigated this hypothetical fault-tolerance property of linear bottleneck with two experiments. First, we built mini mobilenets out of a small number of linear bottlenecks and quantified their performance on MNIST digit classification task under various weight drop rate. Then, we modified ResNet20 by replacing parts of the model with linear bottlenecks and quantified the performance of the modified model on CIFAR10 under random weight drops. 
    </p>

    <p>
    We concluded that linear bottleneck doesn’t have significantly advantageous fault tolerance compared to other architectures. Further investigation into the architectural nuances of MobileNetV2 is needed to understand its robustness, and other machine learning and system techniques may be applied to develop DNN applications with reliable RRAM fault tolerance.
    </p>
</div>

<div align="center">
    <img src="/assets/images/dropconnect_graphical_abstract.png" alt="Example Image" width="800"/>
    <p style="text-align: left; font-size: 16px;">
        <strong>Figure 1.</strong> Schematics for architectures used in experiments. (A) A Basic Block of ResNet consists of two 3x3 convolutions and a shortcut connection. (B) A linear bottleneck of MobileNetV2 has a 3x3 depthwise convolution, a 1x1 pointwise convolution and a shortcut connection (inverted residual). (C) Mini mobilenets are small models with varying number of linear bottlenecks connected to a fully connected layer for MNIST digit classification. (D) ResNet20 has nine Basic Blocks (18 3x3 convolutions), and each convolution could technically be replaced by a linear bottleneck.   
    </p>
<div>