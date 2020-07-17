---
id: flexibility
title: Flexibility Index
---

ANA allows to quantify the flexibility of a cavity using a PDB structure and a set of collective coordinates
(vectors) and their frequencies. These two may come from either an analysis of a Molecular Dynamics
run ---Principal Component Analysis, or PCA---, or a Normal Mode Analysis (NMA) of a protein PDB structure,
but the calculation itself doesn't change between them: ANA will displace the protein cavity along each vector
and calculate its effect on the total volume, by summing up all the effects on the cavity ANA can quantify the overall
flexibility of the cavity.
As always, all the files are available [**online**](https://github.com/anadynamics/ANA2/tree/master/aux/flexibility).

## Based on Principal Component Analysis from a Molecular Dynamics trajectory

Since ANA is able to read vectors and frequencies from the
[**Amber PCA file format**](https://pubs.acs.org/doi/abs/10.1021/j100384a021), we'll first check an example
of this specific case.
 
We continue our previous work with the Lipid Binding Proteins from the [**Flexibility**](flexibility.html) tutorial. 
by adding another b-sheet LBP and considering the apo and holo structures for each protein.
We will be identifying each protein by their PDB ID: **4XCP** and **4UET** are the α-helix LBP with and without a
ligand (palmitate), while **2IFB** and **1IFB** are the β-sheet LBP with and without the same palmitate ligand.

As we've already seen, **4XCP** (palmitate bound α-helix LBP) presents at least 2 conformers so there is some
flexibility associated with this bound protein but how flexible is it exactly? And how does it compare against
its ligand-free form and a β-sheet LBP?

![](assets/flexibility/lbp.png)

The cavity has already been defined following the steps described in the [**Quickstart**](quickstart.html)
and we also set ANA to High precision (`included_area_precision = 1`), so let's
focus on the flexibility specific options. Flexibility calculations are based on the Non-Delaunay Dynamics
method (described [**here**](https://doi.org/10.1021/acs.jctc.7b00744)), so all their specific options begin
with **NDD_**. Both configuration files (**config_alfa.cfg** and **config_beta.cfg**) have these 3 lines:

```
NDD_modes_format = amber
NDD_particles_per_residue = 1
NDD_step = 3
```

`NDD_modes_format `the `amber` format, since we have Amber PCA vectors (**modes_4uet**, **modes_4xcp**,
**modes_1ifb** and **modes_2ifb**). These vectors have an **x**, **y** and **z** component for each 
particle and what "particle" means depends on the coarse grain model. In this case, we have an alpha
carbon model, so each residue will be represented by 1 particle, we let ANA know this in the second line.
To read more about the `NDD_particles_per_residue` option check the [**reference section**](config.html#ndd-options).

The third line, `NDD_step = 3` tells ANA how far do we want to go with the calculation. ANA performs the
NDD method in 3 steps:

1. In the first step, ANA calculates two volumes corresponding to structural + and - displacements in the direction of each PCA mode.
2. In the second step, ANA calculates the corresponding partial derivatives numerically by using the difference in
the volumes between each pair of displaced structures. Partial derivatives are the components of the
**Volume Gradient Vector** (**VGV**). This VGV corresponds to the direction of maximum cavity volume change and
is given as vector expressed on the basis of PCA modes.
3. In the third and final step, ANA makes use of the VGV vector and the input frequencies to calculate the flexibility
of the cavity.

If we wanted to perform just the first steps, then we would have to specify the terminal option
`NDD_output`, since we will be getting 2 vectors with the displaced volumes (if `NDD_step = 1`) or the VGV
(when `NDD_output = 2`). Since `NDD_step = 3` ANA will just output the flexibility to the console.

We now turn out attentino to the **step_1.sh** script file:

```
ANA2 avg_4uet.pdb -c config_alfa.cfg -M modes_4uet -Z 5

ANA2 avg_4xcp.pdb -c config_alfa.cfg -M modes_4xcp -Z 5

ANA2 avg_1ifb.pdb -c config_beta.cfg -M modes_1ifb -Z 5

ANA2 avg_2ifb.pdb -c config_beta.cfg -M modes_2ifb -Z 5
```

Notice that all PDB names begin with **avg_**, these are the most representative structures from our trajectories
for each system. This is necessary since the PCA vectors we have (**modes_**...) were calculated in reference to
an average structure, so we took the closest frame of our trajectory to that theoretical average. The name of the
file with the PCA vectors and their frequencies are specified using the flag `-M`.
We also see a new terminal option `-Z` or `--NDD_size`, this is a multiplier that affects how much ANA displaces
the cavity along each vector. Different proteins and different cavities may need different magnitudes, but so far
a value of 5 has been the most reliable magnitude. If you wish to check the convergence of the calculation, you
can rerun the calculations with a `--NDD_size` (`-Z`) of, say, `3`, `4`, `6` and `7`. 

This is the output we get from **step_1.sh**:

```
> ./step_1.sh 
Beta without ligand
Flexibility:  0.4143303855

Beta with ligand
Flexibility:  0.2663154032

Alpha without ligand
Flexibility:  0.1806277908

Alpha with ligand
Flexibility:  0.2247477615
```

ANA gave us a parameter representing the flexibility of each protein's cavity. To do this, ANA obtained the 
previously described VGV and calculated how much the potential energy of the protein would change if it displaced
1 arbitrary unit along that direction. The lower the change of energy, the higher the flexibility since this
means the protein doesn't need much energy to change the volume of its cavity. ANA reports the inverse of this
energy change as a measure of the flexibility of the cavity.

So, looking at the reported flexibility indices we can see that the all β-sheet LBP becomes quite more rigid when
binding its ligand, this is not a rare phenomenon and what we would expect from any random protein+ligand system.
The unexpected happens when we try to do the same with the all α-helix LBP and see the opposite result.
Not only it doesn't become more rigid, this LBP becomes a bit more flexible after biding palmitate.

This is just an example, we won't get into why this happens and why such a behaviour would be desirable for an organism.
More details about this particular system can be found [**elsewhere**](https://doi.org/10.1021/acs.jcim.9b00364).

## Based on Normal Mode Analysis

We now compare the flexibility of the cavities of 2 different proteins, but with similar function. They belong
to the dynein family of cytoskeletal motor proteins that move along microtubules.
Specifically, these are called *dynein light chains* and they both interact, through their cavities, with a 
disordered region of another dynein protein:

![](assets/flexibility/3fm7.png)

We have two homodimeric dynein light chains: Tctex1 (in dark salmon) and LC8 (in sand color). Each have 2 identical cavities
---which we will call cavities **C** and **D**---, through which they interact with a disordered Short Linear Motif (SLM)
of another protein's disordered region (in light blue). The regular expression of the SLMs to which the LC8 homodimer binds has
been already determined, but this is not the case for the TcTex1 domain.

If we check each domain separately, we see where their cavities lie. The LC8 domain: 
![](assets/flexibility/lc8.png)

and the TcTex1 domain, which is a bit bigger:

![](assets/flexibility/tctex.png)

So, since we have 4 cavities, we have 4 configuration files. Only the `included_area_residues` option changes
between them, so we'll focus on the NDD specific options:

```
NDD_modes_format = column
NDD_particles_per_residue = 1
NDD_step = 3
```

The only change with respect to the LBPs configuration files is the input vectors format (`NDD_modes_format` option),
now set to `column` since these are not Amber PCA vectors, but NMA vectors in a file where each column represents a vector.

The files with the vectors for each structure are called **modes_lc8** and **modes_tctex**.
We also have the files with the frequencies (**frequencies_lc8** and **modes_tctex**). This frequency files must have a
single column with a single frequency at each row and a fixed column width.
There should also be one frequency for each vector and if not, ANA will let you know and cancel the run.

The execution lines are inside the **./step_1.sh** file:

```
ANA2 lc8.pdb -c ecf.cfg -M modes_lc8 -F frequencies_lc8

ANA2 lc8.pdb -c edf.cfg -M modes_lc8 -F frequencies_lc8

ANA2 tctex.pdb -c acb.cfg -M modes_tctex -F frequencies_tctex

ANA2 tctex.pdb -c adb.cfg -M modes_tctex -F frequencies_tctex
```

We see a new flag `-F`, this points ANA to the file with the frequencies. Also, we  discarded the `-Z` flag
because we don't trust the frequencies we have to be exact. These come in unknow units so we don't
really worry much about the absolute flexibility indices we get, we just care about the comparisons we can make and
since both structures, **lc8.pdb** and **tctex.pdb**, come from the same experiment, we can trust the frequencies
to have relative meaning.

Let's run our **./step_1.sh** script:

```
> ./step_1.sh 
LC8 cavity C
Flexibility:  0.0682823876

LC8 cavity D
Flexibility:  0.0666958518

TcTex cavity C
Flexibility:  0.0740250804

TcTex cavity D
Flexibility:  0.0713922904
```

As we said, the frequencies we're getting are not in cm^-1, which is the unit ANA expects them to be, so the
flexibility index is not exact. But we can still notice the difference: TcTex1 has more flexible cavities and
that could account for the lack of a regular expression of the SLMs it can bind to. Indeed, we were able to
capture this higher flexibility in MD runs (not published).


### Addendum

1. Notice that all the shorthands for the NDD terminal options (like `-M`, `-Z`, `-F`,...) are capitalized.

