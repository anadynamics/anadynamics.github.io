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
- *λ^{amber}*: amber frequencies in units of 1/cm
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

#### Rigidity constant

<img src="https://latex.codecogs.com/svg.latex?\Large&space;k_{VGV} = \frac{1}{108.591^{2}} \sum_{i=1}^{3N-6} c_{i}^{2} \lambda_{i \ Amber}^{2}" title="harmonique_u" />

### In units of *KJ/mol*

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\lambda_{NMA} = 4 \pi^{2} c^{2} E^{-22} \lambda_{Amber}^{2}" title="harmonique_u" />

#### Rigidity constant

<img src="https://latex.codecogs.com/svg.latex?\Large&space;k_{VGV} = \frac{1}{53.088^{2}} \sum_{i=1}^{3N-6} c_{i}^{2} \lambda_{i \ Amber}^{2}" title="harmonique_u" />

## Amber PCA eigenvalues to quasi-harmonic analysis frequencies

From equipartition theorem:

<img src="https://latex.codecogs.com/gif.latex?\omega_{i}&space;=&space;\sqrt{\frac{K_{B}T}{\lambda_{PCA \ i}}}" title="\omega_{i} = \sqrt{\frac{K_{B}T}{\lambda_{PCA \ i}}}" />

In Amber from angstroms^2 to cm^-1 in Kcal/mol, at 300K:

<img src="https://latex.codecogs.com/gif.latex?\lambda_{amber \ i}&space;=&space;108.587&space;\sqrt{\frac{0.6}{\lambda_{PCA \ i}}}" title="\lambda_{i \ amber} = 108.587 \sqrt{\frac{0.6}{\lambda_{PCA \ i}}}" />

- *λ_{i \ amber}*: amber frequencies in units of 1/cm
- *λ_{PCA \ i}*: amber PCA eigenvalues in units of Å^{2}
- constant added to adjust Å to cm^{-1}

