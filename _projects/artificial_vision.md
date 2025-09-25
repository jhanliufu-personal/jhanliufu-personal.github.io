---
layout: project
year: 2024
location: University of Chicago
title: Pixel-less artificial vision with hot-carrier bioelectronic interfaces
description: |
    - Compressed data footprint of pattern recognition by 10x using pixel-less data representation and spatiotemporal CNN.
    - Helped design and fabricate hot-carrier optoelectronic materials
repository: ""
lab: 
- Bozhi Tian
---
## Project description
<div style="font-size: 20px;">
    <p>
    Conventional image sensing and classification rely heavily on pixel-based architectures. Each pixel must capture, store, and transmit discrete intensity values, which introduces substantial inefficiencies in speed, memory, and energy consumption. These limitations are especially pronounced in real-time applications, such as human–machine interfaces or neuromorphic bioelectronics, where low latency and high scalability are essential. Moreover, the rigid need for dense arrays of photodetectors increases hardware complexity and limits adaptability.
    </p>
    <p>
    To address these challenges, our project introduces a pixelless sensing and classification paradigm built on bio-inspired optoelectronic hardware. The hardware platform, a self-assembled Au–TiO₂ plasmonic metasurface, mimics the way natural leaves capture and distribute light without discrete pixels or wired interconnects. When illuminated, the metasurface generates distributed hot-carrier currents, which are then transduced into spatially varying voltage signals using a minimalist electrode array. This eliminates the need for pixelated detectors altogether while retaining high spatial information density.
    </p>
    <p>
    On top of this hardware foundation, we developed an AI-assisted computational layer to decode and classify optical input patterns. Instead of processing raw pixel grids, our system interprets analog voltage traces from just four electrodes positioned at the corners of the device. We support efficient and accurate pattern recognition using temporal convolution and real-time cursor tracking using virtual pixel reconstruction. 
    </p>
</div>

<div align="center">
    <img src="/assets/images/pixelless_overview.png" alt="Example Image" width="800"/>
    <p class="figure_caption">
        <strong>Figure 1.</strong> Caption
    </p>
<div>

<div align="center">
    <img src="/assets/images/pixelless_virtual_pixel.png" alt="Example Image" width="800"/>
    <p class="figure_caption">
        <strong>Figure 2.</strong> Caption
    </p>
<div>