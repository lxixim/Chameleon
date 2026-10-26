# Chameleon

**Chameleon: Benchmarking Detection and Backtracking on Commercial-Grade AI-Generated Videos**

Xingming Liao · Meiyu Zeng · Canyu Chen · Nankai Lin · Zhuowei Wang · Aimin Yang  
Guangdong University of Technology · ICMR 2026

## Overview

Chameleon is a benchmark for forensic analysis of modern synthetic video. It evaluates two related questions:

1. **Detection:** Can a model distinguish captured footage from AI-generated content?
2. **Backtracking:** Can it retrieve the real-world video used to create a generated query?

The benchmark focuses on commercial-grade generation, where higher visual quality, steadier motion, and richer scene changes make synthetic media harder to identify.

## Dataset

- **2,300 videos:** 1,700 generated videos and 600 real source videos
- **Three domains:** News, Speech, and Recommendation
- **Generation routes:** text-image-to-video, text-to-video, and digital human video
- **Standardization:** 30 FPS with captions, keyframes, semantic labels, and source links
- **Split:** 60% train, 20% validation, and 20% test

Each generated sample preserves a relationship to its source footage, enabling both authenticity classification and provenance retrieval.

## Reported results

On the detection task, the video-level DeMamba baseline reports **80.69% ACC** and **92.63% AUC**. For backtracking, the strongest reported backbone reaches **0.733 mean R@1** and **0.900 mean R@3**.

## Resources

- [Project page](https://lxixim.github.io/Chameleon/)
- [Paper PDF](icmr26_305.pdf)
- [Dataset on Hugging Face](https://huggingface.co/datasets/viviwang/Chameleon)
- [Repository](https://github.com/lxixim/Chameleon)

## Citation

```bibtex
@inproceedings{liao2026chameleon,
  title     = {Chameleon: Benchmarking Detection and Backtracking on Commercial-Grade AI-Generated Videos},
  author    = {Liao, Xingming and Zeng, Meiyu and Chen, Canyu and Lin, Nankai and Wang, Zhuowei and Yang, Aimin},
  booktitle = {Proceedings of the International Conference on Multimedia Retrieval},
  year      = {2026},
  doi       = {10.1145/3805622.3810862}
}
```
