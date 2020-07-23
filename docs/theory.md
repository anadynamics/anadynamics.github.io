---
id: theory
title: Theory
---

#### Disclaimer: this section is for ANA's developers reference. It does not contain relevant information for the users.

## Spring constant

Adaptations used to calculate cavity [**flexibility**](flexibility.html) from Amber mass-weighted eigenvalues.

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\omega = \lambda_{amber} c \ 10^{8} \ 10^{3}" title="harmonique_u" />

where,

- *ν*: frequency in units of 1/s
- *λ^{amber}*: amber eigenvalues in units of 1/cm
- *c*: speed of light
- constants added to adjust *cm* to *angstroms* and *Kg* to *g*

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\omega = 2\pi \nu " title="harmonique_u" />

where,

- *ω*: angular frequency in units of 1/s

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\omega^{2} = \frac{\lambda_{NMA}}{m}" title="harmonique_u" />

where,

- *λ^{NMA}*: spring constant *k* for a NMA vector
- *m*: mass (doesn't matter as long as units are correct)


### In units of *Kcal/mol*

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\lambda_{NMA} = 4 \pi^{2} c^{2} 4.184E^{-22} \lambda_{Amber}^{2}" title="harmonique_u" />

#### Energy of displacement along VGV

<img src="https://latex.codecogs.com/svg.latex?\Large&space;E_{VGV} = \frac{1}{2} \frac{1}{108.591^{2}} \sum_{i=1}^{3N-6} c_{i}^{2} \lambda_{i \ Amber}^{2}" title="harmonique_u" />

### In units of *KJ/mol*

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\lambda_{NMA} = 4 \pi^{2} c^{2} E^{-22} \lambda_{Amber}^{2}" title="harmonique_u" />

#### Energy of displacement along VGV

<img src="https://latex.codecogs.com/svg.latex?\Large&space;E_{VGV} = \frac{1}{2} \frac{1}{53.088^{2}} \sum_{i=1}^{3N-6} c_{i}^{2} \lambda_{i \ Amber}^{2}" title="harmonique_u" />

