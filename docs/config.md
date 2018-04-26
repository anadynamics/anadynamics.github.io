---
id: config
title: Configuration variables
---

## Options included in ANA GUI

### Terminal options
    input_struct,i
Positional argument. Input structure (.pdb).

    input_md,d
Input file with MD simulation. Default value: **none**.

    NDD_input,I
File with the list of input .pdbs for Non-Delaunay dynamics. Default value: **none**.

    config_file,c
Filename of the configuration file. Default value: **ANA.cfg**.

    output_draw,o
Output filename. Default value: **none**.

    NDD_output,O
Name of the non Delaunay dynamics output file. Default value: **none**.

    tool_ch,C
Filename of the .pdb file displaying the included. Default value: **none**.

    ver,v
Output version number.


### Included area options
    included_area_residues
Amino acids that delimit the convex hull of the included area. Numbers from 1
to 9999, separated by commas, spaces or tabs. Default value: **none**. 

    included_area_atoms
Atoms that delimit the convex hull of the included area. Numbers from 1 
to 9999, separated by commas, spaces or tabs. Default value: **none**.

    included_area_precision
**0**: keep all cells that intercede in the included area; **1**: only keep null areas
that are within the included area. Default value: **0**.

### Accessible Surface Area options
    ASA_discard_method
**none**: don't discard; **cm**: determine cells surroundings using the global
CM as reference; **backbone**: draw a convex hull between the Calphas and
discard every cell with its centroid outside(inside) the hull; 
**axes**: determine cells surroundings using its centroid and cartesian axes as references.
Default value: **cm**.

    ASA_only_side
**inside**: keep inside nulls; **outside**: keep outside nulls. Default value: **inside**.

    ASA_exclude_residues
Don't use these to discard ASA cells. Default value: **none**.

    ASA_min_dot_pdt
Minimum dot product to keep (discard) cell. As it increases more cells are
classified as being outside. Default value: **0.7**.

    ASA_max_dist
Maximum distance between cell and Calpha used to keep cell. The bigger this
number is the better (but slower) the process gets. Default value: **15**.

### Clusters options
    clusters_method
**none**: don't group null areas; **facets**: group null areas if the tetrahedrons share
facets; **boxes**: group null areas if the tetrahedrons bounding boxes intersect.
Default value: **boxes**.

    clusters_min_size
Minimum number of cells a cluster has to have to be included.
Default value: **2**.

### MD options
    start
Frame to begin reading at. Default value: **1**;

    step
Step count to read trajectory frames. Note that only NetCDF files support this feature. Default value: **1**;

    stop
Frame to stop reading. Default value: **0**.

### Output options
    output_type
**raw_pdb**: null areas as tetrahedrons (residues); **grid_pdb** null areas
filled with points. Default value: **grid_pdb**.

    sphere_size
sphere size for grid output. Default value: **0.3**.

    sphere_count
sphere count for grid output. Default value: **5**.


## Misc options    
    atom_only
Triangulate only ATOM records.\n" default_value(**true**)

    list_wall
**atom**: output a file with the wall atoms; **residue**: output a file with
the wall amino acids; **none**: don't write wall file. Default value: **none**.

    separator
Separator character for wall residues or atoms. Default value: **\t**. 

    min_vol_radius
Radius of the sphere with the minimum volume to be taken into account.
Default value: **1.4**.

## Options not included in ANA GUI

### Terminal options   
    include,f
Coordinates of the included area in .pdb format. Default value: **none**.

    tool_pdb_ch,P
Read the input .pdb and write *include.ANA* file with the vertices of its
convex hull. Default value: **none**.

    tool_pdb_norm,N
Filename of the output .pdb file. Read the input .pdb and renumber its atoms and residues.
Default value: **none**. 

    tool_aa_to_ca,T
Write Calpha atoms indices for the included residues to stdout. Default value: **none**.

### misc options
    included_amino_acids
Amino acids that are part of a cell. Default value: **none**.

    sphere
Read the input coordinates and write *include_sphere.ANA* file with the
requested pseudo sphere. Default value: **none**.

    cylinder
Read the input coordinates and write *include_cylinder.ANA* file with the
requested pseudo cylinder. Default value: **none**.

    prism
Read the input coordinates and write *include_prism.ANA* file with the requested prism. Default value: **none**.

    triangulate_only_included_aas
Instead of triangulating the whole molecule, triangulate only the included amino acids. Default value: **false**.

    minimum_number_of_vertices_to_include
Minimum number of wall atoms of the included amino acids.Default value: **99**.
